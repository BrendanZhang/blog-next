import Topbar from "./topbar/topbar"
import Swiper from "./swiper/swiper"
import AppFooter from "./footer/footer"

const Layout = ({ children }) => (
	<div className="page-wrapper">
		<Topbar>{}</Topbar>
		<Swiper></Swiper>
		<div className="content-wrapper">{children}</div>
		<AppFooter />

		<style jsx global>{`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			body {
				margin: 0;
				font-size: 20px;
				line-height: 1.7;
				font-weight: 400;
				background: #fff;
				color: #454545;
				font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue",
					"Lucida Grande", sans-serif;
				text-rendering: optimizeLegibility;
			}

			a {
				color: #1b789e;
				text-decoration: none;
			}

			a:hover {
				color: #166281;
			}

			img {
				max-width: 100%;
			}

			.content-wrapper {
				max-width: 1400px;
				text-align: center;
				margin: 0 auto;
				padding: 10px;
			}

			.container {
				overflow: hidden;
			}
		`}</style>
	</div>
)

export default Layout
