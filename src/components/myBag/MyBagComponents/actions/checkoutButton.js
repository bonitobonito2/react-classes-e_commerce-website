import React from "react";
import classes from "./chekoutButton.module.css";
class ChekoutButton extends React.Component {
  render() {
    return <button className={classes.button}>order</button>;
  }
}

export default ChekoutButton;
