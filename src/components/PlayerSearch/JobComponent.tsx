import { getTimeString } from "@/utils/PlayerSearchUtils";
import styles from "../../styles/playersearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "./Jobs/IconMap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

interface IJob {
  icon: string;
  name: string;
  data: any;
}

const findJobMinutes = (jobName: string, data: any) => {
  const job = data.find((item: any) => item.job === jobName);
  return job ? getTimeString(job.minutes) : "0 Saat 0 Dakika";
};

export default function JobComponent(params: IJob) {
  return (
    <div className={styles.jobdetail}>
      <FontAwesomeIcon className={styles.icon} icon={iconMap[params.icon]} />
      <span>{params.name}</span>
      <p className={styles.time}>{findJobMinutes(params.name, params.data)}</p>
    </div>
  );
}
