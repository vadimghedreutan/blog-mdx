/** Shared site metadata used by layout, sitemap, and structured data. */
export const siteConfig = {
	name: "Build for Mars",
	title: "Build for Mars Blog",
	description:
		"Tutorials and notes on Next.js, React, Tailwind CSS, and modern web development.",
	/** Set NEXT_PUBLIC_SITE_URL in production for accurate canonical/OG URLs. */
	url:
		process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
		"http://localhost:3000",
	locale: "en_US",
	author: "Build for Mars",
}

export function absoluteUrl(path = ""): string {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`
	return `${siteConfig.url}${normalizedPath}`
}
