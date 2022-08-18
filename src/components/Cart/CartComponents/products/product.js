import React, { Fragment } from "react";
import CartProductCard from "./card/card";
class CartProducts extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.products.map((item) => (
          <CartProductCard
          key = {item.product.id}
            removeFromCart={this.props.removeFromCart}
            addToCart={this.props.addToCart}
            currencyIndex={this.props.currencyIndex}
            indexs={this.props.indexs}
            product={item.product}
            takeData = {this.props.takeData}
          />
        ))}
      </Fragment>
    );
  }
}

export default CartProducts;
