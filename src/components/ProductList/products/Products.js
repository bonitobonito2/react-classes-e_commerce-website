import React, { Fragment } from "react";
import classes from "./Products.module.css";
import Card from "../card/Card";
import { connect } from "react-redux";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    return (
      <Fragment>
        <h2>Category name</h2>
        <div className={classes.products}>
          {this.props.products.map((data, index) => {
            return (
              <Card
                navigate = {this.props.navigate}
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
      </Fragment>
    );
  }
}

const mapStateToprops = (state) => {
  console.log(state, "xd");
  return {
    index: state.currenciesSlice.index,
  };
};
export default connect(mapStateToprops)(Products);
