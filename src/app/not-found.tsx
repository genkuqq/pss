import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/notfound.module.scss";
export default function NotFound() {
	return (
		<div className={styles.pagenotfound}>
			<FontAwesomeIcon className={styles.icon} icon={"triangle-exclamation"} />
			<p>Böyle bir sayfa bulunmamakta – 404!</p>
		</div>
	);
}
