import React, { useState, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

const postVariants = {
	initial: { scale: 0.96, y: 30, opacity: 0 },
	enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
	exit: {
		scale: 0.6,
		y: 100,
		opacity: 0,
		transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
	},
}
const About = () => {
	const [count, setCount] = useState(0)
	const router = useRouter()
	const { slog } = router.query
	return (
		<div>
			<motion.div initial="initial" animate="enter" exit="exit" variants={postVariants}>
				<div className="main">
					这这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about里是about
				</div>
			</motion.div>
			<style jsx>{`
				.main {
					height: 100vh;
					width: 1400px;
					background: #666;
				}
			`}</style>
		</div>
	)
}

export default About
