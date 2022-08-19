import React from "react";
import fetch from "../../helper/fetch";
import { connect } from "react-redux";
import { getSingleProduct } from "../../Schemas/getSingleProduct";
import { withRouter } from "../../helper/withRouter";
import ProductDetails from "./product/productDetails";
class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { data: "" };
  }
  componentDidMount() {
    if (this.props.id === "") this.props.navigate("/", { replace: true });
    const takeData = async () => {
      const data = await fetch(getSingleProduct, {
        id: this.props.id,
      });
      this.setState({ data: data });
    };
    takeData();
  }

  render() {
    if (this.state.data == "") return <p>error</p>;
    return <ProductDetails productDetails={this.state} />;
  }
}
const mapStateToprops = (state) => {
  return {
    id: state.clickedProductIdSlice.clickedProductId,
  };
};

export default withRouter(connect(mapStateToprops)(ProductDetailPage));
