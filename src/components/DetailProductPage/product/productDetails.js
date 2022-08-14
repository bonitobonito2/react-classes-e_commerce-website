import React, { Fragment } from "react";
import classes from "./productDetails.module.css";
import ProductPictures from "./productPictures/productPictures";
import ProductMainPicture from "./productMainPicture/productMainPicture";
import ProductDescription from "./productDescription/productDescription";
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <br />
        <div className={classes.main}>
          <ProductPictures
            pictures={this.props.productDetails.data.product.gallery}
          />
          <ProductMainPicture
            pictures={this.props.productDetails.data.product.gallery}
          />
          <ProductDescription />
        </div>
      </Fragment>
    );
  }
}

export default ProductDetails;
