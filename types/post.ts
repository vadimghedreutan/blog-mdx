export interface PostMetadata {
	title: string
	date: string
	subtitle: string
	slug: string
}

export interface Post extends PostMetadata {
	content: string
}
