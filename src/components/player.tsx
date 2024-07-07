import styles from "../styles/player.module.scss";
import { Icons, Joblist } from "./datas";
import {
	findJobMinutes,
	PlayerPlaytimeDataProps,
	JobProps,
	PlayerDataProps,
	getDetailedDate,
} from "../utils/player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlayerPlaytimeComponent({
	playtimedata,
}: {
	playtimedata: PlayerPlaytimeDataProps;
}) {
	const formatClassName = (position: string) => {
		return styles[position.replace(/\s+/g, "-")];
	};
	return (
		<div className={styles.playercontainer}>
			{Object.entries(Joblist).map(([position, job]) => (
				<div key={position} className={styles.departmentbase}>
					<h3 className={styles.jobheader}>{position}</h3>
					<div className={styles.jobbase}>
						{Object.entries(job).map(([job, names]) => (
							<div key={job}>
								<div className={formatClassName(job)}>
									<h3>{job}</h3>
									{names.map((name) => (
										<JobComponent
											key={name}
											name={name}
											icon={name}
											iconmap={position}
											data={playtimedata}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

function JobComponent(params: JobProps) {
	return (
		<div className={styles.jobdetail}>
			<FontAwesomeIcon className={styles.icon} icon={Icons[params.icon]} />
			<span>{params.name}</span>
			<p className={styles.time}>{findJobMinutes(params.name, params.data)}</p>
		</div>
	);
}

export function UserDetailComponent({
	playerdata,
}: {
	playerdata: PlayerDataProps;
}) {
	return (
		<div className={styles.userdetail}>
			<h1>{playerdata.byond_key}</h1>
			<p>Sunucuya katıldığı tarih: {playerdata.first_seen.toString()}</p>
			<p>
				Son görüldüğü tarih: {getDetailedDate(new Date(playerdata.last_seen))}
			</p>
			<p>Son görüldüğü round: {playerdata.last_seen_round}</p>
		</div>
	);
}
