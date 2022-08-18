import React, { Fragment } from "react";
import classes from "./Products.module.css";
import { clickedProductIdActions } from "../../../store/clickedProductIdSlice";
import Card from "./card/Card";
import { connect } from "react-redux";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  clickHandler = (id) => {
    this.props.setClickedProductID(id);
    console.log(this.props)
  };

  render() {
    return (
      <Fragment>
        <h2>Category name</h2>
        <div className={classes.products}>
          {this.props.products.map((data, index) => {
            return (
              <Card
                saveIdHandler={this.clickHandler}
                navigate={this.props.navigate}
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
  return {
    index: state.currenciesSlice.index,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setClickedProductID: (id) =>
      dispatch(clickedProductIdActions.setClickedProductId(id)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Products);
