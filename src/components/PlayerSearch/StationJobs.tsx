import styles from "../../styles/playersearch.module.scss";

import CommandJobs from "./Jobs/Station/command";
import SecurityJobs from "./Jobs/Station/security";
import EngineeringJobs from "./Jobs/Station/engineering";
import MedicalJobs from "./Jobs/Station/medical";
import ScienceJobs from "./Jobs/Station/science";
import CargoJobs from "./Jobs/Station/cargo";
import ServiceJobs from "./Jobs/Station/service";
import SiliconJobs from "./Jobs/Station/silicon";
import NoDepartmentJobs from "./Jobs/Station/nodepartment";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";

export default function StationJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.playercontainer}>
      <div className={styles.flexrow}>
        <div className={styles.flexcol}>
          <CommandJobs playtimedata={playtimedata} />
          <SecurityJobs playtimedata={playtimedata} />
          <EngineeringJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <MedicalJobs playtimedata={playtimedata} />
          <ScienceJobs playtimedata={playtimedata} />
          <CargoJobs playtimedata={playtimedata} />
        </div>
        <div className={styles.flexcol}>
          <ServiceJobs playtimedata={playtimedata} />
          <SiliconJobs playtimedata={playtimedata} />
          <NoDepartmentJobs playtimedata={playtimedata} />
        </div>
      </div>
    </div>
  );
}
