import React, { Fragment } from "react";
import { getProducts } from "../../Schemas/getProducts";
import Products from "./products/Products";
import fetch from "../../helper/fetch";
import { withRouter } from "../../helper/withRouter";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", param: this.props.params.category };
  }

  componentDidMount() {
    const takeData = async () => {
      const data = await fetch(getProducts, {
        input: { title: this.state.param },
      });
      this.setState({
        data: data,
      });
    };

    takeData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.params.category !== this.props.params.category) {
      const takeData = async () => {
        const data = await fetch(getProducts, {
          input: { title: this.props.params.category },
        });
        this.setState({
          data: data,
        });
      };

      takeData();
    }
  }
  render() {
    if (this.state.data === "") return <p>loading</p>;
    return (
      <Fragment>
        <Products navigate = {this.props.navigate} products={this.state.data.category.products} />
      </Fragment>
    );
  }
}

export default withRouter(ProductList);
