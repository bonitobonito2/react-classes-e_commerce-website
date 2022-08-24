import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Categories.module.css";

class Categories extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active : 'all'
    }
  }

  clickHandler = (data)=>{
    this.setState({
      ...this.state,
      active : data
    })
  }
  render() {
    
    return (
      <div  className={classes.categories}>
        <div onClick={()=>this.clickHandler('all')} className={this.state.active === 'all'  ? classes.active : ''}>
          <NavLink
            className={classes.unActive}
            to={`/productList/category/all`}
          >
            all
          </NavLink>
        </div>

        <div  onClick={()=>this.clickHandler('clothes')} className={this.state.active === 'clothes' ? classes.active : ''}>
          <NavLink
            className={classes.unActive}
            to={`/productList/category/clothes`}
          >
            clothes
          </NavLink>
        </div>

        <div onClick={()=>this.clickHandler('tech')} className={this.state.active === 'tech' ? classes.active : ''}>
          <NavLink
            className={classes.unActive}
            to={`/productList/category/tech`}
          >
            tech
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Categories;
