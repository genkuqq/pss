import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";

const Jobs = [
  "Head of Security",
  "Warden",
  "Detective",
  "Brig Physician",
  "Security Officer",
];
export default function SecurityJobs({ playtimedata }) {
  return (
    <div className={styles.security}>
      <h3>Security</h3>
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
