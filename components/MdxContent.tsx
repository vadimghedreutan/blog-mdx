import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import Image from "next/image"

/** Custom MDX component mapping for blog content. */
export const mdxComponents: MDXComponents = {
	a: ({ href, children, ...props }) => {
		const isExternal = href?.startsWith("http")

		if (isExternal) {
			return (
				<a href={href} rel="noopener noreferrer" target="_blank" {...props}>
					{children}
				</a>
			)
		}

		return (
			<Link href={href ?? "#"} {...props}>
				{children}
			</Link>
		)
	},
	img: ({ src, alt, width, height }) => {
		if (!src || typeof src !== "string") {
			return null
		}

		// Remote images require explicit dimensions in the Next.js Image component.
		if (src.startsWith("http")) {
			return (
				<Image
					src={src}
					alt={alt ?? ""}
					width={Number(width) || 800}
					height={Number(height) || 450}
					className="rounded-lg"
				/>
			)
		}

		return (
			<Image
				src={src}
				alt={alt ?? ""}
				width={Number(width) || 800}
				height={Number(height) || 450}
				className="rounded-lg"
			/>
		)
	},
}
