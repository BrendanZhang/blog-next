import React, { useState } from "react"
import App, { Container } from "next/app"
import AppFooter from "../components/footer/footer"
import { AnimatePresence } from "framer-motion"
import Layout from "../components/layout"
import antd from "antd/dist/antd.css"
class MyApp extends App {
	render() {
		const { Component, pageProps, router } = this.props
		return (
			<Layout>
				<div className="banner"></div>

				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
				<style jsx>{`
					:global(*) {
						box-sizing: border-box;
					}
					:global(body) {
						margin: 0;
					}

					.banner {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: url("https://media.fengyanyu.com/1.png") center no-repeat;
						background-size: cover;
						z-index: -3;
					}
				`}</style>
			</Layout>
		)
	}
}

export default MyApp
