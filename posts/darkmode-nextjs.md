---
title: "Dark Mode Tailwind and Next.js 13"
subtitle: "How to Create a Dark Mode using Tailwind and Next.js 13"
date: "2023-02-26"
---

Dark mode has become increasingly popular in recent years, and many websites now offer a dark mode option for their users. In this tutorial, we will walk through how to implement a dark mode switch using Tailwind and Next.js 13.

### Prerequisites

Before we get started, make sure you have the following installed:

-   Node.js
-   Next.js 13
-   Tailwind CSS
-   npm install next-themes or yarn add next-themes
-   npm install @heroicons/react

### Set up Tailwind CSS

First, let's set up Tailwind CSS in our project. Install Tailwind and its dependencies using the following command:

```bash
    pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Next, create a configuration file for Tailwind using the following command:

```bash
    npx tailwindcss init -p
```

This will create a tailwind.config.js file in your project root.

In your postcss.config.js file, add the following configuration:

```javascript
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {},
	plugins: [],
}
```

### Using next-themes

In the `layout.tsx` file, wrap your component with the `Provider` from next-themes. Set the attribute prop to class to allow the library to apply the theme to the HTML element.

```javascript
<html>
	<head />
	<body>
		<Providers>
			<main>{children}</main>
		</Providers>
	</body>
</html>
```

### Create a Providers Component

```javascript
"use client"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			{children}
		</ThemeProvider>
	)
}

export default Providers
```

### Create a Dark Mode Switch Component

Now let's create a component to toggle between light mode and dark mode.

Create a new component called DarkModeToggle.tsx in the components directory. Here's an example:

```javascript
"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const currentTheme = theme === "system" ? systemTheme : theme

	return (
		<div>
			{currentTheme === "dark" ? (
				<SunIcon
					className="h-6 w-6 cursor-pointer text-yellow-400"
					onClick={() => setTheme("light")}
				/>
			) : (
				<MoonIcon
					className="h-6 w-6 cursor-pointer text-slate-700"
					onClick={() => setTheme("dark")}
				/>
			)}
		</div>
	)
}
export default DarkModeBtn
```

This component is toggled when the user clicks on the button. The state is saved to localStorage so that the user's preference is remembered when they revisit the website.

### Add the Dark Mode

`<DarkModeBtn />`
