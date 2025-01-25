"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export const ImageModal = ({
  image,
}: {
  image: { id: number; url: string; desc: string };
}) => {
  const router = useRouter();
  return (
    <main className=" bg-black/90 absolute inset-0 z-10 grid place-content-center">
      <Image
        src={image.url}
        width={400}
        height={400}
        alt=""
        className="w-screen/2 h-screen/2 object-cover rounded-[10px]"
      />
      <div
        className="absolute top-8 left-8 text-2xl font-bold cursor-pointer p-4"
        onClick={() => {
          router.back();
        }}
      >
        &#x2715;
      </div>
    </main>
  );
};
