import React from "react";
import ProductList from "./components/ProductList/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import MyBag from "./components/myBag/myBag";
import store from "./store/store";
import { getCategories } from "./Schemas/getCattegories";
import fetch from "./helper/fetch";
import ProductDetailPage from "./components/DetailProductPage/productDetailPage";
import NavBarWrapper from "./components/NavBarWrapper/NavBarWrapper";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idk: store.getState().currenciesSlice.currency,
    };
  }
  componentDidMount(){
    const takeData = async ()=>{
      let item = await fetch(getCategories)
      
      this.setState({
        ...this.state,
        categories : item.categories
      })
    }
    takeData()
  }
  render() {
    console.log(this.state,'state')
    if(!this.state.categories) return <p>loading</p>
    return (
      <Routes>
        <Route path="/productList/category">
          <Route
            index
            element={
              <NavBarWrapper categories = {this.state.categories}>
                <ProductList />
              </NavBarWrapper>
            }
          />
          <Route
            path=":category"
            element={
              <NavBarWrapper categories = {this.state.categories}>
                <ProductList />
              </NavBarWrapper>
            }
          >
            <Route path=":id" element={<p>hey</p>} />
          </Route>

          <Route path="" element={<Navigate to="/all" replace />} />
        </Route>

        <Route path="/product">
          <Route
            path=":id"
            element={
              <NavBarWrapper categories = {this.state.categories}>
                <ProductDetailPage />
              </NavBarWrapper>
            }
          />
        </Route>
        <Route
          path="/mybag"
          element={
            <NavBarWrapper categories = {this.state.categories}>
              <MyBag />
            </NavBarWrapper>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/productList/category/all" replace />}
        />
      </Routes>
    );
  }
}
export default App;
