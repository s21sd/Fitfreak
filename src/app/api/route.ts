import { connectToDatabase } from "@/app/helper/server-helper";
import { NextResponse } from "next/server";
import prisma from "../../../prisma";
import bcrypt from 'bcrypt';

interface LoginSchema {
    email: string;
    password: string;
}

interface RegisterSchema {
    name: string;
    email: string;
    password: string;
    age: number;
    weight: number;
    gender: string;
    heightFeet: number;
    heightInches: number;
}

export const POST = async (req: Request) => {
    try {
        const { action, ...data } = await req.json();

        if (action === "login") {
            return await handleLogin(data as LoginSchema);
        } else if (action === "register") {
            return await handleRegister(data as RegisterSchema);
        } else {
            return NextResponse.json({ message: "Invalid action" }, { status: 400 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error during processing request" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

const handleLogin = async ({ email, password }: LoginSchema) => {
    if (!email || !password) {
        return NextResponse.json({ message: "Please provide the details" }, { status: 422 });
    }

    await connectToDatabase();

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 403 });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
        return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
};

const handleRegister = async ({ name, email, password, age, weight, gender, heightFeet, heightInches }: RegisterSchema) => {
    if (!name || !email || !password) {
        return NextResponse.json({ message: "Invalid data" }, { status: 422 });
    }

    await connectToDatabase();

    const findUser = await prisma.user.findUnique({
        where: { email },
    });

    if (findUser) {
        return NextResponse.json({ message: "Email already used, please try with a different email" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
            age,
            weight,
            gender,
            heightFeet,
            heightInches,
        },
    });

    return NextResponse.json({ message: "Successfully registered", newUser }, { status: 201 });
};
