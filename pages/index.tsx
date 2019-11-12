import React, { useState, useEffect } from "react"
import Head from "next/head"
import Pager from "../components/pager/pager"
import { useRouter } from "next/router"
import Router from "next/dist/next-server/server/router"
import { motion } from "framer-motion"
import Swiper from "../components/swiper/swiper"
import { scaleAndFade, scrollDown, scrollUp } from "../components/common/animation"
import HomeContainer from "../components/home/home-container"
import dynamic from "next/dynamic"
import scrollEvent from "../components/common/scrollEvent"

const Home = () => {
	useEffect(() => scrollEvent(), [])
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
			<motion.div initial="initial" animate="enter" exit="exit" variants={scrollDown}>
				<Swiper size={size}></Swiper>
				{/* <div className="home">
					<HomeContainer></HomeContainer>
				</div> */}
			</motion.div>
			<style jsx>{`
				.home {
					height: 85vh;
					max-width: 1400px;
					background: #f8f8f8;
					border: 1px solid red;
					margin: 30px auto;
				}
			`}</style>
		</div>
	)
}
export default Home
