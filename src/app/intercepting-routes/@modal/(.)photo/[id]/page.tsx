import React from "react";
import { images } from "@/app/intercepting-routes/data";
import { notFound } from "next/navigation";
import { ImageModal } from "./components";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const { id } = await params;

  const image = images.find((image) => image.id === parseInt(id));

  if (!image) {
    notFound();
  }

  return <ImageModal image={image} />;
}
