import React, { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import { getCategories } from "../../Schemas/getCattegories";

class NavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    return (
      <Fragment>
        <NavBar categories = {this.props.categories} />
        <br/>
        {this.props.children}
      </Fragment>
    );
  }
}

export default NavBarWrapper;
