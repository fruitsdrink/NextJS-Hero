import Image from "next/image";
import { images } from "./data";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h2 className="text-center text-lg font-bold mb-4">拦截路由</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="rounded overflow-hidden">
            <Link href={`/intercepting-routes/photo/${image.id}`}>
              <Image
                className="w-full h-full object-cover hover:scale-110 transition duration-200"
                src={image.url}
                width={200}
                height={200}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
