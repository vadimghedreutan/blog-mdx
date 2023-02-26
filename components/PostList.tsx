import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostList = (props: PostMetadata) => {
	return (
		<Link href={`/posts/${props.slug}`} key={props.slug}>
			<div className="flex flex-col space-y-1 mb-4">
				<p className="">{props.title}</p>
				<p className="text-sm text-neutral-500">{props.subtitle}</p>
				<p className="text-sm text-neutral-500">{props.date}</p>
			</div>
		</Link>
	)
}
export default PostList
