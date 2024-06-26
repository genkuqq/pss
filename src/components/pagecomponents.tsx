import Image from "next/image";
import logo from "../../public/logo.png";
import headerstyle from "@/styles/header.module.scss";
import footerstyle from "@/styles/footer.module.scss";
import Link from "next/link";

export function Header() {
	return (
		<>
			<div className={headerstyle.header}>
				<div className={headerstyle.image}>
					<Image src={logo} alt="" width={128} height={128} />
				</div>
				<div className={headerstyle.title}>
					<h1>Psychonaut Station</h1>
				</div>
			</div>
			<ul className={headerstyle.navbar}>
				<li>
					<Link href="/">Ana Sayfa</Link>
				</li>
				<li>
					<Link href="/player">Oyuncu Arama</Link>
				</li>
				<li>
					<Link href="/round">Round Geçmişi</Link>
				</li>
			</ul>
		</>
	);
}

export function Footer() {
	return (
		<div className={footerstyle.footer}>
			<p className="justify-center text-center text-base text-gray-300 font-sans font-normal">
				<a href="https://discord.gg/ErFmSgzMkt">Discord</a>
				<a> | </a>
				<a href="https://github.com/genkuqq">@genku</a>
			</p>
		</div>
	);
}
