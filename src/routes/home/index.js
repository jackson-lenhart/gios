import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	state = {
		value: ''
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
		console.log(this.state.value);
	}

	render() {
		const title = "Giovanni's Pizza";
		return (
			<div class={style.home}>
				<div class={style.subscribe}>
					<h1>SUBSCRIBE</h1>
					<input type="text" onChange={this.handleChange} />
				</div>
				<h1>{title}</h1>
				<img src="https://www.cicis.com/media/1138/pizza_trad_pepperoni.png" alt="PIZZA" class={style.pizza}/>
			</div>
		);
	}
}
