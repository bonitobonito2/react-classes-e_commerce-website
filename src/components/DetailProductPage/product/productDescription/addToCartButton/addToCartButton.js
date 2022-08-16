import React from "react";
import classes from "./addToCartButton.module.css";

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  clickListener = () => {
    this.props.addToCart({
      id: this.props.productId,
      index1: this.props.index1,
      index2: this.props.index2,
      index3 : this.props.index3,
      count: 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickListener} className={classes.addCart}>
          add to cart
        </button>
      </div>
    );
  }
}

export default AddToCartButton;
