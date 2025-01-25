import { sleep } from "@/utils";

export default async function Page() {
  await sleep(2000);
  return (
    <section className="bg-green-400 text-white h-20 flex justify-center items-center">
      @team default
    </section>
  );
}
