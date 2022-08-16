import React from "react";
import Categories from "./categories/categories";
import classes from "./NavBar.module.css";
import SelectCurrency from "./select/Select";
import NavBarCart from "./NavBarCart/navBarCart";
class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBar}>
        <Categories />
        <div className={classes.select}>
          <SelectCurrency />
          <NavBarCart />
        </div>
      </div>
    );
  }
}

export default NavBar;
