import styles from "../../../styles/player.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	PlayerDataProps,
	PlayerPlaytimeDataProps,
	getPlayerData,
	getPlayerPlaytime,
} from "../../../utils/player";
import PlayerSearch from "../page";
import PlayerPlaytimeComponent, {
	UserDetailComponent,
} from "../../../components/player";

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
			<UserDetailComponent playerdata={playerData} />
			<PlayerPlaytimeComponent playtimedata={playerPlaytimeData} />
		</div>
	);
}

function PlayerNotFound() {
	return (
		<div className={styles.infocontainer}>
			<FontAwesomeIcon className={styles.icon} icon={"triangle-exclamation"} />
			<p>Böyle bir oyuncu bulunamadı.</p>
		</div>
	);
}
