import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Syndicate Sleeper Agent",
  "Abductor",
  "Blob",
  "Blob Infection",
  "Fugitive",
  "Glitch",
  "Lone Operative",
  "Nightmare",
  "Nuclear Assailant",
  "Obsessed",
  "Paradox Clone",
  "Revenant",
  "Sentient Creature",
  "Space Dragon",
  "Space Ninja",
  "Value Drifted AI",
  "Wizard (Midround)",
  "Xenomorph",
];
export default function MidRoundJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.midround}>
      <h3>Mid Round</h3>
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
