import React from "react"
import Head from "next/head"
import Pager from "../components/pager/pager"
import { useRouter } from "next/router"
import Router from "next/dist/next-server/server/router"
import { motion } from "framer-motion"
import Swiper from "../components/swiper/swiper"
import { scaleAndFade } from "../components/common/animation"

const Home = () => {
	const router = useRouter()
	const { slog } = router.query
	const size = {
		width: 100,
		height: 100,
	}

	return (
		<div>
			<Head>
				<title>Brendan's Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.div initial="initial" animate="enter" exit="exit" variants={scaleAndFade}>
				<Swiper size={size}></Swiper>
				<div className="home"></div>
			</motion.div>
			<style jsx>{`
				.home {
					height: 100vh;
					width: 1400px;
					background: #666;
					margin: auto;
				}
			`}</style>
		</div>
	)
}
export default Home
