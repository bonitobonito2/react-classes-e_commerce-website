import React from "react";
import classes from "./Cart.module.css";
import { connect } from "react-redux";
import TotalAmount from "./CartComponents/totalAmount/totalAmount";
import fetch from "../helper/fetch";
import { getSingleProduct } from "../Schemas/getSingleProduct";
import Modal from "../Modal/Modal";
import ChekoutButton from "./CartComponents/actions/checkoutButton";
import ViewBagButton from "./CartComponents/actions/viewBagButton";
import CartProducts from "./CartComponents/products/product";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    let data = [];
    const takeData = async () => {
      for (var i = 0; i < this.props.products.length; i++) {
        let item = await fetch(getSingleProduct, {
          id: this.props.products[i].id,
        });

        data.push(item);
      }
      console.log(data, "xddddddddddddddddd");
      this.setState({ data });
    };
    takeData();
  }

  render() {
    console.log(this.state.data);
    if (this.state.data === "") return <p>loading</p>;
    return (

      <Modal click={this.props.clickHandler}>
        <div className={classes.cart}>
          <TotalAmount totalAmount={this.props.totalAmount} />
          <CartProducts
            indexs={this.props.products}
            products={this.state.data}
          />
          
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
  };
};
export default connect(mapStateToprops)(Cart);
