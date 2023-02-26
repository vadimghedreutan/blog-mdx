---
title: "useFetch hook in React"
subtitle: "how to create a custom useFetch hook in React that you can use to fetch data from an API."
date: "2023-02-28"
---

In this article, we'll show you how to create a custom useFetch hook in React that you can use to fetch data from an API using both GET and POST methods.

-   Import the necessary libraries

To get started, we'll need to import the useState and useEffect hooks from the react library.

```javascript
import { useState, useEffect } from "react"
```

-   Create the useFetch hook

Next, we'll create our useFetch hook. This hook will take a URL as an argument, along with a method (either 'GET' or 'POST'), and optional body data for POST requests. It will return an object that contains the fetched data, as well as a loading state and any errors that occur.

```javascript
import { useState } from "react"

export default function useFetch(baseUrl) {
	const [loading, setLoading] = useState(true)

	function get(url) {
		return new Promise((resolve, reject) => {
			fetch(baseUrl + url)
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
						setLoading(false)
						return reject(data)
					}
					setLoading(false)
					resolve(data)
				})
				.catch((error) => {
					setLoading(false)
					reject(error)
				})
		})
	}

	function post(url, body) {
		return new Promise((resolve, reject) => {
			fetch(baseUrl + url, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			})
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
						setLoading(false)
						return reject(data)
					}
					setLoading(false)
					resolve(data)
				})
				.catch((error) => {
					setLoading(false)
					reject(error)
				})
		})
	}

	return { get, post, loading }
}
```

-   Use the useFetch hook

Now that we've created our useFetch hook, we can use it in our components to fetch data from an API using both GET and POST methods.

## Get example

```javascript
import { useEffect, useState } from "react"
import Product from "./Product.js"
import Loader from "./Loader.js"
import useFetch from "./useFetch.js"

export default function StoreFront() {
	const [details, setDetails] = useState([])
	const { get, loading } = useFetch("https://api.example.com/")

	useEffect(() => {
		get("products.json")
			.then((data) => {
				console.log(data)
				setDetails(data)
			})
			.catch((error) => console.error(error))
	}, [])

	if (loading) {
		return <Loader />
	}

	return (
		<div className="store-front">
			{details &&
				details.map((item) => <Product key={item.id} {...item} />)}
		</div>
	)
}
```

## POST example

```javascript
import { useState } from "react"
import ProductsList from "./ProductsList.js"
import AddProductForm from "./AddProductForm.js"
import useFetch from "./useFetch.js"

export default function StoreFront() {
	const [products, setProducts] = useState([])
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [validation, setValidation] = useState("")
	const { post } = useFetch("https://api.example.com/products/")

	function handleFormSubmit(event) {
		event.preventDefault()

		if (!name) {
			setValidation("Please enter a name")
			return
		}
		if (!description) {
			setValidation("Please enter a description")
			return
		}
		post("products", {
			name: name,
			description: description,
		})
			.then((data) => {
				console.log(data)
				if (data) {
					setProducts([
						...products,
						{
							id: products.length + 1,
							name: name,
							description: description,
						},
					])
					setName("")
					setDescription("")
					setValidation("")
				}
			})
			.catch((error) => console.log(error))
	}

	function handleNameChange(event) {
		setName(event.target.value)
	}

	function handleDescriptionChange(event) {
		setDescription(event.target.value)
	}

	function handleDeleteClick(id) {
		setProducts(products.filter((product) => product.id !== id))
	}

	return (
		<>
			<AddProductForm
				name={name}
				description={description}
				validation={validation}
				onNameChange={handleNameChange}
				onDescriptionChange={handleDescriptionChange}
				onFormSubmit={handleFormSubmit}
			/>
			<div>{products.length === 0 && <p>Add your first product</p>}</div>
			<ProductsList
				products={products}
				onDeleteClick={handleDeleteClick}
			/>
		</>
	)
}
```

In this example, we've used the useFetch hook to make a `GET` and `POST` request to https://api.example.com/products. We've then used the loading and error states to display a loading message or an error message, respectively. Finally, we've displayed the fetched data in our component.

And that's it! You now have a custom useFetch hook that you can use in your React applications to fetch data from an API using both GET and POST methods.
