import React from "react";
import type { Metadata } from "next";
import "./globals.scss";
import style from "../styles/pagebase.module.scss";
// Page Components
import { Footer, Header } from "@/components/pagecomponents";
// Icon Base imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const metadata: Metadata = {
	title: "Psychonaut Station",
	description: "Psychonaut İstasyonu'na hoşgeldin.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className={style.container}>
					<Header />
					<main className={style.content}>{children}</main>
					<Footer />
				</div>
				<div className="background" />
			</body>
		</html>
	);
}
