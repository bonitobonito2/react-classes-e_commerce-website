import React from "react";
import classes from "./amountActions.module.css";
class AmountActions extends React.Component {
  addClickHandler = () => {
    this.props.addToCart(this.props.id);
    this.props.takeData()
  };
  removeClickHandler = () => {
    this.props.removeFromCart(this.props.id);
    this.props.takeData()
  };

  componentDidUpdate() {}
  render() {
    return (
      <div className={classes.amountActions}>
        <div className={classes.add}>
          <button onClick={this.addClickHandler}>+</button>
        </div>
        <div className={classes.amount}>
          <span>{this.props.count}</span>
        </div>

        <div className={classes.remove}>
          <button onClick={this.removeClickHandler}>-</button>
        </div>
      </div>
    );
  }
}

export default AmountActions;
