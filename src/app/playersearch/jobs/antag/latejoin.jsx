import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
const Jobs = [
  "Syndicate Infiltrator",
  "Heretic Smuggler",
  "Provocateur",
  "Stowaway Changeling",
];
export default function LateJoinJobs({ playtimedata }) {
  return (
    <div className={styles.latejoin}>
      <h3>Late Join</h3>
      <hr />
      {Jobs.map((jobTitle) => (
        <JobComponent
          key={jobTitle}
          params={{ name: jobTitle, icon: jobTitle, data: playtimedata }}
        />
      ))}
    </div>
  );
}
