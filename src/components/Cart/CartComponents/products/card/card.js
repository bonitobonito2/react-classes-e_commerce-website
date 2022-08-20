import React from "react";
import AmountActions from "./amountActions/amountActions";
import classes from "./card.module.css";
import { parser } from "../../../../../helper/CartAttributeParser";

//get right count after every update of product count
const getFilteredCount = (arr, id) => arr.filter((info) => info.id === id);

class CartProductCard extends React.Component {
  cardStateInformationFilter = () => {
    let information = [];
    const attributes = this.props.product.attributes;
    const allChoosenProperties = this.props.indexs;
    const id = this.props.product.id;
    for (let i = 0; i < attributes.length; i++) {
      let type = attributes[i].type;
      let items = attributes[i].items;
      let name = attributes[i].name;

      information.push({ type, items, name });
    }
    const filteredCount = getFilteredCount(allChoosenProperties, id);
    let choosenProperties = allChoosenProperties.filter(
      (data) => data.id === id
    );
    return {
      information,
      choosenProperties,
      count: filteredCount.length !== 0 ? filteredCount[0].count : "",
    };
  };

  constructor(props) {
    super(props);
    this.state = this.cardStateInformationFilter();
  }

  componentDidUpdate(prevProps, prevState) {
    const { information, count } = this.cardStateInformationFilter();
    if (count !== "") {
      if (prevState.count !== count) {
        this.setState({
          ...this.state,
          count: count,
          information: information,
        });
      }
    }
  }
  render() {
    if (this.state.choosenProperties.length === 0) return;
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
          takeData={this.props.takeData}
        />

        <div className={classes.img}>
          <img src={this.props.product.gallery[0]} />
        </div>
      </div>
    );
  }
}

export default CartProductCard;
