import React from "react";
import classes from "./myBag.module.css";
import { connect } from "react-redux";
import fetch from "../../helper/fetch";
import { getSingleProduct } from "../../Schemas/getSingleProduct";
import ChekoutButton from "./MyBagComponents/actions/checkoutButton";
import CartProducts from "./MyBagComponents/products/product";
import { cartSliceActions } from "../../store/cartSlice";
import TotalPrice from "./MyBagComponents/totalPrice/totalPrice";
class MyBag extends React.Component {
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
    console.log(this.state.symbol);
    if (this.state.data === "") return <p>loading</p>;
    return (
      <div className={classes.main}>
      
        <span className={classes.cartName}>Cart</span>
     
        <div className={classes.cart}>
          {this.props.totalAmount !== 0 && (
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
          )}
        </div>
            <br/>
        <TotalPrice
          symbol={this.state.symbol}
          totalPrice={this.state.totalPrice}
          quantity = {this.props.totalAmount}
        />

        <div className={classes.actions}>
          {this.state.data.length !== 0 &&<ChekoutButton />}
          {this.state.data.length === 0 &&<p>No products added yet.</p>}
        </div>
      </div>
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
export default connect(mapStateToprops, mapDispatchToProps)(MyBag);
