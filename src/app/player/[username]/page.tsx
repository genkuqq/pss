import styles from "../../../styles/player.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	PlayerDataProps,
	PlayerPlaytimeDataProps,
	getPlayerData,
	getPlayerPlaytime,
} from "../../../utils/player";
import PlayerSearch from "../page";
import PlayerPlaytimeComponent from "../../../components/player";

export default async function PlayerDetails({
	params,
}: {
	params: { username: string };
}) {
	const playerData: PlayerDataProps | null = await getPlayerData(
		params.username
	);
	const playerPlaytimeData: PlayerPlaytimeDataProps | null =
		await getPlayerPlaytime(params.username);
	if (!playerData) {
		return (
			<>
				<PlayerSearch />
				<PlayerNotFound />
			</>
		);
	}
	if (!playerPlaytimeData) {
		return null;
	}
	return (
		<div>
			<PlayerSearch />
			<PlayerPlaytimeComponent playtimedata={playerPlaytimeData} />
		</div>
	);
}

function PlayerNotFound() {
	return (
		<div className={styles.playernotfound}>
			<FontAwesomeIcon className={styles.icon} icon={"triangle-exclamation"} />
			<p>Böyle bir oyuncu bulunamadı.</p>
		</div>
	);
}
