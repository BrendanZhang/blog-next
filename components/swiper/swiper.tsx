import React from "react"
import Head from "next/head"
import Pager from "../pager/pager"
import { useRouter } from "next/router"
import styled from "styled-components"
import { Carousel } from "antd"

const Swiper = (props) => {
	function onChange(a: number): void {
		console.log(a)
	}
	return (
		<div>
			<SwiperContainer>
				<Carousel dotPosition="right" autoplay afterChange={onChange}>
					<div>
						<div>
							<h3>1</h3>
						</div>
					</div>
					<div>
						<div>
							<h3>2</h3>
						</div>
					</div>
					<div>
						<div>
							<h3>3</h3>
						</div>
					</div>
					<div>
						<div>
							<h3>4</h3>
						</div>
					</div>
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
					background: #364d79;
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
