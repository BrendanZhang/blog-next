const scaleAndFade = {
	initial: { scale: 0.96, y: 30, opacity: 0 },
	enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] } },
	exit: {
		scale: 0.8,
		y: "100vh",
		opacity: 0,
		transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
	},
}
const scrollDown = {
	initial: {
		y: "30vh",
		opacity: 0,
	},
	enter: {
		y: "0",
		opacity: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
	exit: {
		y: "-30vh",
		opacity: 0,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
}
const scrollUp = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
}

export { scaleAndFade, scrollDown, scrollUp }
