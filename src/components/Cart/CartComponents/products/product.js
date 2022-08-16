import React, { Fragment } from "react";
import CartProductCard from "./card/card";
class CartProducts extends React.Component {
    
  render() {
    console.log(this.props)
    return (
      <Fragment>
        {this.props.products.map((item) => (
          <CartProductCard indexs = {this.props.indexs} product = {item.product} />
        ))}
      </Fragment>
    );
  }
}

export default CartProducts;
