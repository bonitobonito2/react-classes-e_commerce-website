import React from "react";
import classes from "./Card.module.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.card}>
        <article
          className={classes.image}
          style={{ backgroundImage: `url(${this.props.img})` }}
        >
          {!this.props.stock && <span>out of stock</span>}
        </article>
        <p>{this.props.name}</p>
        <p>
          {this.props.price.amount}
          {this.props.price.currency.symbol}
        </p>
      </div>
    );
  }
}

export default Card;
