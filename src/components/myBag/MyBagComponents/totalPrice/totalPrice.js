import React from "react";
import classes from "./totalPrice.module.css";
class TotalPrice extends React.Component {
  render() {
    return (
      <div className={classes.totalPriceDiv}>
        <div className={classes.total}>
          <span>Total</span>
        </div>

        <div className={classes.price}>
          <span>
            {this.props.symbol}
            {this.props.totalPrice}
          </span>
        </div>
      </div>
    );
  }
}

export default TotalPrice;
