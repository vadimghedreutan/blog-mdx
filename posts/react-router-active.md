---
title: "React Router active page"
subtitle: "In this tutorial, we will show you how to create an active page in React Router."
date: "2023-02-23"
---

React Router is a popular library for managing routing in React applications. In this tutorial, we will show you how to create an active page in React Router.

When a user navigates to a new page in your application, it's helpful to indicate which page they're currently on. This can be accomplished by adding an "active" class to the link of the current page. This can be done using React Router's NavLink component.

Here are the steps to follow:

-   Install React Router

If you haven't already, you'll need to install React Router. You can install it using npm or yarn.

```bash
    npm install react-router-dom
```

or

```bash
    yarn add react-router-dom
```

-   Create a Navigation component

Next, create a Navigation component that will contain the links to your pages. You can use the NavLink component from React Router to create the links.

```javascript
import { NavLink } from "react-router-dom"

function getClassName({ isActive }) {
	if (isActive) {
		return "active" // CSS class
	}
}

function App() {
	return (
		<ul>
			<li>
				<NavLink to="/" className={getClassName}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/about" className={getClassName}>
					About
				</NavLink>
			</li>
		</ul>
	)
}
```

In this example, we've created two NavLink components, one for each page in our application. We've also added the `getClassName function` class to each NavLink, which will add the "active" class to the link when the corresponding page is active.

-   Add the Navigation component to your app

Now that we've created our Navigation component, we need to add it to our app final example.

```javascript
import React from "react"
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import { createRoot } from "react-dom/client"
import Home from "./Home.js"
import Products from "./Products.js"
import Team from "./Team.js"
import NotFound from "./NotFound.js"

function getClassName({ isActive }) {
	return isActive ? "nav-active" : ""
}

function App() {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<NavLink to="/" className={getClassName}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/products" className={getClassName}>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink to="/team" className={getClassName}>
							Team
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/non-existing-page"
							className={getClassName}
						>
							Non existing page
						</NavLink>
					</li>
				</ul>
			</nav>

			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/team" element={<Team />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</main>
		</BrowserRouter>
	)
}

createRoot(document.querySelector("#react-root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
```

In this example, we've added the Navigation component to our app, along with the routes to each page in our application. The Switch component from React Router ensures that only one route is rendered at a time.

Finally, we need to add some CSS to style the active link. We can add the following styles to our CSS file:

```css
.active {
	font-weight: bold;
}
```

This will make the text of the active link bold.

And that's it! You now have an active page in React Router. When a user navigates to a new page in your application, the link to the current page will be styled with the "active" class.
