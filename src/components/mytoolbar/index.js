import { h, Component } from "preact";
import { Link } from "preact-router";

// import linkState from "linkstate";

import Toolbar from "preact-material-components/Toolbar";
import "preact-material-components/Toolbar/style.css";

import IconToggle from "preact-material-components/IconToggle";
import "preact-material-components/IconToggle/style.css";

import Drawer from "preact-material-components/Drawer";
import "preact-material-components/Drawer/style.css";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";

import style from "./style.less";

export default class MyToolbar extends Component {
	render() {
		return (
			<header class="mdc-toolbar">
				<Drawer.TemporaryDrawer
					open={this.state.drawerOpened}
					onClose={() => {
						this.setState({
							drawerOpened: false
						});
					}}>
					<Drawer.DrawerHeader className="mdc-theme--primary-bg">
						Components
					</Drawer.DrawerHeader>
					<Drawer.DrawerContent>
						<List>
							<List.LinkItem>
								<List.ItemIcon>home</List.ItemIcon>
								Home
							</List.LinkItem>
						</List>
					</Drawer.DrawerContent>
				</Drawer.TemporaryDrawer>
				<div class="mdc-toolbar__row">
					<section class="mdc-toolbar__section mdc-toolbar__section--align-start">
						<a href="#">
							<Toolbar.Icon
								onClick={() => {
									this.setState({
										drawerOpened: !this.drawerOpened
									});
								}}>
								menu
							</Toolbar.Icon>
						</a>
						<span class="mdc-toolbar__title">Title</span>
					</section>
					<nav>
						<Link href="/ethers">Ethers</Link>
						<Link href="/">Home</Link>
						<Link href="/profile">Me</Link>
						<Link href="/profile/john">John</Link>
					</nav>
					<Toolbar.Icon>more_vert</Toolbar.Icon>
				</div>
			</header>
		);
	}
}
