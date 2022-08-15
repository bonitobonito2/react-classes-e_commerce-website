import classes from "../DetailProductPage/product/productDescription/productDescription.module.css";
const attributeParser = (index, attribute) => {
  return (
    <div>
      <p className={classes.title}> {attribute[index].id}:</p>
      <div className={classes.conteiner}>
        {attribute[index].items.map((data) => {
          if (attribute[index].type === "swatch") {
            return (
              <div
                style={{
                  backgroundColor: `${data.value}`,
                  color: `${data.value}`,
                  cursor: "pointer",
                  margin: "2px",
                }}
                className={classes.div}
              ></div>
            );
          } else {
            return <span className={classes.span}>{data.displayValue}</span>;
          }
        })}
      </div>
      <br />
    </div>
  );
};

export default attributeParser;
