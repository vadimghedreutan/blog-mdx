import type { Metadata } from "next"
import { Kaisei_Decol } from "next/font/google"
import Header from "./Header"
import Providers from "./Providers"
import { siteConfig } from "@/lib/site"
import "../styles/globals.css"

// next/font replaces the deprecated @next/font package from Next.js 13.
const kasei = Kaisei_Decol({
	variable: "--font-kasei",
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	applicationName: siteConfig.name,
	authors: [{ name: siteConfig.author }],
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: siteConfig.url,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${kasei.variable} mx-auto max-w-4xl bg-white transition-all duration-500 dark:bg-[#111010] md:text-lg`}
			>
				<Providers>
					<Header />
					<main className="px-5">{children}</main>
				</Providers>
			</body>
		</html>
	)
}
