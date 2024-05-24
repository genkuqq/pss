import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
const Jobs = [
  "Head of Personnel",
  "Nt Secretary",
  "Bartender",
  "Botanist",
  "Cook",
  "Janitor",
  "Clown",
  "Mime",
  "Curator",
  "Lawyer",
  "Chaplain",
  "Psychologist",
];
export default function ServiceJobs({ playtimedata }) {
  return (
    <div className={styles.service}>
      <h3>Service</h3>
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
