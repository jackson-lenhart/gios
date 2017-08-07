import { h, Component } from 'preact';
import style from './style';

export default class Pizza extends Component {
  render({ }, { description }) {
    return (
      <div>
        <p>Large: $0 | Small: $0</p>
        <h3>Ingredients ($0 each)</h3>
        <ul>
          <li>Buffalo Chicken</li>
          <li>Pepperoni</li>
          <li>Green peppers</li>
        </ul>
      </div>
    );
  }
}
