import {h, Component} from 'preact';
import style from './style';


export default class Salads extends Component {
  render() {
    return (
      <div>
        <p>Regular: $0 | Side: $0</p>
        <ul>
          <li>Garden
            <p>[description here]</p>
          </li>
          <li>Greek
            <p>[description here]</p>
          </li>
        </ul>
        <p>Extras:</p>
        <ul>
          <li>Grilled chicken: $0</li>
        </ul>
      </div>
    );
  }
}
