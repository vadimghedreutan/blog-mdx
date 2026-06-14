import type { MetadataRoute } from "next"
import { getPostMetadata } from "@/lib/posts"
import { siteConfig } from "@/lib/site"

/** Automatically served at /sitemap.xml by the App Router metadata routes API. */
export default function sitemap(): MetadataRoute.Sitemap {
	const posts = getPostMetadata()

	return [
		{
			url: siteConfig.url,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		...posts.map((post) => ({
			url: `${siteConfig.url}/posts/${post.slug}`,
			lastModified: new Date(post.date),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	]
}
