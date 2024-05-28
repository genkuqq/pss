import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Ancient Crew",
  "Ash Walker",
  "Hermit",
  "Beach Bum",
  "Lifebringer",
  "Space Bartender",
  "Cyber Police",
  "Glitch",
  "Lavaland Syndicate",
  "Space Syndicate",
  "Cybersun Space Syndicate",
  "Cybersun Space Syndicate Captain",
  "Derelict Drone",
  "Maintenance Drone",
  "Free Golem",
  "Servant Golem",
  "Venus Human Trap",
  "Ghost Role",
];
export default function GhostJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.cargo}>
      <h3>Ghost Role</h3>
      <hr />
      {Jobs.map((jobTitle) => (
        <JobComponent
          key={jobTitle}
          name={jobTitle}
          icon={jobTitle}
          iconmap="Other"
          data={playtimedata}
        />
      ))}
    </div>
  );
}
