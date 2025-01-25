export function sleep(ms: number = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 异步操作完成后调用resolve
      resolve(null);
    }, ms); // 延迟2秒
  });
}
