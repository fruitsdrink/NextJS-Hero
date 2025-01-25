import { NextResponse } from "next/server";
import { ApiResponse, db } from "../db";

export async function GET(request: Request) {
  const posts = db.data.posts;
  return ApiResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  //const id = crypto.randomUUID();
  const id = Math.random().toString(36).slice(-8);
  const post = { id, title, content };
  db.data.posts.unshift(post);
  db.write();
  const result = ApiResponse.json(post);
  return result;
}
