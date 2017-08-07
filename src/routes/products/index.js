import {h, Component} from 'preact';
import style from './style';

export default class Products extends Component {
  render({ }) {
    const prodObjArr = [
      {
        title: "Dressing",
        description: "[description here]"
      },
      {
        title: "[product here]",
        description: "[description here]"
      },
      {
        title: "[product here]",
        description: "[description here]"
      },
      {
        title: "[product here]",
        description: "[description here]"
      },
      {
        title: "[product here]",
        description: "[description here]"
      },
      {
        title: "[product here]",
        description: "[description here]"
      },
    ]

    const thumbnails = prodObjArr.map((prod, ind) => {
      return (
        <div key={ind} class={style.thumbnail}>
          <h1>{prod.title}</h1>
          <p>{prod.description}</p>
        </div>
      )
    })

    return (
      <div class={style.products}>
        <div class={style.wrapper}>
          {thumbnails}
        </div>
      </div>
    );
  }
}
