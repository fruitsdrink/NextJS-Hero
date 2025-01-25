function sleep(ms: number = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 异步操作完成后调用resolve
      resolve(null);
    }, ms); // 延迟2秒
  });
}

export default async function Page() {
  await sleep(5000);
  return (
    <section className="bg-green-400 text-white h-20 flex justify-center items-center">
      @team
    </section>
  );
}
