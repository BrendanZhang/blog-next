import { useState } from "react"
import styled from "styled-components"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

const SwiperContent = (props) => {
	const [position, setPosition] = useState(window.scrollY)
	const imgs = props.imgs
	const throttle = (gapTime) => {
		let last = 0
		return () => {
			let nowTime = Date.now()
			if (nowTime - last > gapTime) {
				setPosition(window.scrollY)
				last = nowTime
			}
		}
	}
	window.addEventListener("scroll", () => {
		setInterval(throttle(2000))
	})

	return (
		<div>
			<ImgCanvas>
				{imgs.map((img, index) => {
					return (
						<ImgWrapper key={index + "1"} index={index} position={-position * 0.2 * index}>
							<img src={img}></img>
						</ImgWrapper>
					)
				})}
			</ImgCanvas>
		</div>
	)
}
const ImgCanvas = styled.div`
	width: 100vw;
	height: 100%;
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
	transform: translateY(${(props) => props.position}px);
	z-index: ${(props) => props.index - 1};
	top: 0;
	left: 0;
	right: 0;
	bottom: ${(props) => props.index * -10}px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export default SwiperContent
