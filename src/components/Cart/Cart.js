import React from "react";
import classes from "./Cart.module.css";
import { connect } from "react-redux";
import TotalAmount from "./CartComponents/totalAmount/totalAmount";
import fetch from "../helper/fetch";
import { getSingleProduct } from "../Schemas/getSingleProduct";
import Modal from "../Modal/Modal";
import ChekoutButton from "./CartComponents/products/card/actions/checkoutButton";
import ViewBagButton from "./CartComponents/products/card/actions/viewBagButton";
import CartProducts from "./CartComponents/products/product";
import { cartSliceActions } from "../../store/cartSlice";
class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  takeData = async () => {
    let data = [];
    for (var i = 0; i < this.props.products.length; i++) {
      let item = await fetch(getSingleProduct, {
        id: this.props.products[i].id,
      });
      data.push(item);
    }
    this.setState({ data });
  };
  
  componentDidMount() {
    this.takeData();
  }
  componentDidUpdate(prevProps, prevState) {
    prevState.data.length !== this.props.products.length && this.takeData();
  }

  render() {
    if (this.state.data === "") return <p>loading</p>;
    return (
      <Modal click={this.props.clickHandler}>
        <div className={classes.cart}>
          <TotalAmount totalAmount={this.props.totalAmount} />
          {this.props.totalAmount !== 0 && (
            <CartProducts
              removeFromCart={this.props.removeFromCart}
              addToCart={this.props.addToCart}
              currencyIndex={this.props.currencyIndex}
              indexs={this.props.products}
              products={this.state.data}
            />
          )}
        </div>
        <div className={classes.actions}>
          <ViewBagButton />
          <ChekoutButton />
        </div>
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
