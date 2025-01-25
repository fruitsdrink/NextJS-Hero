import React from "react";
import { images } from "@/app/intercepting-routes/data";
import { notFound } from "next/navigation";
import { ImageModal } from "./components";

interface Props {
  params: {
    id: string;
  };
}
export default function Page({ params }: Props) {
  const image = images.find((image) => image.id === parseInt(params.id));

  if (!image) {
    notFound();
  }

  return <ImageModal image={image} />;
}
