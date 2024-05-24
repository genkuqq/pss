import getServers from "../../utils/Servers/getServers";
import ActiveServer from "./ActiveServer";
import DeactiveServer from "./DeactiveServer";
import style from "../../styles/server.module.scss";
export default async function Servers() {
  const servers = await getServers();
  return (
    <>
      {servers.map((server, index) => {
        return (
          <div key={index}>
            {server.server_status ? (
              <div className={style.container}>
                <ActiveServer
                  name={server.name}
                  players={server.players}
                  gamestate={server.gamestate}
                  map={server.map}
                  security_level={server.security_level}
                  round_id={server.round_id}
                  round_duration={server.round_duration}
                  connection_info={server.connection_info}
                />
              </div>
            ) : (
              <div className={style.container}>
                <DeactiveServer />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
