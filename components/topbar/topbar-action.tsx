import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Link from "next/link"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { useState } from "react"

const TopbarAction = (props) => {
	const [Links, setLinks] = useState(
		[
			{ href: "/", label: "HOME" },
			{ href: "about", label: "ABOUT ME" },
			{ href: "portfolio", label: "PORTFOLIO" },
			{ href: "blog", label: "BLOG" },
		].map((link: any) => {
			link.key = `Pager-link-${link.href}-${link.label}`
			return link
		}),
	)
	return (
		<CustomToolbar>
			<div className="topbar__leftAction">
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Bren's Blog</Typography>
			</div>
			<div className="topbar__rightAction">
				{Links.map(({ href, label, key }) => (
					<Link key={key} href={href}>
						<Button>{label}</Button>
					</Link>
				))}
			</div>
		</CustomToolbar>
	)
}

const CustomToolbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	button {
		color: inherit;
	}
	h6 {
		color: inherit;
	}
	.topbar__leftAction {
		display: flex;
		align-items: center;
	}
	.topbar__rightAction {
		display: flex;
		align-items: center;
		color: inherit;
	}
`

export default TopbarAction
