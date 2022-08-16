import classes from "./card.module.css";
export const parser = (arr, properties) => {
  console.log(arr, properties);
  return arr.map((data, mainIndex) => {
    if (data.type === "swatch") {
      return (
        <div className={classes.idk}>
          {data.items.map((color, index) => {
            if (index === properties[0]["index" + (mainIndex + 1)]) {
              return (
                <div className={classes.borderDiv}>
                  <div
                    style={{
                      backgroundColor: `${color.value}`,
                      color: `${color.value}`,
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </div>
              );
            }
            return (
              <div
                style={{
                  backgroundColor: `${color.value}`,
                  color: `${color.value}`,
                  margin: "5px",
                  width: "20px",
                  height: "20px",
                }}
              ></div>
            );
          })}
        </div>
      );
    }
    if (data.type === "text") {
      return (
        <div className={classes.idk}>
          {data.items.map((info, index) => {
            if (index === properties[0]["index" + (mainIndex + 1)]) {
              return (
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    margin: "4px",
                  }}
                >
                  {" "}
                  {info.value}{" "}
                </button>
              );
            } else {
              return (
                <button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    margin: "4px",
                  }}
                >
                  {" "}
                  {info.value}{" "}
                </button>
              );
            }
          })}
        </div>
      );
    }
  });
};
