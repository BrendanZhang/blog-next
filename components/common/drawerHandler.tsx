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
export default function DrawerHandler(props) {
	const { toggleDrawer, drawerOpen } = props
	const lists = [["测试", "test"], ["test", "测试2"]]
	const classes = useStyles({
		list: {
			width: 250,
		},
		fullList: {
			width: "auto",
		},
	})
	const sideList = () => (
		<div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			{lists.map((list, index) => {
				return (
					<div key={index}>
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
		<Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
			{sideList()}
		</Drawer>
	)
}
