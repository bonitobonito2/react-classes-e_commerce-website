import React from "react";
import classes from "./productDescription.module.css";
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data.attributes)
  }

  //creating this function to not dublicate code
  attributeRenderer = (index) => {
    return (
      <div>
        <p className={classes.title}> {this.props.data.attributes[index].id}:</p>
        <div className={classes.conteiner}>
          {this.props.data.attributes[index].items.map((data) => {
            if (this.props.data.attributes[index].type === "swatch") {
              return (
                <div
                  style={{
                    backgroundColor: `${data.value}`,
                    color: `${data.value}`,
                    cursor: "pointer",
                    margin: "2px",
                  }}
                  className={classes.div}
                >
                 
                </div>
              );
            } else {
              return <span className={classes.span}>{data.displayValue}</span>;
            }
          })}
        </div>
        <br/>
      </div>
    );
  };


  render() {
    return (
      <div className={classes.main}>
        <div>
          <h1>{this.props.data.brand}</h1>
          <p>{this.props.data.name}</p>
        </div>

        {this.props.data.attributes[0] &&this.attributeRenderer(0)}

        {this.props.data.attributes[1] && this.attributeRenderer(1)}

        <div>
          <p className={classes.title}>price:</p>
          <span className={classes.price}>
            {this.props.data.prices[0].amount}
            {this.props.data.prices[0].currency.symbol}
          </span>
        </div>
        <br />
        <div>
          <button className={classes.addCart}>add to card</button>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
