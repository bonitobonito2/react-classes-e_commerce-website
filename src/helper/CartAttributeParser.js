import classes from "../components/Cart/CartComponents/products/card/card.module.css";
export const parser = (arr, properties, additionalInfo) => {
  return arr.map((data, mainIndex) => {
    if (data.type === "swatch") {
      return (
        <div className={classes.attributeDiv}>
          {additionalInfo === "bag" ? (
            <span style={{ color: "black" }}>{arr[mainIndex].name}:</span>
          ) : (
            <span>{arr[mainIndex].name}:</span>
          )}

          {data.items.map((color, index) => {
            if (index === properties[mainIndex]) {
              return (
                <div className={classes.borderDiv}>
                  <div
                    style={{
                      backgroundColor: `${color.value}`,
                      color: `${color.value}`,
                      width: "20px",
                      height: "20px",
                      border: "1px solid black",
                    }}
                  />
                </div>
              );
            }
          })}
        </div>
      );
    }
    if (data.type === "text") {
      return (
        <div className={classes.attributeDiv}>
          {additionalInfo === "bag" ? (
            <span style={{ color: "black" }}>{arr[mainIndex].name}:</span>
          ) : (
            <span style={{ fontSize: "15px" }}>{arr[mainIndex].name}:</span>
          )}

          {data.items.map((info, index) => {
            if (index === properties[mainIndex]) {
              return additionalInfo === "bag" ? (
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    margin: "3px",
                  }}
                >
                  {info.value}
                </button>
              ) : (
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                   margin : '3px',
                   height : '20px'
                  }}
                >
                  {info.value}
                </button>
              );
            }
          })}
        </div>
      );
    }
  });
};
