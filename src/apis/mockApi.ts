const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};
const fetchAPI = (date?: Date): Promise<string[]> => {
  if (!date) return new Promise((resolve) => resolve([]));

  return new Promise((resolve) =>
    setTimeout(() => {
      const result: string[] = [];
      const random = seededRandom(date.getDate());
      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) result.push(i + ":00");
        if (random() >= 0.5) result.push(i + ":30");
      }
      resolve(result);
    }, 1000)
  );
};
const submitAPI = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve(JSON.stringify(true));
  });
};
export { fetchAPI, submitAPI };
