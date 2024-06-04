import { connectToDatabase } from "@/app/helper/server-helper";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from 'bcrypt'
export const POST = async (req: Request) => {
    try {
        const { name, email, password } = await req.json();
        if (!name || !email || !password)
            return NextResponse.json({
                message: "Invalid Data",
            }, {
                status: 422
            })
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectToDatabase()
        const newUser = prisma.user.create({ data: { email, name, hashedPassword } })
    } catch (error) {

    }
}