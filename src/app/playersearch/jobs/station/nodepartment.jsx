import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
const Jobs = ["Assistant", "Animal", "Prisoner"];
export default function NoDepartmentJobs({ playtimedata }) {
  return (
    <div className={styles.nodepartment}>
      <h3>No Department</h3>
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
