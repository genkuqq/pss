import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/player.module.scss";

export default function Loading() {
	return (
		<div className={styles.infocontainer}>
			<FontAwesomeIcon className={styles.icon} icon={"spinner"} spin />
			<p>Oyuncu ile ilgili bilgiler alınıyor...</p>
		</div>
	);
}
