import React from "react";
import ProductList from "./components/ProductList/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBarWrapper from "./components/NavBarWrapper/NavBarWrapper";
export class App extends React.Component {
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
          />
          <Route path="" element={<Navigate to="/all" replace />} />
        </Route>
      </Routes>
    );
  }
}
export default App;
