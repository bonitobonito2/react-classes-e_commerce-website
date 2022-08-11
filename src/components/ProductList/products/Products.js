import React from "react";
import classes from "./Products.module.css";
import Card from "../card/Card";
import { connect } from "react-redux";
import store from "../../../store/store";
import { currencyActions } from "../../../store/currencieSlice";
class Products extends React.Component {
  constructor(props) {
    super(props)
    console.log(props, 'mhmmhmhm')
    this.state = null
  }
  render() {

    return (
      <div className={classes.products}>
        {this.props.products.map((data, index) => {
          return (
            <Card
              name={data.name}
              id={data.id}
              key={index}
              img={data.gallery[0]}
              price={data.prices[this.props.index]}
              stock={data.inStock}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToprops = state => {
  console.log(state, 'xd')
  return {
    index: state.currenciesSlice.index
  }
}
export default connect(mapStateToprops)(Products);