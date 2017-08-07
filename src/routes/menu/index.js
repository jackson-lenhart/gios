import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Pizza from './categories/pizza';
import Salads from './categories/salads';

export default class Menu extends Component {
	state = {
		time: Date.now(),
		count: 10,
		pizza: false,
		salads: false
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	handleClick = (e) => {
		switch(e.target.name) {
			case 'pizza':
				this.setState({ pizza: !this.state.pizza });
				break;
			case 'salads':
				this.setState({ salads: !this.state.salads });
				break;
			default:
				this.setState({ pizza: false, salads: false});
		}
	};

	render({ }, { time, count, pizza, salads }) {
		let _pizza = '';
		if (pizza) _pizza = <Pizza />;

		let _salads = '';
		if (salads) _salads = <Salads />;

		return (
			<div class={style.menu}>
				<h1>Menu</h1>
				<div>
					<h2><a href="#" name="pizza" onClick={this.handleClick}>Pizza/Calzones</a></h2>
					{_pizza}<hr/>
					<h2><a href="#" name="salads" onClick={this.handleClick}>Salads</a></h2>
					{_salads}
				</div>

				<hr/>
				<div>Current time: {new Date(time).toLocaleString()}</div>
				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
			</div>
		);
	}
}
