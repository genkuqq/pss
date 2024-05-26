import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
import styles from "../../styles/playersearch.module.scss";
import LateJoinJobs from "./Jobs/Antag/latejoin";
import MidRoundJobs from "./Jobs/Antag/midround";
import RoundStartJobs from "./Jobs/Antag/roundstart";

export default function AntagJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.playercontainer}>
      <div className={styles.flexrow}>
        <div className={styles.flexcol}>
          <RoundStartJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <MidRoundJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <LateJoinJobs playtimedata={playtimedata} />
        </div>
      </div>
    </div>
  );
}
