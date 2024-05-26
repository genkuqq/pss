import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
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
export default function ServiceJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.service}>
      <h3>Service</h3>
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
