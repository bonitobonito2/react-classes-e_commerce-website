import React, { Fragment } from "react";
import classes from "./Cart.module.css";
import { connect } from "react-redux";
import TotalAmount from "./CartComponents/totalAmount/totalAmount";
import fetch from "../../helper/fetch";
import { getSingleProduct } from "../../Schemas/getSingleProduct";
import Modal from "../Modal/Modal";
import ChekoutButton from "./CartComponents/actions/checkoutButton";
import ViewBagButton from "./CartComponents/actions/viewBagButton";
import CartProducts from "./CartComponents/products/product";
import { cartSliceActions } from "../../store/cartSlice";
import TotalPrice from "./CartComponents/totalPrice/totalPrice";
import { compose } from "redux";
class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  takeData = async () => {
    let data = [];
    let totalPrice = 0;
    let symbol = "";
    for (var i = 0; i < this.props.products.length; i++) {
      let item = await fetch(getSingleProduct, {
        id: this.props.products[i].id,
      });
      data.push(item);
      totalPrice +=
        this.props.products[i].currencies[this.props.currencyIndex].amount *
        this.props.products[i].count;
      symbol =
        this.props.products[i].currencies[this.props.currencyIndex].currency
          .symbol;
    }
    totalPrice = totalPrice.toFixed(2);
    this.setState({ data, totalPrice: totalPrice, symbol: symbol });
  };

  componentDidMount() {
    this.takeData();
  }
  componentDidUpdate(prevProps, prevState) {
    prevState.data.length !== this.props.products.length && this.takeData();
    prevProps.currencyIndex !== this.props.currencyIndex && this.takeData();
  }

  render() {
    if (this.state.data === "") return <p>loading</p>;
    return (
      <Modal click={this.props.clickHandler}>
        {this.props.totalAmount !== 0 && (
          <Fragment>
            <div className={classes.cart}>
              <TotalAmount totalAmount={this.props.totalAmount} />

              <CartProducts
                takeData={this.takeData}
                removeFromCart={this.props.removeFromCart}
                addToCart={this.props.addToCart}
                currencyIndex={this.props.currencyIndex}
                indexs={this.props.products}
                products={this.state.data}
                symnol={this.state.symbol}
                totalPrice={this.state.totalPrice}
              />
            </div>

            <TotalPrice
              symbol={this.state.symbol}
              totalPrice={this.state.totalPrice}
            />

            <div className={classes.actions}>
              <ViewBagButton />
              <ChekoutButton />
            </div>
          </Fragment>
        )}

        {this.props.totalAmount === 0 && (
          <div className={classes.cart}>
            <p>No products in the cart</p>
          </div>
        )}
      </Modal>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    products: state.cartSlice.cartProducts,
    totalAmount: state.cartSlice.totalAmount,
    currencyIndex: state.currenciesSlice.index,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(cartSliceActions.addProductToCart({ id: id })),
    removeFromCart: (id) =>
      dispatch(cartSliceActions.removeProductFromCart({ id: id })),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Cart);
