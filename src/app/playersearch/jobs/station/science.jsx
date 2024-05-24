import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
const Jobs = ["Research Director", "Scientist", "Roboticist", "Geneticist"];
export default function ScienceJobs({ playtimedata }) {
  return (
    <div className={styles.science}>
      <h3>Science</h3>
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
