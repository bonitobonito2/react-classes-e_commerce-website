import React from "react";
import classes from './amountActionsForBag.module.css'
class AmountActionsForBag extends React.Component {
    addClickHandler = () => {
        this.props.addToCart({ id: this.props.id, indexes: this.props.indexes });
        this.props.takeData();
      };
      removeClickHandler = () => {
        this.props.removeFromCart({
          id: this.props.id,
          indexes: this.props.indexes,
        });
        this.props.takeData();
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

export default AmountActionsForBag;