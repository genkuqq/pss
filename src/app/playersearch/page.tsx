import {
  IPlayerData,
  IPlayerPlaytimeData,
  getPlayerData,
  getPlayerPlaytime,
  getTimeString,
} from "@/utils/PlayerSearchUtils";

export default async function PlayerSearch() {
  const playerData: IPlayerData | null = await getPlayerData("Nuckg");
  const playerPlaytimeData: IPlayerPlaytimeData[] | null =
    await getPlayerPlaytime("Nuckg");
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
