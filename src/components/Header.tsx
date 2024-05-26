import Image from "next/image";
import logo from "../../public/logo.png";
import style from "../styles/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className={style.header}>
        <div>
          <Image src={logo} alt="" width={96} height={96} />
        </div>
        <div className={style.title}>
          <h1>Psychonaut Station</h1>
        </div>
      </div>
      <div className={style.navbar}>
        <nav>
          <ul>
            <li>
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/playersearch">Oyuncu Arama</Link>
            </li>
            <li>
              <Link href="/roundhistory">Round Geçmişi</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
