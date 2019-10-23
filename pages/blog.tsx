import React, { useState, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

const Blog = () => {
	const [count, setCount] = useState(0)
	const router = useRouter()
	const { slog } = router.query
	return (
		<div>
			<div className="main">这里是blog</div>
			<style jsx>{`
				.main {
					height: 100vh;
					width: 80vw;
				}
			`}</style>
		</div>
	)
}

export default Blog
