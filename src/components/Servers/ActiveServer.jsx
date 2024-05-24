"use client";
{
  /*note: This file using Tooltip so thats why its client side 
  so data fetching can be with useEffect for effective using
  */
}
import getGameState from "../../utils/Servers/getGameState";
import { Tooltip } from "react-tooltip";
import styles from "../../styles/server.module.scss";

const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default function ActiveServer({
  name,
  players,
  gamestate,
  map,
  security_level,
  round_id,
  round_duration,
  connection_info,
}) {
  return (
    <div className={styles.activeserver}>
      <div className={styles.flexcol}>
        <div className={styles.header}>
          <h2>{name}</h2>
          <h2
            data-tooltip-id="Tooltip"
            data-tooltip-content="Round ID"
            data-tooltip-place="bottom"
          >
            #{round_id}
          </h2>
        </div>
        <div className={styles.map}>
          <p>{map}</p>
        </div>
        <div className={styles.details}>
          <p>Aktif Oyuncu: {players}</p>
          <p> | </p>
          <p
            data-tooltip-id="Tooltip"
            data-tooltip-content="Round Durumu"
            data-tooltip-place="bottom"
          >
            {getGameState(gamestate)}
          </p>
          <p> | </p>
          <p
            data-tooltip-id="Tooltip"
            data-tooltip-content="Güvenlik Düzeyi"
            data-tooltip-place="bottom"
          >
            {capitalizeFirstLetter(security_level)}
          </p>
          <p> | </p>
          <p
            data-tooltip-id="Tooltip"
            data-tooltip-content="Round Süresi"
            data-tooltip-place="bottom"
          >
            {new Date(round_duration * 1000).toISOString().substring(11, 19)}
          </p>
        </div>
      </div>
      <div>
        <a className={styles.connect} href={"byond://" + connection_info}>
          BAĞLAN
        </a>
      </div>
      <Tooltip id="Tooltip" />
    </div>
  );
}
