import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import styled from "styled-components"
import TopbarAction from "./topbar-action"

interface Props {
	children: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children } = props
  
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	})
	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

const isSticky = {
	stable: { backgroundColor: "rgba(248,248,248,0)", color: "#f8f8f8", transition: "all 0.3s" },
	sticky: { backgroundColor: "rgba(248,248,248,1)", color: "#333", transition: "all 0.3s" },
}

export default function ElevateAppBar(props: Props) {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	})
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar className="topbar__container" style={trigger ? isSticky.sticky : isSticky.stable}>
					<Toolbar variant="dense" className="topbar__toolbar">
						<TopbarAction></TopbarAction>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<style jsx>{`
				.topbar {
					background: #f8f8f8;
				}
				.topbar__toolbar {
					background: white;
				}
			`}</style>
		</React.Fragment>
	)
}
