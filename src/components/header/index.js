import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Sidebar from '../sidebar';

export default class Header extends Component {
	state = {
		sidebar: false
	};

	handleClick = e => {
		this.setState({ sidebar: !this.state.sidebar });
	}

	render({ }, { sidebar }) {
		console.log(sidebar);
		let _sidebar = '';
		if (sidebar) {
			_sidebar = <Sidebar />
		}

		return (
			<div>
				<header class={style.header}>
					<h1>[logo here]</h1>
					<nav>
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/menu">Menu</Link>
						<a href="#" onClick={this.handleClick}>☰</a>
					</nav>
				</header>
				{_sidebar}
			</div>
		);
	}
}
