import React from "react";
import classes from "./card.module.css";
import { parser } from "./cardAttributeParser";
class CartProductCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    let information = [];
    for (let i = 0; i < this.props.product.attributes.length; i++) {
      let type = this.props.product.attributes[i].type;
      let items = this.props.product.attributes[i].items;
      let betaInformation = { type, items };
      information.push(betaInformation);
    }

    let choosenProperties = this.props.indexs.filter(
      (data) => data.id === this.props.product.id
    );

    this.state = { information, choosenProperties };
  }
  render() {
    console.log(this.state);
    return (
      <div className={classes.cart}>
        <div className={classes.description}>
          <span>{this.props.product.brand}</span>
          <span>{this.props.product.name}</span>
          <span>price : 50$</span>

          {this.state.information && parser(this.state.information,this.state.choosenProperties)}
           
        </div>
        <div className={classes.img}>
          <img src={this.props.product.gallery[0]} />
        </div>
      </div>
    );
  }
}

export default CartProductCard;
