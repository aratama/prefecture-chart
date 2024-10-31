export const fetcher = async (
  urls: string[]
): Promise<{ url: string; data: unknown }[]> => {
  return await Promise.all(
    urls.map(async (url) => {
      const r = await fetch(url, {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY ?? "",
        },
      });
      return { url, data: await r.json() };
    })
  );
};
