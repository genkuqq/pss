import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
const Jobs = [
  "Chief Medical Officer",
  "Medical Doctor",
  "Paramedic",
  "Chemist",
  "Coroner",
];
export default function MedicalJobs({ playtimedata }) {
  return (
    <div className={styles.medical}>
      <h3>Medical</h3>
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
