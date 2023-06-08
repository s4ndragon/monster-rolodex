import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  state = {};
  render() {
    // console.log(this.props);
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
