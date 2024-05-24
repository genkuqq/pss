import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";

const Jobs = [
  "Chief Engineer",
  "Station Engineer",
  "Worker",
  "Atmospheric Technician",
];
export default function EngineeringJobs({ playtimedata }) {
  return (
    <div className={styles.engineering}>
      <h3>Engineering</h3>
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
