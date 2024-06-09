import styles from "../styles/player.module.scss";
import { Joblist } from "./datas";

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
					{Object.entries(job).map(([job, name]) => (
						<div key={job} className={styles.departmentbase}>
							<div className={formatClassName(job)}>
								<h3>{job}</h3>
								{name.map((name) => (
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
			))}
		</div>
	);
}

import { getTimeString, PlayerPlaytimeDataProps } from "../utils/player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { stationIcons, antagIcons, otherIcons } from "./datas";

interface JobProps {
	icon: string;
	iconmap: string;
	name: string;
	data: any;
}

function findIcon(iconmap: any, icon: any) {
	switch (iconmap) {
		case "Station":
			return stationIcons[icon];
		case "Antag":
			return antagIcons[icon];
		case "Other":
			return otherIcons[icon];
		default:
			return "x";
	}
}

export function findJobMinutes(jobName: string, data: any) {
	if (!Array.isArray(data)) {
		return "0 Saat 0 Dakika";
	}
	const job = data.find((item: any) => item.job === jobName);
	return job ? getTimeString(job.minutes) : "0 Saat 0 Dakika";
}

export function getTotalPlaytime(timedata: any) {
	const living = timedata.find((item: any) => item.job === "Living");
	const ghost = timedata.find((item: any) => item.job === "Ghost");
	const livingMinutes = living ? living.minutes : 0;
	const ghostMinutes = ghost ? ghost.minutes : 0;
	return getTimeString(livingMinutes + ghostMinutes);
}

export function JobComponent(params: JobProps) {
	return (
		<div className={styles.jobdetail}>
			<FontAwesomeIcon
				className={styles.icon}
				icon={findIcon(params.iconmap, params.icon)}
			/>
			<span>{params.name}</span>
			<p className={styles.time}>{findJobMinutes(params.name, params.data)}</p>
		</div>
	);
}
