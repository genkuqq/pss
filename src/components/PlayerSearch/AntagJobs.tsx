import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
import styles from "../../styles/playersearch.module.scss";
import SyndicateJobs from "./Jobs/Antag/syndicate";
import AbductorsJobs from "./Jobs/Antag/abductors";
import BiohazardJobs from "./Jobs/Antag/biohazard";
import MagicJobs from "./Jobs/Antag/magic";
import SpaceThreatJobs from "./Jobs/Antag/spacethreat";
import WizardJobs from "./Jobs/Antag/wizard";

export default function AntagJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.playercontainer}>
      <div className={styles.flexrow}>
        <div className={styles.flexcol}>
          <SyndicateJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <SpaceThreatJobs playtimedata={playtimedata} />
          <AbductorsJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <BiohazardJobs playtimedata={playtimedata} />
          <MagicJobs playtimedata={playtimedata} />
          <WizardJobs playtimedata={playtimedata} />
        </div>
      </div>
    </div>
  );
}
