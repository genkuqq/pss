import styles from "../../styles/playersearch.module.scss";
import LateJoinJobs from "../../app/playersearch/jobs/antag/latejoin";
import MidRoundJobs from "../../app/playersearch/jobs/antag/midround";
import RoundStartJobs from "../../app/playersearch/jobs/antag/roundstart";

export default function AntagJobs({ playtimedata }) {
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
