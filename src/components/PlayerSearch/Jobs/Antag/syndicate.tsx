import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Traitor",
  "Blood Brother",
  "Spy",
  "Malf AI",
  "Head Revolutionary",
  "Revolutionary",
  "Provocateur",
  "Nuclear Operative",
  "Clown Operative",
  "Operative (Midround)",
  "Lone Operative",
  "Contractor Support Unit",
  "Operative Overwatch Agent",
  "Syndicate Assault Cyborg",
  "Syndicate Cyborg",
  "Syndicate Infiltrator",
  "Syndicate Medical Cyborg",
  "Syndicate Monkey Agent",
  "Syndicate Sabotage Cyborg",
  "Battlecruiser Captain",
  "Battlecruiser Crew",
];
export default function SyndicateJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.security}>
      <h3>Syndicate</h3>
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
