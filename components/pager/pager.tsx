import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import PagerItem from "./pager-item"

const Pager = (props) => {
	const router = useRouter()
	const Path = router.pathname
	const [Href, setHref] = useState(Path)
	const [Links, setLinks] = useState(
		[
			{ href: "/", label: "HOME", isFold: false },
			{ href: "about", label: "ABOUT ME", isFold: false },
			{ href: "portfolio", label: "PORTFOLIO", isFold: false },
			{ href: "blog", label: "BLOG", isFold: false },
		].map((link: any) => {
			link.key = `Pager-link-${link.href}-${link.label}`
			link.isFold = Path !== "/" ? true : false
			return link
		}),
	)

	const toggleTabs = (href) => {
		console.log(href)
		const newLinks = Links.map((item) => {
			item.isFold = `${item.href}` === href ? false : true
			return item
		})
		setLinks(newLinks)
		setHref(href)
		console.log(newLinks)
	}
	return (
		<div>
			<ul>
				{Links.map(({ key, href, label, isFold }) => (
					<li key={key} className={isFold ? "fold" : "unfold"}>
						{href === `${Href.replace("/", "")}` ? (
							props.children
						) : (
							<Link href={href}>
								<a
									className={isFold ? "fold" : "unfold"}
									onClick={() => {
										toggleTabs(href)
									}}
								>
									{label}
								</a>
							</Link>
						)}
					</li>
				))}
			</ul>

			<style jsx>{`
				:global(body) {
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
				}
				Pager {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				ul {
					padding: 0;
					margin: 0;
					display: flex;
					justify-content: flex-start;
					align-item: center;
				}
				li {
					height: 100vh;
					background: #000000a2;
					display: flex;
					justify-content: center;
					align-items: center;
					box-shadow: 0 0 20px 30px inset rgba(0, 0, 0, 0.3);
					border-right: 0.3px solid #666;
				}
				li:last-child {
					border: none;
				}
				li > a {
					display: flex;
					justify-content: center;
					align-items: center;
					color: #bbb;
					height: 100%;
					text-decoration: none;
					font-size: 13px;
					transition: all 0.3s;
				}
				li > a.fold {
					width: 50px;
				}
				li > a.unfold {
					width: 25vw;
				}
			`}</style>
		</div>
	)
}

export default Pager
