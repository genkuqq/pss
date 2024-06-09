import React from "react";
import type { Metadata } from "next";
import "./globals.scss";
import { Footer, Header } from "@/components/pagecomponents";
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
				<Header />
				{children}
				<div className="background" />
				<Footer />
			</body>
		</html>
	);
}
