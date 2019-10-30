import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Button } from "antd"

export default function Blog() {
	const router = useRouter()
	const { slog } = router.query
	return (
		<div>
			<div className="main">这里是blog</div>
			<div>
			</div>
			<style jsx>{`
				.main {
					height: 100vh;
					width: 80vw;
				}
			`}</style>
		</div>
	)
}
