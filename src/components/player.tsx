import styles from "../styles/pagebase.module.scss";
import { Icons, Joblist } from "./datas";
import {
	findJobMinutes,
	PlayerPlaytimeDataProps,
	JobProps,
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
		<div className={styles.tcontainer}>
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

export function JobComponent(params: JobProps) {
	return (
		<div className={styles.jobdetail}>
			<FontAwesomeIcon className={styles.icon} icon={Icons[params.icon]} />
			<span>{params.name}</span>
			<p className={styles.time}>{findJobMinutes(params.name, params.data)}</p>
		</div>
	);
}
