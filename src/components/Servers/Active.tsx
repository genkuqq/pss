"use client";
{
  /*note: This file using Tooltip so thats why its client side 
  so data fetching can be with useEffect for effective using
  */
}
import {
  capitalizeFirstLetter,
  getGameState,
  iServer,
} from "../../utils/ServerUtils";
import { Tooltip } from "react-tooltip";
import styles from "../../styles/server.module.scss";

interface ActiveServer {
  server: iServer;
}

export default function ActiveServer({ server }: ActiveServer) {
  return (
    <div className={styles.activeserver}>
      <div className={styles.flexcol}>
        <div className={styles.header}>
          <h2>{server.name}</h2>
          <h2
            data-tooltip-id="Tooltip"
            data-tooltip-content="Round ID"
            data-tooltip-place="bottom"
          >
            #{server.round_id}
          </h2>
        </div>
        <div className={styles.map}>
          <p>{server.map}</p>
        </div>
        <div className={styles.details}>
          <p>Aktif Oyuncu: {server.players}</p>
          <p> | </p>
          <p
            data-tooltip-id="Tooltip"
            data-tooltip-content="Round Durumu"
            data-tooltip-place="bottom"
          >
            {getGameState(server.gamestate)}
          </p>
          <p> | </p>
          <p
            data-tooltip-id="Tooltip"
            data-tooltip-content="Güvenlik Düzeyi"
            data-tooltip-place="bottom"
          >
            {capitalizeFirstLetter(server.security_level)}
          </p>
          <p> | </p>
          <p
            data-tooltip-id="Tooltip"
            data-tooltip-content="Round Süresi"
            data-tooltip-place="bottom"
          >
            {new Date(server.round_duration * 1000)
              .toISOString()
              .substring(11, 19)}
          </p>
        </div>
      </div>
      <div>
        <a
          className={styles.connect}
          href={"byond://" + server.connection_info}
        >
          BAĞLAN
        </a>
      </div>
      <Tooltip id="Tooltip" />
    </div>
  );
}
