import StationJobs from "@/components/PlayerSearch/StationJobs";
import styles from "../../../styles/playersearch.module.scss";
import {
  IPlayerData,
  IPlayerPlaytimeData,
  getPlayerData,
  getPlayerPlaytime,
} from "@/utils/PlayerSearchUtils";
import AntagJobs from "@/components/PlayerSearch/AntagJobs";
import PlayerSearch from "../page";
import PlayerNotFound from "./PlayerNotFound";

export default async function PlayerDetails({
  params,
}: {
  params: { username: string };
}) {
  const playerData: IPlayerData | null = await getPlayerData(params.username);
  const playerPlaytimeData: IPlayerPlaytimeData | null =
    await getPlayerPlaytime(params.username);
  if (!playerData) {
    return (
      <>
        <PlayerSearch />
        <PlayerNotFound />
      </>
    );
  }
  if (!playerPlaytimeData) {
    return null;
  }
  return (
    <div>
      <PlayerSearch />
      <div className={styles.playerdetails}>
        <div className={styles.profile}>
          <div
            style={{
              verticalAlign: "middle",
              textAlign: "center",
              padding: "0",
              margin: "0",
              alignItems: "center",
            }}
          ></div>

          <div style={{ textAlign: "left" }}>
            <h1>{playerData.byond_key}</h1>
            <h3>Son Görülme {playerData.last_seen}</h3>
            <h3>Son Görüldüğü Round {playerData.last_seen_round}</h3>
          </div>
        </div>
      </div>
      <div className={styles.jobheader}>Station Jobs</div>
      <StationJobs playtimedata={playerPlaytimeData} />
      <div className={styles.jobheader}>Antags</div>
      <AntagJobs playtimedata={playerPlaytimeData} />
    </div>
  );
}
