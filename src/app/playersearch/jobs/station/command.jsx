import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";

const Jobs = [
  "Captain",
  "Head of Personnel",
  "Chief Engineer",
  "Quartermaster",
  "Chief Medical Officer",
  "Research Director",
  "Head of Security",
];

export default function CommandJobs({ playtimedata }) {
  return (
    <div className={styles.command}>
      <h3>Command</h3>
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
