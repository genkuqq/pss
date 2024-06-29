import style from "../styles/server.module.scss";
import { ServerProps, getServers, getGameState } from "../utils/server";
import TooltipComp from "./tooltip";
export default async function Servers() {
	const servers: ServerProps[] | null = await getServers();
	if (!servers) {
		return (
			<div className={style.container}>
				<DeactiveServer />
			</div>
		);
	}
	return (
		<>
			{servers.map((server: ServerProps, index: number) => {
				return (
					<div key={index}>
						<div className={style.container}>
							<ActiveServer key={index} server={server} />
						</div>
					</div>
				);
			})}
		</>
	);
}

function DeactiveServer() {
	return (
		<div className={style.deactiveserver}>
			<h2>Psychonaut Station</h2>
			<p>Sunucu ile ilgili bilgi alınamadı.</p>
		</div>
	);
}

interface ActiveServerProps {
	server: ServerProps;
}

function ActiveServer({ server }: ActiveServerProps) {
	return (
		<div className={style.activeserver}>
			<div className={style.flexcol}>
				<div className={style.header}>
					{server.name}
					<TooltipComp tooltiptext="Tur ID" text={"#" + server.round_id} />
				</div>
				<div className={style.map}>
					<p>{server.map}</p>
				</div>
				<div className={style.details}>
					<p>Oyuncu Sayısı: {server.players}</p>
					<p> | </p>
					<TooltipComp
						tooltiptext="Tur Durumu"
						text={getGameState(server.gamestate)}
					/>
					<p> | </p>
					<TooltipComp
						tooltiptext="Güvenlik Düzeyi"
						text={server.security_level}
					/>
					<p> | </p>
					<TooltipComp
						tooltiptext="Round Süresi"
						text={new Date(server.round_duration * 1000)
							.toISOString()
							.substring(11, 19)}
					/>
				</div>
			</div>
			<div>
				<a className={style.connect} href={"byond://" + server.connection_info}>
					Bağlan
				</a>
			</div>
		</div>
	);
}
