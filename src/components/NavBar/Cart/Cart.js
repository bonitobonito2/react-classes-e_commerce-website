import React, { Fragment } from "react";
import Modal from "../../Modal/Modal";
import classes from "./Cart.module.css";
class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
    };
  }
  clickHandler = () => {
    console.log("click");
    this.setState({...this.setState, showCart : !this.state.showCart})
  };

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <img
          onClick={this.clickHandler}
          alt="cart"
          className={classes.img}
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        />
        {this.state.showCart && <Modal click = {this.clickHandler} ><p>hola</p></Modal>}
      </Fragment>
    );
  }
}

export default Card;
