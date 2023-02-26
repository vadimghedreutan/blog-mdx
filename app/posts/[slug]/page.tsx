import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "@/components/getPostMetadata"

const getPostContent = (slug: string) => {
	const folder = "posts/"
	const file = `${folder}${slug}.md`
	const content = fs.readFileSync(file, "utf8")
	const matterResult = matter(content)
	return matterResult
}

export const generateStaticParams = async () => {
	const posts = getPostMetadata()
	return posts.map((post) => ({
		slug: post.slug,
	}))
}

const PostPage = (props: any) => {
	const slug = props.params.slug
	const post = getPostContent(slug)
	return (
		<div>
			<h1 className=" font-kasei font-bold md:text-4xl text-2xl">
				{post.data.title}
			</h1>
			<article
				className="prose prose-quoteless prose-neutral md:prose-lg dark:prose-invert prose-h2:font-kasei 
			 dark:prose-a:text-neutral-500 pb-8"
			>
				<Markdown>{post.content}</Markdown>
			</article>
		</div>
	)
}
export default PostPage
