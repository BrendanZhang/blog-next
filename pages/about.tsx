import React, { useState, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Swiper from "../components/swiper/swiper"
import { scaleAndFade } from "../components/common/animation"

const About = () => {
	const [count, setCount] = useState(0)
	const router = useRouter()
	const { slog } = router.query
	const swiperSize = {
		height: 50,
		width: 100,
	}
	return (
		<div>
			<motion.div initial="initial" animate="enter" exit="exit" variants={scaleAndFade}>
				<Swiper size={swiperSize} />
				<div className="main">
					这这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about这里是about里是about
				</div>
			</motion.div>
			<style jsx>{`
				.main {
					height: 100vh;
					width: 1400px;
					background: #666;
					margin: auto;
				}
			`}</style>
		</div>
	)
}

export default About
