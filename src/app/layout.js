import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from '@/app/context/UserContext';


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
      <UserProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>        
          <Sidebar/>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
