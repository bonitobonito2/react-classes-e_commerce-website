import React, { Fragment } from "react";
import NavBar from "../NavBar/NavBar";

class NavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <NavBar />
        <br/>
        {this.props.children}
      </Fragment>
    );
  }
}

export default NavBarWrapper;
