import React from "react";
import { images } from "@/app/intercepting-routes/data";
import { notFound } from "next/navigation";
import { ImageModal } from "./components";

interface Props {
  params: Promise<{
    id: string;
  }>;
}
export default async function Page(props: Props) {
  const params = await props.params;
  const image = images.find((image) => image.id === parseInt(params.id));

  if (!image) {
    notFound();
  }

  return <ImageModal image={image} />;
}
