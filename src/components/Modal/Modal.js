import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

class Backdrop extends React.Component {
  render() {
    return <div onClick={this.props.click} className={classes.backdrop}></div>;
  }
}

class ModalOverLay extends React.Component {
  render() {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

const overLayId = document.getElementById("overLays");

class Modal extends React.Component {
  render() {
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop click={this.props.click} />, overLayId)}
        {ReactDOM.createPortal(
          <ModalOverLay>{this.props.children}</ModalOverLay>,
          overLayId
        )}
      </Fragment>
    );
  }
}

export default Modal;
