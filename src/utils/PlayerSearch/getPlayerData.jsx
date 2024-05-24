export async function getPlayerData({ ckey }) {
  const response = await fetch(`https://api.turkb.us/v2/player/?ckey=${ckey}`, {
    cache: "no-cache",
    headers: {
      "X-DEV-KEY": process.env.DEV_KEY,
    },
  });
  if (!response.ok) {
    return false;
  }
  return await response.json();
}
