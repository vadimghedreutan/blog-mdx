import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Post, PostMetadata } from "@/types/post"

const postsDirectory = path.join(process.cwd(), "posts")

function isPostFile(fileName: string): boolean {
	return fileName.endsWith(".md") || fileName.endsWith(".mdx")
}

function getSlugFromFileName(fileName: string): string {
	return fileName.replace(/\.mdx?$/, "")
}

/** Reads post front matter from every Markdown/MDX file in /posts. */
export function getPostMetadata(): PostMetadata[] {
	const files = fs.readdirSync(postsDirectory).filter(isPostFile)

	return files.map((fileName) => {
		const fileContents = fs.readFileSync(
			path.join(postsDirectory, fileName),
			"utf8"
		)
		const { data } = matter(fileContents)

		return {
			title: data.title,
			date: data.date,
			subtitle: data.subtitle,
			slug: getSlugFromFileName(fileName),
		}
	})
}

/** Loads a single post body and front matter by slug. */
export function getPostBySlug(slug: string): Post {
	const markdownPath = path.join(postsDirectory, `${slug}.md`)
	const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
	const filePath = fs.existsSync(mdxPath) ? mdxPath : markdownPath

	if (!fs.existsSync(filePath)) {
		throw new Error(`Post not found: ${slug}`)
	}

	const fileContents = fs.readFileSync(filePath, "utf8")
	const { data, content } = matter(fileContents)

	return {
		title: data.title,
		date: data.date,
		subtitle: data.subtitle,
		slug,
		content,
	}
}

/** Sort posts newest-first using full timestamps (fixes day-only sorting bug). */
export function sortPostsByDate(posts: PostMetadata[]): PostMetadata[] {
	return [...posts].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)
}
