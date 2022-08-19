import React, { Fragment } from "react";
import classes from "./navBarCart.module.css";
import { connect } from "react-redux";
import icon from '../../../pictures/Vector.png'
import Cart from "../../Cart/Cart";
class NavBarCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
    };
  }
  clickHandler = () => {
    this.setState({ ...this.setState, showCart: !this.state.showCart });
  };

  render() {
    return (
      <Fragment>
        <article className={classes.img}  onClick={this.clickHandler}>
          {this.props.totalAmount !== 0 && <span>{this.props.totalAmount}</span>}
        </article>

        {this.state.showCart && <Cart clickHandler={this.clickHandler} />}
      </Fragment>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    totalAmount: state.cartSlice.totalAmount,
  };
};
export default connect(mapStateToprops)(NavBarCart);
