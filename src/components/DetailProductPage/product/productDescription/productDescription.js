import React from "react";
import classes from "./productDescription.module.css";
import attributeParser from "../../../helper/attributeParser";
class ProductDescription extends React.Component {
  render() {
    return (
      <div className={classes.main}>
        <div>
          <h1>{this.props.data.brand}</h1>
          <p>{this.props.data.name}</p>
        </div>

        {this.props.data.attributes[0] &&
          attributeParser(0, this.props.data.attributes)}

        {this.props.data.attributes[1] &&
          attributeParser(1, this.props.data.attributes)}

        <div>
          <p className={classes.title}>price:</p>
          <span className={classes.price}>
            {this.props.data.prices[0].amount}
            {this.props.data.prices[0].currency.symbol}
          </span>
        </div>
        <br />
        <div>
          <button className={classes.addCart}>add to cart</button>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
