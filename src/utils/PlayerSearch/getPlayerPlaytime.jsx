export async function getPlayerPlaytime({ ckey }) {
  const response = await fetch(
    `https://api.turkb.us/v2/player/roletime?ckey=${ckey}`,
    {
      cache: "no-cache",
      headers: {
        "X-DEV-KEY": process.env.DEV_KEY,
      },
    }
  );
  if (!response.ok) {
    return false;
  }
  return await response.json();
}
