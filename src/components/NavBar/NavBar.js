import React from "react";
import Categories from "./categories/categories";
import classes from "./NavBar.module.css";
import SelectCurrency from "./select/Select";
class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBar}>
        <Categories />
        <SelectCurrency />
      </div>
    );
  }
}

export default NavBar;