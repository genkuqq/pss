export interface IPlayerData {
  ckey: string;
  byond_key: string;
  first_seen: Date;
  last_seen: Date;
  first_seen_round: string;
  last_seen_round: string;
  byond_age: Date;
}
export interface IPlayerPlaytimeData {
  job: string;
  minutes: number;
}

export async function getPlayerData(ckey: string): Promise<IPlayerData | null> {
  const response = await fetch(`https://api.turkb.us/v2/player/?ckey=${ckey}`, {
    cache: "no-cache",
    headers: {
      "X-DEV-KEY": process.env.DEV_KEY || "",
    },
  });
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  data.first_seen = new Date(data.first_seen);
  data.last_seen = new Date(data.last_seen);
  data.byond_age = new Date(data.byond_age);
  return data;
}

export async function getPlayerPlaytime(
  ckey: string
): Promise<IPlayerPlaytimeData[] | null> {
  const response = await fetch(
    `https://api.turkb.us/v2/player/roletime?ckey=${ckey}`,
    {
      cache: "no-cache",
      headers: {
        "X-DEV-KEY": process.env.DEV_KEY || "",
      },
    }
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
}
