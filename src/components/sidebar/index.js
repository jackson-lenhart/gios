import { h, Component } from 'preact';
import style from './style';

export default class Sidebar extends Component {
	render() {
		return (
			<div class={style.sidebar}>
				<a href="#"><h5>Place Order</h5></a>
				<hr/>
        <a href="#"><h5>Contact Us</h5></a>
				<hr/>
				<a href="#"><h5>About</h5></a>
				<hr/>
				<a href="#"><h5>Careers</h5></a>
				<hr/>
				<a href="/products"><h5>Products</h5></a>
			</div>
		);
	}
}
