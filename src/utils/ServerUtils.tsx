const GAME_STATE_STARTUP = 0;
const GAME_STATE_PREGAME = 1;
const GAME_STATE_SETTING_UP = 2;
const GAME_STATE_PLAYING = 3;
const GAME_STATE_FINISHED = 4;

export interface IServer {
  connection_info: string;
  gamestate: number;
  map: string;
  name: string;
  players: number;
  round_duration: number;
  round_id: number;
  security_level: string;
  server_status: number;
}

export async function getServers(): Promise<IServer[] | null> {
  const response = await fetch("https://api.turkb.us/v2/server", {
    next: { revalidate: 35 },
  });
  if (!response.ok) {
    return null;
  }
  return await response.json();
}

export function getGameState(state: number) {
  switch (state) {
    case GAME_STATE_STARTUP:
      return "Yükleniyor.";
    case GAME_STATE_PREGAME:
      return "Lobide.";
    case GAME_STATE_SETTING_UP:
      return "Başlıyor.";
    case GAME_STATE_PLAYING:
      return "Devam ediyor.";
    case GAME_STATE_FINISHED:
      return "Round bitti.";
    default:
      return "";
  }
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
