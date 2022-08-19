import classes from "../components/Cart/CartComponents/products/card/card.module.css";

export const parser = (arr, properties, additionalInfo) => {
  return (
    <div className={classes.idk}>
      {arr.map((data, mainIndex) => {
        if (data.type === "swatch") {
          return data.items.map((color, index) => {
            if (index === properties[0]["index" + (mainIndex + 1)]) {
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
          });
        }
        if (data.type === "text") {
          return data.items.map((info, index) => {
            if (index === properties[0]["index" + (mainIndex + 1)]) {
              return (
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    margin: "4px",
                  }}
                >
                  {info.value}
                </button>
              );
            }
          });
        }
      })}
    </div>
  );
};
