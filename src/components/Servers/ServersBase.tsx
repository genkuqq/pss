import style from "../../styles/server.module.scss";
import { IServer, getServers } from "@/utils/ServerUtils";
import DeactiveServer from "./Deactive";
import ActiveServer from "./Active";

export default async function Servers() {
  const servers: IServer[] | null = await getServers();
  if (!servers) {
    return (
      <div className={style.container}>
        <DeactiveServer />
      </div>
    );
  }
  return (
    <>
      {servers.map((server: IServer, index: number) => {
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
