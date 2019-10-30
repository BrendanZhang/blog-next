import { makeStyles } from "@material-ui/core/styles"
import React, { useState, useEffect } from "react"
import { List, ListItem, ListItemIcon, ListItemText, Drawer, ListItemSecondaryAction } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
})
export default function drawerHandler(props) {
	const lists = props.lists
	const classes = useStyles({
		list: {
			width: 250,
		},
		fullList: {
			width: "auto",
		},
	})
	const [state, setState] = useState({
		open: false,
	})
	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return
		}
		setState({ open: open })
	}
	const sideList = () => (
		<div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			{lists.map((list) => {
				return (
					<div>
						<List>
							{list.map((item, index) => {
								return (
									<ListItem button key={item}>
										<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
										<ListItemText primary={item} />
									</ListItem>
								)
							})}
						</List>
						<Divider />
					</div>
				)
			})}
		</div>
	)
	return (
		<Drawer open={state.open} onClose={toggleDrawer(false)}>
			{sideList()}
		</Drawer>
	)
}
