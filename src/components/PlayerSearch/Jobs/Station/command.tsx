import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";

const Jobs = [
  "Captain",
  "Head of Personnel",
  "Chief Engineer",
  "Quartermaster",
  "Chief Medical Officer",
  "Research Director",
  "Head of Security",
];

export default function CommandJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.command}>
      <h3>Command</h3>
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
