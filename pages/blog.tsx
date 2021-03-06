import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Button } from "antd"
import { motion } from "framer-motion"
import { scrollDown } from "../components/common/animation"

const Blog = () => {
	const [count, setCount] = useState(0)
	const router = useRouter()
	const { slog } = router.query
	return (
		<div>
			<motion.div initial="initial" animate="enter" exit="exit" variants={scrollDown}>
				<div className="main">这里是Blog{slog}</div>
			</motion.div>
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
