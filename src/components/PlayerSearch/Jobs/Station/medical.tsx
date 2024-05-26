import styles from "../../../../styles/playersearch.module.scss";
import JobComponent from "../../JobComponent";
import { IPlayerPlaytimeData } from "@/utils/PlayerSearchUtils";
const Jobs = [
  "Chief Medical Officer",
  "Medical Doctor",
  "Paramedic",
  "Chemist",
  "Coroner",
];
export default function MedicalJobs({
  playtimedata,
}: {
  playtimedata: IPlayerPlaytimeData;
}) {
  return (
    <div className={styles.medical}>
      <h3>Medical</h3>
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
