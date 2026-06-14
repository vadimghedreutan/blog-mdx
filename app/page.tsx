import type { Metadata } from "next"
import { getPostMetadata, sortPostsByDate } from "@/lib/posts"
import { siteConfig } from "@/lib/site"
import PostList from "@/components/PostList"

export const metadata: Metadata = {
	title: "Blog",
	description: siteConfig.description,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: `${siteConfig.name} Blog`,
		description: siteConfig.description,
		url: "/",
		type: "website",
	},
}

export default function HomePage() {
	const postMetadata = sortPostsByDate(getPostMetadata())

	return (
		<div>
			<h1 className="pb-8 font-kasei text-4xl font-bold">Blog</h1>
			{postMetadata.map((post) => (
				<PostList key={post.slug} {...post} />
			))}
		</div>
	)
}
