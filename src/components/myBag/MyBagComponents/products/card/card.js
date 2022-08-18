import React from "react";
import AmountActions from "./amountActions/amountActions";
import classes from "./card.module.css";
import { parser } from "../../../../helper/CartAttributeParser";

//get right count after every update of product count
const getFilteredCount = (arr, id) => arr.filter((info) => info.id === id);

class CartProductCard extends React.Component {
  constructor(props) {
    super(props);

    let information = [];
    for (let i = 0; i < this.props.product.attributes.length; i++) {
      let type = this.props.product.attributes[i].type;
      let items = this.props.product.attributes[i].items;
      let name = this.props.product.attributes[i].name;

      information.push({ type, items, name });
    }
    const filteredCount = getFilteredCount(
      this.props.indexs,
      this.props.product.id
    );
    let choosenProperties = this.props.indexs.filter(
      (data) => data.id === this.props.product.id
    );
    this.state = {
      information,
      choosenProperties,
      count: filteredCount[0].count,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const filteredCount = getFilteredCount(
      this.props.indexs,
      this.props.product.id
    );

    if (filteredCount.length !== 0) {
      if (prevState.count !== filteredCount[0].count) {
        this.setState({
          ...this.state,
          count: filteredCount[0].count,
        });
      }
    }
  }
  render() {
    return (
      <div className={classes.card}>
        <div className={classes.description}>
          <span className={classes.brandName}>{this.props.product.brand}</span>
          <span>{this.props.product.name}</span>
          <span className={classes.coast}>
            {
              this.props.product.prices[this.props.currencyIndex].currency
                .symbol
            }
            {this.props.product.prices[this.props.currencyIndex].amount}
          </span>

          {this.state.information &&
            parser(this.state.information, this.state.choosenProperties)}
        </div>

        <AmountActions
          id={this.props.product.id}
          addToCart={this.props.addToCart}
          count={this.state.count}
          removeFromCart={this.props.removeFromCart}
          takeData = {this.props.takeData}
        />

        <div className={classes.img}>
          <img src={this.props.product.gallery[0]} />
        </div>
      </div>
    );
  }
}

export default CartProductCard;
