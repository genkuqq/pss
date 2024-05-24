import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Psychonaut Station",
  description: "Psychonaut İstasyonu'na hoşgeldin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.ico" />
      <body>
        <Header />
        {children}
        <Footer />
        <div className="background"></div>
      </body>
    </html>
  );
}
