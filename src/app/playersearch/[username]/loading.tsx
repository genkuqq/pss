import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/playersearch.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default function Loading() {
  return (
    <div className={styles.loading}>
      <FontAwesomeIcon className={styles.icon} icon={"spinner"} spin />
      <p>Oyuncu ile ilgili bilgiler alınıyor...</p>
    </div>
  );
}
