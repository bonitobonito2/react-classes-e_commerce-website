import React from "react";
import Categories from "./categories/categories";
import classes from "./NavBar.module.css";
import SelectCurrency from "./select/Select";
import NavBarCart from "./NavBarCart/navBarCart";
import { getCategories } from "../../Schemas/getCattegories";
import logo from '../../pictures/VSF.png'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }
  // componentDidMount(){
  //   const takeData = async ()=>{
  //     let item = await fetch(getCategories)
  //     console.log(item,'wtf')
  //     this.setState({
  //       ...this.state,
  //       categories : item.categories
  //     })
  //   }
  //   takeData()
  // }
  render() {
    return (
      <div className={classes.navBar}>
        <Categories categories = {this.props.categories} />
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.actions}>
          <SelectCurrency />
          <NavBarCart />
        </div>
      </div>
    );
  }
}

export default NavBar;
