import { connectToDatabase } from "@/app/helper/server-helper";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from 'bcrypt'
export const POST = async (req: Request) => {
    try {
        const { name, email, password, age, weight, gender, heightFeet, heightInches } = await req.json();
        if (!name || !email || !password)
            return NextResponse.json({ message: "Invalid Data" }, { status: 422 })
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectToDatabase()
        const newUser = await prisma.user.create({ data: { email, name, password: hashedPassword, age, weight, gender, heightFeet, heightInches } })
        return NextResponse.json({ message: "succesfully registered", newUser }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error in the sing up"

        }, { status: 401 })
    }
    finally {
        await prisma.$disconnect();
    }
}