import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../../../components/PlayerSearch/JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = ["Blob Infection", "Sentient Disease (Veri Gelmiyor)", "Morph"];
export default function BiohazardJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.security}>
      <h3>Biohazard</h3>
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
