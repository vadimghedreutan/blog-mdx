import "../styles/globals.css"
import { Kaisei_Decol } from "@next/font/google"
import Header from "./Header"
import Providers from "./Providers"

const kasei = Kaisei_Decol({
	variable: "--font-kasei",
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head />
			<body
				className={`${kasei.variable} bg-white dark:bg-[#111010] transition-all duration-500 max-w-4xl mx-auto md:text-lg`}
			>
				<Providers>
					<Header />
					<main className="px-5">{children}</main>
				</Providers>
			</body>
		</html>
	)
}
