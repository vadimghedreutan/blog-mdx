import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { mdxComponents } from "@/components/MdxContent"

interface MdxContentProps {
	source: string
}

/** Renders Markdown/MDX via next-mdx-remote (App Router RSC recommended approach). */
export default function MdxContent({ source }: MdxContentProps) {
	return (
		<MDXRemote
			source={source}
			components={mdxComponents}
			options={{
				mdxOptions: {
					remarkPlugins: [remarkGfm],
				},
			}}
		/>
	)
}
