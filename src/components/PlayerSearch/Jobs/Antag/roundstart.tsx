import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Traitor",
  "Blood Brother",
  "Changeling",
  "Clown Operative",
  "Cultist",
  "Revolutionary",
  "Heretic",
  "Malfunctioning AI",
  "Nuclear Operative",
  "Spy",
  "Wizard",
];
export default function RoundStartJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.roundstart}>
      <h3>Round Start</h3>
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
