import { JSONFilePreset } from "lowdb/node";
import { NextResponse } from "next/server";

type Post = {
  id: string;
  title: string;
  content: string;
};
type Data = {
  posts: Post[];
};
const defaultData: Data = { posts: [] };
export const db = await JSONFilePreset("db.json", defaultData);

export class ApiResponse {
  static json<T>(data: T, code: number = 0, message: string = "ok") {
    return NextResponse.json({ code, message, data });
  }
}
