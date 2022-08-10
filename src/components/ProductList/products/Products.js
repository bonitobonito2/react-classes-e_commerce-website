import React from "react";
import classes from "./Products.module.css";
import Card from "../card/Card";
class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className={classes.products}>
        {this.props.products.map((data, index) => {
          return (
            <Card
              name={data.name}
              id={data.id}
              key={index}
              img={data.gallery[0]}
              price={data.prices[0]}
              stock={data.inStock}
            />
          );
        })}
      </div>
    );
  }
}
export default Products;
