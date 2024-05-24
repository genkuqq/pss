import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
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
export default function MidRoundJobs({ playtimedata }) {
  return (
    <div className={styles.midround}>
      <h3>Mid Round</h3>
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
