import React from "react";
import classes from './productMainPicture.module.css'
class ProductMainPicture extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return <div className={classes.mainImg}>
        <img className={classes.img} src={this.props.pictures[this.props.pictureIndex]} />
    </div>
  }
}

export default ProductMainPicture;
