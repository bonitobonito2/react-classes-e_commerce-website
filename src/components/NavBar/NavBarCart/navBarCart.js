import React, { Fragment } from "react";
import classes from "./navBarCart.module.css";
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
        <img
          onClick={this.clickHandler}
          alt="cart"
          className={classes.img}
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        />
        {this.state.showCart && <Cart clickHandler={this.clickHandler} />}
      </Fragment>
    );
  }
}

export default NavBarCart;
