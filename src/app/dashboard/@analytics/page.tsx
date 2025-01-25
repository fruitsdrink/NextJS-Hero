import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-rose-400 text-white h-20 flex justify-center items-center">
      <Link href={"/dashboard/visitor"}>@analytics click me</Link>
    </section>
  );
}
