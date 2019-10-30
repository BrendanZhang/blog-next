import React, { useState } from "react"
import Head from "next/head"
import Pager from "../pager/pager"
import { useRouter } from "next/router"
import styled from "styled-components"
import { Carousel } from "antd"
import dynamic from "next/dynamic"
const SwiperContent = dynamic(import("./swiper-content"), { ssr: false })

const Swiper = (props) => {
	let defaultImgs = [
		{
			title: "",
			subTitle: "",
			imgs: [
				"https://media.fengyanyu.com/1.png",
				"https://media.fengyanyu.com/2.jpg",
				"https://media.fengyanyu.com/3.jpg",
			],
		},
		{
			title: "",
			subTitle: "",
			imgs: [
				"https://media.fengyanyu.com/2.jpg",
				"https://media.fengyanyu.com/3.jpg",
				"https://media.fengyanyu.com/1.png",
			],
		},
	]
	let [imgs, setImgs] = useState(defaultImgs)
	let onChange = (a) => {
		console.log(a)
	}
	return (
		<div>
			<SwiperContainer>
				<Carousel dotPosition="right" autoplay afterChange={onChange}>
					{imgs.map((item, index) => {
						return (
							<div key={index + "1"}>
								<div>
									<SwiperContent imgs={item.imgs}></SwiperContent>
								</div>
							</div>
						)
					})}
				</Carousel>
			</SwiperContainer>
			<style global jsx>{`
				Carousel {
					width: 100%;
					height: 100%;
				}
				.ant-carousel .slick-slide {
					text-align: center;
					height: 100%;
					width: 100%;
					overflow: hidden;
				}
				.ant-carousel .slick-slide h3 {
					color: #fff;
				}
				.ant-carousel .slick-slide div {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
				}
			`}</style>
		</div>
	)
}
export default Swiper

const SwiperContainer = styled.div`
	width: 100%;
	height: 100%;
	main {
		display: flex;
		width: 100%;
		height: 100%;
		background: #33333370;
	}
`
