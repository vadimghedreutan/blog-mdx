import Link from "next/link"
import type { PostMetadata } from "@/types/post"

const PostList = ({ title, subtitle, date, slug }: PostMetadata) => {
	return (
		<Link href={`/posts/${slug}`} className="block">
			<div className="mb-4 flex flex-col space-y-1">
				<p>{title}</p>
				<p className="text-sm text-neutral-500">{subtitle}</p>
				<p className="text-sm text-neutral-500">{date}</p>
			</div>
		</Link>
	)
}

export default PostList
