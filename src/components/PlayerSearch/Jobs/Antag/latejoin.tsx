import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Syndicate Infiltrator",
  "Heretic Smuggler",
  "Provocateur",
  "Stowaway Changeling",
];
export default function LateJoinJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.latejoin}>
      <h3>Late Join</h3>
      <hr />
      {Jobs.map((jobTitle) => (
        <JobComponent
          key={jobTitle}
          name={jobTitle}
          icon={jobTitle}
          data={playtimedata}
        />
      ))}
    </div>
  );
}
