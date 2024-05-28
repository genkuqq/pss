import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Big Brother",
  "Bridge Assistant",
  "Cargo Gorilla",
  "Cargorilla",
  "Veteran Security Advisor",
  "Avatar of the Wish Granter",
  "revolution enemy",
  "exiled headrev",
  "Santa",
  "valentine",
  "survivalist",
  "highlander",
];
export default function ConditionalJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.cargo}>
      <h3>Conditional</h3>
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
