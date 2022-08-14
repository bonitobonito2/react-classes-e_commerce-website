import React from "react";
import ProductList from "./components/ProductList/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import store from "./store/store";
import ProductDetail from "./components/DetailProductPage/productDetail";
import NavBarWrapper from "./components/NavBarWrapper/NavBarWrapper";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idk: store.getState().currenciesSlice.currency,
    };
  }
  render() {
    return (
      <Routes>
        <Route path="/productList/category">
          <Route
            index
            element={
              <NavBarWrapper>
                <ProductList />
              </NavBarWrapper>
            }
          />
          <Route
            path=":category"
            element={
              <NavBarWrapper>
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
              <NavBarWrapper>
              <ProductDetail />
              </NavBarWrapper>
            }
          />
        </Route>

        <Route
          path="*"
          element={<Navigate to="/productList/category/all" replace />}
        />
      </Routes>
    );
  }
}
export default App;
