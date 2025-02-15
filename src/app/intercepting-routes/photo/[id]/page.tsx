import React from "react";
import { images } from "@/app/intercepting-routes/data";
import { notFound } from "next/navigation";
import Image from "next/image";

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
  return (
    <main>
      <h2 className="text-center text-lg font-bold mb-4">{image.desc}</h2>
      <Image
        src={image.url}
        width={200}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </main>
  );
}
