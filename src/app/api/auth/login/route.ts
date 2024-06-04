import { connectToDatabase } from "../../../helper/server-helper";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from 'bcrypt'
export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({ message: "Please Provide the details" }, { status: 422 })
        }
        await connectToDatabase();
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            return NextResponse.json({
                message: "User not found "
            }, {
                status: 403
            })
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return NextResponse.json({
                message: "Invalid Password"
            }, { status: 401 })
        }
        return NextResponse.json({ message: "Login successful", user }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error during login" }, { status: 500 });
    }
    finally {
        await prisma.$disconnect();
    }
}