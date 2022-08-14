import React from "react";
import fetch from "../helper/fetch";
import { getSingleProduct } from "../Schemas/getSingleProduct";
class ProductDetail extends React.Component {
  componentDidMount() {
    const takeData = async () => {
      const data = await fetch(getSingleProduct, {
        id: "huarache-x-stussy-le",
      });
      console.log(data);
    };
    takeData();
  }

  render() {
    return <p>here we go</p>;
  }
}

export default ProductDetail;
