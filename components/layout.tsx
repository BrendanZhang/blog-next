import Topbar from "./topbar/topbar"
import AppFooter from "./footer/footer"
import { useState } from "react"
import Drawer from "./common/drawerHandler"
import { CssBaseline } from "@material-ui/core"

const Layout = ({ children }) => {
	const [state, setState] = useState({
		drawerOpen: false,
	})
	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return
		}
		setState({ drawerOpen: open })
		console.log(state.drawerOpen)
	}
	return (
		<div className="page-wrapper">
			<CssBaseline />
			<Topbar toggleDrawer={toggleDrawer}>{}</Topbar>
			<Drawer toggleDrawer={toggleDrawer} drawerOpen={state.drawerOpen}></Drawer>
			<div className="content-wrapper">{children}</div>
			<AppFooter />
			<style jsx global>{`
				*,
				*::before,
				*::after {
					box-sizing: border-box;
				}
				body {
					width: 100vw;
					-ms-overflow-style: -ms-autohiding-scrollbar;
				}
				body {
					overflow-y: overlay;
				}
				body::-webkit-scrollbar {
					width: 6px;
				}

				body::-webkit-scrollbar-track-piece {
					background-color: #f8f8f8;
				}

				body::-webkit-scrollbar-track {
					background-color: rgba(0, 0, 0, 0);
				}

				body::-webkit-scrollbar-thumb {
					background-color: #aaa;
					border-radius: 3px;
				}

				body::-webkit-scrollbar-button {
					background-color: #f8f8f8;
					display: none;
				}

				body {
					margin: 0;
					font-size: 20px;
					line-height: 1.7;
					font-weight: 400;
					background: #f8f8f8;
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
					max-width: 100vw;
					text-align: center;
					margin: 0 auto;
					padding: 0;
				}

				.container {
					overflow: hidden;
				}
			`}</style>
		</div>
	)
}

export default Layout
