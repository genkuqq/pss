// userdetail.tsx
"use client";
import { IPlayerData } from "@/utils/PlayerSearchUtils";
import { IServer, getServers } from "@/utils/ServerUtils";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

function getDetailedDate(lastSeenDate: Date) {
  const now = new Date();
  if (lastSeenDate.getTime() === now.getTime()) {
    return null;
  }
  const difference = now.getTime() - lastSeenDate.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  return `${days} Gün ${hours} Saat ${minutes} Dakika Önce`;
}

export default function UserDetail({
  playerData,
  totalplaytime,
}: {
  playerData: IPlayerData;
  totalplaytime: string;
}) {
  const [lastSeen, setLastSeen] = useState<Date | null>(null);
  const [lastSeenRound, setLastSeenRound] = useState<number | null>(null);
  useEffect(() => {
    const fetchServerData = async () => {
      const serverData: IServer[] | null = await getServers();
      const lastseenDate = new Date(playerData.last_seen);
      if (serverData) {
        const roundId = serverData[0].round_id;
        const lastseenRoundValue = roundId - playerData.last_seen_round;
        setLastSeen(lastseenDate);
        setLastSeenRound(lastseenRoundValue);
      } else {
        setLastSeen(null);
        setLastSeenRound(null);
      }
    };
    fetchServerData();
  }, [playerData]);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>{playerData.byond_key}</h1>
      <h4
        data-tooltip-id="Tooltip"
        data-tooltip-content={lastSeen ? getDetailedDate(lastSeen) : null}
        data-tooltip-place="bottom"
      >
        Son Görülme: {new Date(playerData.last_seen).toLocaleString()}
      </h4>
      <h4
        data-tooltip-id="Tooltip"
        data-tooltip-content={
          lastSeenRound ? lastSeenRound + " Round Önce" : null
        }
        data-tooltip-place="bottom"
      >
        Son Görüldüğü Round: {playerData.last_seen_round}
      </h4>
      <h4>Toplam Oynama Süresi: {totalplaytime}</h4>
      <Tooltip id="Tooltip" />
    </div>
  );
}
