import React, { Fragment } from "react";
import classes from "./productDescription.module.css";
import { connect } from "react-redux";
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  colorChooseHandler = (data) => {
    this.setState(data);
  };

  attributeParser = (index, attribute) => {
    return (
      <div>
        <p className={classes.title}> {attribute[index].id}:</p>
        <div className={classes.conteiner}>
          {attribute[index].items.map((data, index1) => {
            if (attribute[index].type === "swatch") {
              return (
                <div
                  onClick={() => this.colorChooseHandler({ color: data.value })}
                  style={{
                    backgroundColor: `${data.value}`,
                    color: `${data.value}`,
                    cursor: "pointer",
                    margin: "2px",
                  }}
                ></div>
              );
            } else {
              return (
                <Fragment>
                  {index1 === 0 ? (
                    <button
                      onClick={() =>
                        this.colorChooseHandler({ text: data.value })
                      }
                      className={classes.span}
                      style={{ background: "black", color: "white" }}
                    >
                      {data.value}
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        this.colorChooseHandler({ text: data.value })
                      }
                      className={classes.span}
                    >
                      {data.value}
                    </button>
                  )}
                </Fragment>
              );
            }
          })}
        </div>
        <br />
      </div>
    );
  };

  componentDidMount() {
    let fakeState = { names: [] };
    console.log(this.props.data);
    if (this.props.data.attributes) {
      console.log("shemovedi");
      for (let i = 0; i < this.props.data.attributes.length; i++) {
        console.log(this.props.data.attributes[i].name);
        let names = fakeState.names;
        names.push(this.props.data.attributes[i].name);
        fakeState = { names: names };
      }
    }
    console.log(fakeState.names);
    this.setState(fakeState.names);
  }

  handler = (index) => {
    return this.attributeParser(index, this.props.data.attributes);
  };
  render() {
    return (
      <div className={classes.main}>
        <div>
          <h1>{this.props.data.brand}</h1>
          <p>{this.props.data.name}</p>
        </div>

        {this.props.data.attributes[0] && this.handler(0)}

        {this.props.data.attributes[1] && this.handler(1)}

        <div>
          <p className={classes.title}>price:</p>
          <span className={classes.price}>
            {this.props.data.prices[this.props.index].currency.symbol}
            {this.props.data.prices[this.props.index].amount}
          </span>
        </div>
        <br />
        <div>
          <button className={classes.addCart}>add to cart</button>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    index: state.currenciesSlice.index,
  };
};

export default connect(mapStateToprops)(ProductDescription);
