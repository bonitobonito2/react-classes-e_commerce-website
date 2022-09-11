import React from "react";
import classes from "./Card.module.css";
import icon from "../../../../pictures/cartIcon.png";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  clickListener = () => {
    this.props.navigate("/product/id", { replace: true });
    this.props.saveIdHandler(this.props.id);
  };
  addToCart = () => {
    this.props.addToCart({
      id: this.props.id,
      name: this.props.name,
      brand: this.props.brand,
      index1: 0,
      index2: 0,
      index3: 0,
      count: 1,
      currencies: this.props.prices,
    });
  };
  render() {
    console.log(this.props.price);
    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className={classes.card}
      >
        <div className={classes.photoContainer}>
          <img
            onClick={this.clickListener}
            className={classes.image}
            src={this.props.img}
            alt=""
          />
          {!this.props.stock && (
            <div   onClick={this.clickListener} className={classes.outOfStock}>
              <p className={classes.outText}>out of stock</p>
            </div>
          )}

          {this.props.stock && this.state.hover && (
            <div onClick={this.addToCart} className={classes.cartButton}>
              <img className={classes.icon} src={icon} alt={""} />
            </div>
          )}
        </div>

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
