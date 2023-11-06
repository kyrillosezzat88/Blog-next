import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (request: any) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connectDB();
    const Posts: any = await Post.find(username ? { username } : {});
    return new NextResponse(JSON.stringify(Posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: any) => {
  const { title, desc, img, content, username } = await request.json();
  if (!title || !desc || !img || !content || !username) {
    return new NextResponse("all filed required", { status: 403 });
  }
  try {
    await connectDB();
    const newPost = new Post({ title, desc, img, content, username });
    await newPost.save();
    return new NextResponse("post created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
