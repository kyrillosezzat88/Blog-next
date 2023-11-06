import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();
  await connectDB();
  const hashPassword = await bcrypt.hash(password, 10);
  if (!name || !password || !email)
    return new NextResponse("all fileds required", { status: 403 });
  console.log({ name, email, password });
  const newUser = new User({ name, email, password: hashPassword });
  try {
    await newUser.save();

    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
