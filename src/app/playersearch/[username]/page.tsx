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
import OtherJobs from "@/components/PlayerSearch/OtherJobs";
import { getTotalPlaytime } from "@/components/PlayerSearch/JobComponent";
import UserDetail from "./UserDetail";

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
          <UserDetail
            playerData={playerData}
            totalplaytime={getTotalPlaytime(playerPlaytimeData)}
          />
        </div>
      </div>
      <div className={styles.jobheader}>Station Jobs</div>
      <StationJobs playtimedata={playerPlaytimeData} />
      <div className={styles.jobheader}>Antags</div>
      <AntagJobs playtimedata={playerPlaytimeData} />
      <div className={styles.jobheader}>Others</div>
      <OtherJobs playtimedata={playerPlaytimeData} />
    </div>
  );
}
