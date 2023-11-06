import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (response: any, { params }: any) => {
  const { id } = params;
  try {
    await connectDB();
    const post: any = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (response: any, { params }: any) => {
  const { id } = params;
  try {
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request: any, { params }: any) => {
  const { id } = params;
  const body = await request.json();
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true });
    return new NextResponse(updatedPost, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
