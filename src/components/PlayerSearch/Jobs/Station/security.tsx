import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Head of Security",
  "Warden",
  "Detective",
  "Brig Physician",
  "Security Officer",
];
export default function SecurityJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.security}>
      <h3>Security</h3>
      <hr />
      {Jobs.map((jobTitle) => (
        <JobComponent
          key={jobTitle}
          name={jobTitle}
          icon={jobTitle}
          iconmap="Station"
          data={playtimedata}
        />
      ))}
    </div>
  );
}
