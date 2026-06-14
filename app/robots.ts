import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

/** Automatically served at /robots.txt by the App Router metadata routes API. */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${siteConfig.url}/sitemap.xml`,
	}
}
