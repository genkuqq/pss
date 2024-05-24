import AntagJobs from "@/components/PlayerSearch/AntagJobs";
import StationJobs from "@/components/PlayerSearch/StationJobs";
import { getPlayerData } from "../../../utils/PlayerSearch/getPlayerData";
import { getPlayerPlaytime } from "../../../utils/PlayerSearch/getPlayerPlaytime";
import styles from "../../../styles/playersearch.module.scss";
import { Suspense } from "react";
import PlayerSearch from "../page";
//import dummyplaytimedata from "./ansuidata.json";
//import dummydata from "./nuckdata.json";
import Image from "next/image";

export default async function PlayerSearchUsername({ params: { username } }) {
  const playerdata = await getPlayerData({ ckey: username });
  const playerplaytime = await getPlayerPlaytime({ ckey: username });

  return (
    <>
      <PlayerSearch />
      <Suspense fallback={<div>Loading...</div>}>
        {playerdata ? (
          <>
            <div className={styles.playerdetails}>
              <div className={styles.profile}>
                <div
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    padding: "0",
                    margin: "0",
                    alignItems: "center",
                  }}
                >
                  <Image
                    className={styles.image}
                    src={"/pp.png"}
                    alt="profile"
                    height={256}
                    width={256}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <h1>{playerdata.byond_key}</h1>
                  <h3>Son Görülme {playerdata.last_seen}</h3>
                  <h3>Son Görüldüğü Round {playerdata.last_seen_round}</h3>
                </div>
              </div>
            </div>
            <div className={styles.jobheader}>Station Jobs</div>
            <StationJobs playtimedata={playerplaytime} />
            <div className={styles.jobheader}>Antags</div>
            <AntagJobs playtimedata={playerplaytime} />
          </>
        ) : (
          <p>boyle bir oyuncu bulunamadi</p>
        )}
      </Suspense>
    </>
  );
}
