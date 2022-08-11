import React from "react";
import Categories from "./categories/categories";
import classes from "./NavBar.module.css";
import Cart from './Cart/Cart'
import SelectCurrency from "./select/Select";
class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBar}>
        <Categories />
        <div className={classes.select}>
          <SelectCurrency />
          <Cart />
        </div>
      </div>
    );
  }
}

export default NavBar;
