import styles from "../../styles/playersearch.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import CommandJobs from "../../app/playersearch/jobs/station/command";
import SecurityJobs from "../../app/playersearch/jobs/station/security";
import EngineeringJobs from "../../app/playersearch/jobs/station/engineering";
import MedicalJobs from "../../app/playersearch/jobs/station/medical";
import ScienceJobs from "../../app/playersearch/jobs/station/science";
import CargoJobs from "../../app/playersearch/jobs/station/cargo";
import ServiceJobs from "../../app/playersearch/jobs/station/service";
import SiliconJobs from "../../app/playersearch/jobs/station/silicon";
import NoDepartmentJobs from "../../app/playersearch/jobs/station/nodepartment";

export default function StationJobs({ playtimedata }) {
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
