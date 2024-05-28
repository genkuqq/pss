import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Nightmare",
  "Space Dragon",
  "Space Ninja",
  "Spider",
  "Xenomorph",
  "Space Pirate",
  "Revenant",
  "Paradox Clone",
  "Fugitive",
  "Fugitive Hunter",
  "Pyroclastic Anomaly Slime",
];
export default function SpaceThreatJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.security}>
      <h3>Space Threat</h3>
      <hr />
      {Jobs.map((jobTitle) => (
        <JobComponent
          key={jobTitle}
          name={jobTitle}
          icon={jobTitle}
          iconmap="Antag"
          data={playtimedata}
        />
      ))}
    </div>
  );
}
