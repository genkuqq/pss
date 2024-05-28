import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
import styles from "../../styles/playersearch.module.scss";
import ConditionalJobs from "./Jobs/Other/conditional";
import GhostJobs from "./Jobs/Other/ghostrole";
import NonRoleJobs from "./Jobs/Other/nonrole";
import RemovedJobs from "./Jobs/Other/removed";
import OtherRoleJobs from "./Jobs/Other/otherrole";

export default function OtherJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.playercontainer}>
      <div className={styles.flexrow}>
        <div className={styles.flexcol}>
          <GhostJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <ConditionalJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <NonRoleJobs playtimedata={playtimedata} />
          <OtherRoleJobs playtimedata={playtimedata} />
          <RemovedJobs playtimedata={playtimedata} />
        </div>
      </div>
    </div>
  );
}
