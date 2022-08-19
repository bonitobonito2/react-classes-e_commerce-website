import React, { Fragment } from "react";
import classes from "./productDescription.module.css";
import { cartSliceActions } from "../../../../store/cartSlice";
import { connect } from "react-redux";
import AddToCartButton from "./addToCartButton/addToCartButton";
import attributeParser from "../../../../helper/attributeParser";
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);

    // maneging two state indexs, due to manipulate change attribute items, for example
    //if i want to change a color, size shouldnot change automaticcly.
    this.state = {
      indexForFirst: 0,
      indexForSecond: 0,
      indexForThird: 0,
    };
  }
  componentDidMount() {
    window.scrollTo({ top: 0, left: 0 });
  }

  indexChangeForFirst = (index) => {
    this.setState({ indexForFirst: index });
  };
  indexChangeForSecond = (index) => {
    this.setState({ indexForSecond: index });
  };
  indexChangeForThird = (index) => {
    this.setState({ indexForThird: index });
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

    if (index === 2)
      return attributeParser(
        index,
        this.props.data.attributes,
        this.state.indexForThird,
        this.indexChangeForThird
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

        {this.props.data.attributes[2] && this.handler(2)}

        <div>
          <p className={classes.title}>price:</p>
          <span className={classes.price}>
            {this.props.data.prices[this.props.index].currency.symbol}
            {this.props.data.prices[this.props.index].amount}
          </span>
        </div>
        <br />
        <AddToCartButton
          index1={this.state.indexForFirst}
          index2={this.state.indexForSecond}
          index3={this.state.indexForThird}
          addToCart={this.props.setClickedProductID}
          productId={this.props.id}
          currencies = {this.props.data.prices}
        />
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
    id: state.clickedProductIdSlice.clickedProductId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setClickedProductID: (product) =>
      dispatch(cartSliceActions.addProductToCart(product)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(ProductDescription);
