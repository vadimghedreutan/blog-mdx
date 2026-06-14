import type { Metadata } from "next"
import { notFound } from "next/navigation"
import MdxRenderer from "@/components/MdxRenderer"
import { getPostBySlug, getPostMetadata } from "@/lib/posts"
import { absoluteUrl, siteConfig } from "@/lib/site"

type PostPageProps = {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	const posts = getPostMetadata()

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { slug } = await params

	try {
		const post = getPostBySlug(slug)
		const canonicalPath = `/posts/${slug}`

		return {
			title: post.title,
			description: post.subtitle,
			alternates: {
				canonical: canonicalPath,
			},
			openGraph: {
				type: "article",
				title: post.title,
				description: post.subtitle,
				url: canonicalPath,
				publishedTime: post.date,
				authors: [siteConfig.author],
			},
			twitter: {
				card: "summary_large_image",
				title: post.title,
				description: post.subtitle,
			},
		}
	} catch {
		return {
			title: "Post not found",
		}
	}
}

export default async function PostPage({ params }: PostPageProps) {
	const { slug } = await params

	let post

	try {
		post = getPostBySlug(slug)
	} catch {
		notFound()
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.subtitle,
		datePublished: post.date,
		author: {
			"@type": "Person",
			name: siteConfig.author,
		},
		publisher: {
			"@type": "Organization",
			name: siteConfig.name,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": absoluteUrl(`/posts/${slug}`),
		},
	}

	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<h1 className="font-kasei text-2xl font-bold md:text-4xl">
				{post.title}
			</h1>
			<article
				className="prose prose-quoteless prose-neutral pb-8 md:prose-lg dark:prose-invert prose-h2:font-kasei dark:prose-a:text-neutral-500"
			>
				<MdxRenderer source={post.content} />
			</article>
		</div>
	)
}
