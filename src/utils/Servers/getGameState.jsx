const GAME_STATE_STARTUP = 0;
const GAME_STATE_PREGAME = 1;
const GAME_STATE_SETTING_UP = 2;
const GAME_STATE_PLAYING = 3;
const GAME_STATE_FINISHED = 4;

export default function getGameState(state) {
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
