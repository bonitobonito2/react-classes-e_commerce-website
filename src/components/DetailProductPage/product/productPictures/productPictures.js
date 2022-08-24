import React from "react";
import classes from "./productPictures.module.css";

class ProductPictures extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.list}>
        {this.props.pictures.map((imgUrl, arrIndex) => (
          <div key={arrIndex} className={classes.imageDiv}>
            {this.props.index === arrIndex ? (
              <img
                onClick={() => this.props.setIndex(arrIndex)}
                className={`${classes.img} ${classes.active}`}
                src={imgUrl}
              />
            ) : (
              <img
                onClick={() => this.props.setIndex(arrIndex)}
                className={classes.img}
                src={imgUrl}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductPictures;
