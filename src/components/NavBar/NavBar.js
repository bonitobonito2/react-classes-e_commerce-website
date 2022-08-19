import React from "react";
import Categories from "./categories/categories";
import classes from "./NavBar.module.css";
import SelectCurrency from "./select/Select";
import NavBarCart from "./NavBarCart/navBarCart";
import logo from '../../pictures/VSF.png'

class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBar}>
        <Categories />
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.actions}>
          <SelectCurrency />
          <NavBarCart />
        </div>
      </div>
    );
  }
}

export default NavBar;
