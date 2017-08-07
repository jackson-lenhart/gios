import { h, Component } from 'preact';
import style from './style';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
        <a href="#">Links</a>
        <p>Information</p>
			</footer>
		);
	}
}
