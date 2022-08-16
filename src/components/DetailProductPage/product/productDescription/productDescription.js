import React, { Fragment } from "react";
import classes from "./productDescription.module.css";
import { connect } from "react-redux";
import attributeParser from "../../../helper/attributeParser";
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);

    // maneging two state indexs, due to manipulate change attribute items, for example
    //if i want to change a color, size shouldnot change automaticcly.
    this.state = {
      indexForFirst: 0,
      indexForSecond: 0,
    };
  }
  componentDidMount() {
    window.scrollTo({ top: 0, left: 0});
  }

  indexChangeForFirst = (index) => {
    this.setState({ indexForFirst: index });
  };
  indexChangeForSecond = (index) => {
    this.setState({ indexForSecond: index });
  };

  handler = (index) => {
    if (index === 0)
      return attributeParser(
        index,
        this.props.data.attributes,
        this.state.indexForFirst,
        this.indexChangeForFirst
      );

    if (index === 1)
      return attributeParser(
        index,
        this.props.data.attributes,
        this.state.indexForSecond,
        this.indexChangeForSecond
      );
  };
  render() {
    return (
      <div className={classes.main}>
        <div>
          <h1>{this.props.data.brand}</h1>
          <p>{this.props.data.name}</p>
        </div>
        {/* if attribute has first element, parsing it as an html */}
        {this.props.data.attributes[0] && this.handler(0)}

        {/* if attribute has second element, parsing it as an html */}
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
        <br />
        <div
          className={classes.descriptionDiv}
          dangerouslySetInnerHTML={{ __html: this.props.data.description }}
        />
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
