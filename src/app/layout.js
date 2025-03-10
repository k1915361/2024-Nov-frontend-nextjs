import localFont from "next/font/local";
import "./globals.css";
import HeaderNavBar from "./_components/headerNavBar";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./_components/footer";

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
		<html className="" lang="en">
			<body className={`flex flex-col min-h-dvh bg-white dark:bg-gray-950 text-black ModelsPage ${geistSans.variable} ${geistMono.variable}`}>
				<div className="flex min-h-dvh flex-col">
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>        
					<AuthProvider>
						<HeaderNavBar/>
						{children}
						<Footer/>
					</AuthProvider>
				</div>
			</body>
		</html>
	);
}
