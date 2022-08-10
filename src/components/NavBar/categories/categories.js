import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Categories.module.css";

class Categories extends React.Component {
  render() {
    const categoryArr = ["all", "clothes", "tech"];
    return (
      <div className={classes.categories}>
        {categoryArr.map((data, index) => (
          <div key={index}>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.unActive
              }
              to={`/productList/category/${data}`}
            >
              {data}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
