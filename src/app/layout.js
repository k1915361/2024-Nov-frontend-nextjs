import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientBootstrap from "./_components/bootstrap_client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KU Next App",
  description: "KU Next App for public/private models, datasets, training, optimising, cloud storage, and more.",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Sidebar/>
        {children}
      </body>
      <ClientBootstrap/>
    </html>
  );
}
