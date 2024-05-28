import { getTimeString } from "@/utils/PlayerSearchUtils";
import styles from "../../styles/playersearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { stationIcons } from "./Jobs/Station/stationicons";
import { antagIcons } from "./Jobs/Antag/antagicons";
import { otherIcons } from "./Jobs/Other/othericons";
library.add(fas);

interface IJob {
  icon: string;
  iconmap: string;
  name: string;
  data: any;
}

function findIcon(iconmap: any, icon: any) {
  switch (iconmap) {
    case "Station":
      return stationIcons[icon];
    case "Antag":
      return antagIcons[icon];
    case "Other":
      return otherIcons[icon];
    default:
      return "x";
  }
}

const findJobMinutes = (jobName: string, data: any) => {
  const job = data.find((item: any) => item.job === jobName);
  return job ? getTimeString(job.minutes) : "0 Saat 0 Dakika";
};

export default function JobComponent(params: IJob) {
  return (
    <div className={styles.jobdetail}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={findIcon(params.iconmap, params.icon)}
      />
      <span>{params.name}</span>
      <p className={styles.time}>{findJobMinutes(params.name, params.data)}</p>
    </div>
  );
}
