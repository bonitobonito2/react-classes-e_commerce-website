import React from "react";
import Categories from "./categories/categories";
import classes from "./NavBar.module.css";
class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBar}>
        <Categories />
      </div>
    );
  }
}

export default NavBar;
