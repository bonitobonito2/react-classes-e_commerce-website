import React, { Fragment } from "react";
import Card from "./card/card";
class CartProducts extends React.Component {
  render() {
    return (
      <Fragment>
      {this.props.indexs.map((item) => {
        return (
          <Card
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
