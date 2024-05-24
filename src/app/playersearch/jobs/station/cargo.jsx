import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
const Jobs = ["Quartermaster", "Cargo Technician", "Shaft Miner", "Bitrunner"];
export default function CargoJobs({ playtimedata }) {
  return (
    <div className={styles.cargo}>
      <h3>Cargo</h3>
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
