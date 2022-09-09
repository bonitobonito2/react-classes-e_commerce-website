import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../../Schemas/getCattegories";
import classes from "./Categories.module.css";

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.categories[0].name,
    };
  }
  clickHandler = (data) => {
    this.setState({
      ...this.state,
      active: data,
    });
  };
  render() {
    return (
      <div className={classes.categories}>
        {this.props.categories.map((category) => {
          return (
            <div
              onClick={() => this.clickHandler(category.name)}
              className={
                this.state.active === category.name ? classes.active : ""
              }
            >
              <NavLink
                className={classes.unActive}
                to={`/productList/category/${category.name}`}
              >
                {category.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
