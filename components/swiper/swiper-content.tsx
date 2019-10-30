import { useState } from "react"
import styled from "styled-components"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import { TIMEOUT } from "dns"

const viewHeight = document.body.getBoundingClientRect().height

const SwiperContent = (props) => {
	const [position, setPosition] = useState(window.scrollY / viewHeight)
	const { imgs, height } = props
	const throttle = (gapTime) => {
		let timer = null
		return () => {
			if (timer) {
				clearTimeout(timer)
				timer = null
			}
			timer = setTimeout(() => {
				setPosition(window.scrollY / viewHeight)
				console.log(position)
			}, gapTime)
		}
	}
	window.addEventListener("scroll", throttle(50))

	return (
		<div>
			<ImgCanvas>
				{imgs.map((img, index) => {
					return (
						<ImgWrapper key={index + "1"} index={index} height={height} position={-position * 20}>
							<img src={img}></img>
						</ImgWrapper>
					)
				})}
			</ImgCanvas>
		</div>
	)
}
const ImgCanvas = styled.div`
	position: relative;
	::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2;
	}
`
const ImgWrapper = styled.div`
	position: absolute;
	transition: all 0.3s;
	transform: translateY(${(props) => ((20 * props.height) / 100 + props.position) * props.index}vh);
	z-index: ${(props) => props.index - 1};
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center bottom;
	}
`

export default SwiperContent
