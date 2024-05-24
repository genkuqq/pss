import styles from "../../styles/playersearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../app/playersearch/jobs/iconmap";

const getTimeString = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours} Saat ${mins} Dakika`;
};

const findJobMinutes = (jobName, data) => {
  const job = data.find((item) => item.job === jobName);
  return job ? getTimeString(job.minutes) : "0 Saat 0 Dakika";
};

export default function JobComponent({ params }) {
  return (
    <div className={styles.jobdetail}>
      <FontAwesomeIcon className={styles.icon} icon={iconMap[params.icon]} />
      <span>{params.name}</span>
      <p className={styles.time}>{findJobMinutes(params.name, params.data)}</p>
    </div>
  );
}
