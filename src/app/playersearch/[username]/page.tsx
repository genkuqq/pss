import {
  IPlayerData,
  IPlayerPlaytimeData,
  getPlayerData,
  getPlayerPlaytime,
  getTimeString,
} from "@/utils/PlayerSearchUtils";

export default async function PlayerDetails({
  params,
}: {
  params: { username: string };
}) {
  const playerData: IPlayerData | null = await getPlayerData(params.username);
  const playerPlaytimeData: IPlayerPlaytimeData[] | null =
    await getPlayerPlaytime(params.username);
  if (!playerData) {
    return <div>Boyle bir oyuncu bulunmamakta</div>;
  }
  if (!playerPlaytimeData) {
    return null;
  }
  return (
    <div>
      {playerData.first_seen}
      {playerPlaytimeData.map(
        (playtime: IPlayerPlaytimeData, index: number) => {
          return (
            <div key={index}>
              <p>{playtime.job}</p>
              <p>{getTimeString(playtime.minutes)}</p>
            </div>
          );
        }
      )}
    </div>
  );
}
