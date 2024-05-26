import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/playersearch.module.scss";

export default function PlayerNotFound() {
  return (
    <div className={styles.playernotfound}>
      <FontAwesomeIcon className={styles.icon} icon={"triangle-exclamation"} />
      <p>Böyle bir oyuncu bulunamadı.</p>
    </div>
  );
}
