import { useState } from "react"
import styled from "styled-components"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

const SwiperContent = (props) => {
	const [position, setPosition] = useState(window.scrollY)
	const imgs = props.imgs
	const throttle = (gapTime) => {
		let last = 0 // 上次执行时间 第一次马上执行
		return () => {
			let nowTime = Date.now() // 当前时间
			// 当前时间-上次执行的时间是否超过间隔时间 就执行回调
			if (nowTime - last > gapTime) {
				setPosition(window.scrollY) // ...arr为fn的参数
				last = nowTime // 重置上次执行时间为当前时间 方便下次执行
			}
		}
	}
	window.addEventListener("scroll", () => {
		setInterval(throttle(3000))
	})

	return (
		<div>
			<ImgCanvas>
				{imgs.map((img, index) => {
					return (
						<ImgWrapper key={index + "1"} index={index} position={-position * 0.3 * index}>
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
`
const ImgWrapper = styled.div`
	position: absolute;
	transition: all 0.3s;
	transform: translateY(${(props) => props.position}px);
	z-index: ${(props) => props.index + 1};
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
const ImgItem = styled.div`
	width: 100%;
	height: 100%;
	background: url(${(props) => props.img}) center no-repeat;
	background-size: cover;
`

export default SwiperContent
