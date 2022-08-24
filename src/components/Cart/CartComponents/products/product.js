import React, { Fragment } from "react";
import CartProductCard from "./card/card";
class CartProducts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        {this.props.indexs.map((item) => {
          return (
            <CartProductCard
              key={item.id + Math.random()}
              removeFromCart={this.props.removeFromCart}
              addToCart={this.props.addToCart}
              currencyIndex={this.props.currencyIndex}
              product={item}
              takeData={this.props.takeData}
              fullProduct={this.props.products}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default CartProducts;
