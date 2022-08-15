import React, { Fragment } from "react";
import classes from "./productDetails.module.css";
import ProductPictures from "./productPictures/productPictures";
import ProductMainPicture from "./productMainPicture/productMainPicture";
import ProductDescription from "./productDescription/productDescription";
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.productDetails.data.product)
    this.state = {
      pictureIndex: 0,
    };
  }
  setPictureIndex = (index) => {
    this.setState({ ...this.state, pictureIndex: index });
  };
  render() {
    return (
      <Fragment>
        <div className={classes.main}>
          <ProductPictures
            pictures={this.props.productDetails.data.product.gallery}
            setIndex={this.setPictureIndex}
            index={this.state.pictureIndex}
          />
          <ProductMainPicture
            pictures={this.props.productDetails.data.product.gallery}
            pictureIndex={this.state.pictureIndex}
          />
          <ProductDescription data={this.props.productDetails.data.product} />
        </div>
      </Fragment>
    );
  }
}

export default ProductDetails;
