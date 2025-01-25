import { ApiResponse, db } from "../../db";

interface Props {
  params: {
    id: string;
  };
}
export async function GET(request: Request, props: Props) {
  const params = await props.params;
  console.log({ params });

  const post = db.data.posts.find((post) => post.id === params.id);

  if (!post) {
    return ApiResponse.json(null, 404, "post not found");
  }
  return ApiResponse.json(post);
}

export async function DELETE(request: Request, props: Props) {
  const params = await props.params;
  console.log({ params });

  const post = db.data.posts.find((post) => post.id === params.id);

  if (!post) {
    return ApiResponse.json(null, 404, "post not found");
  }

  db.data.posts = db.data.posts.filter((post) => post.id !== params.id);
  db.write();
  return ApiResponse.json(post);
}
