import getPostMetadata from "@/components/getPostMetadata"
import PostList from "@/components/PostList"

const HomePage = () => {
	const postMetadata = getPostMetadata()
	return (
		<div>
			<h1 className="font-kasei font-bold text-4xl pb-8">Blog</h1>
			{postMetadata &&
				postMetadata
					.sort(
						(a, b) =>
							new Date(b.date).getDate() -
							new Date(a.date).getDate()
					)
					.map((post) => <PostList key={post.slug} {...post} />)}
		</div>
	)
}
export default HomePage
