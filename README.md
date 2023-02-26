# **Blog - Markdown/MDX with Next.js and Tailwindcss**

This is a simple blog created using Next.js and Tailwindcss, which allows you to write blog posts in Markdown/MDX format. It provides a simple and intuitive way to create and publish content on the web.

## Technologies Used

-   Next.js 13: A React-based framework for building server-side rendered and static web applications.
-   Tailwindcss: A utility-first CSS framework for rapidly building custom user interfaces.
-   MDX: A Markdown-based syntax that allows you to use JSX components in Markdown documents.

## Features

-   Write blog posts in Markdown/MDX format.
-   Responsive design for optimal viewing on all devices.
-   Easy navigation through categories and tags.
-   Search functionality to quickly find specific blog posts.

## Getting Started

To run this project locally, follow these steps:

-   Clone the repository to your local machine:

```bash
git clone https://github.com/<your-username>/nextjs-blog.git
```

-   Change into the project directory:

```bash
cd nextjs-blog
```

-   Install the necessary dependencies:

```bash
npm install
```

-   Start the development server:

```bash
npm run dev
```

The project should now be running on http://localhost:3000.

## Writing Blog Posts

To write a new blog post, simply create a new Markdown/MDX file in the `posts` directory. The file name should follow the format `YYYY-MM-DD-title-of-your-post.md`.

The front matter of your post should contain the following information:

```yaml
---
title: Title of Your Post
date: YYYY-MM-DD
excerpt: A brief summary of your post
categories:
    - Category 1
    - Category 2
tags:
    - Tag 1
    - Tag 2
---
```

After the front matter, you can write your blog post using Markdown/MDX syntax.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
