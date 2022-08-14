import React from "react";
import classes from "./productPictures.module.css";

class ProductPictures extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className={classes.list}>
        {this.props.pictures.map((imgUrl) => (
          <div className={classes.imageDiv}>
            <img className={classes.img} src={imgUrl} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductPictures;
