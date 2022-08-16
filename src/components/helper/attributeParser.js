import classes from '../DetailProductPage/product/productDescription/productDescription.module.css'
import { Fragment } from 'react';
const attributeParser = (index, attribute, stateIndex, changeFunction) => {
  return (
    <div>
      <p className={classes.title}> {attribute[index].id}:</p>
      <div className={classes.conteiner}>
        {attribute[index].items.map((data, index1) => {
          if (attribute[index].type === "swatch") {
            return (
              <Fragment>
                {index1 === stateIndex ? (
                  <div
                    style={{
                      border: "2px solid rgb(81, 208, 129)",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      onClick={() => changeFunction(index1)}
                      style={{
                        backgroundColor: `${data.value}`,
                        color: `${data.value}`,
                        cursor: "pointer",
                      }}
                    ></div>
                  </div>
                ) : (
                  <div
                    onClick={() => changeFunction(index1)}
                    style={{
                      backgroundColor: `${data.value}`,
                      color: `${data.value}`,
                      cursor: "pointer",
                      margin: "5px",
                    }}
                  ></div>
                )}
              </Fragment>
            );
          } else {
            return (
              <Fragment>
                {index1 === stateIndex ? (
                  <button
                    onClick={() => changeFunction(index1)}
                    className={classes.span}
                    style={{ background: "black", color: "white" }}
                  >
                    {data.value}
                  </button>
                ) : (
                  <button
                    onClick={() => changeFunction(index1)}
                    className={classes.span}
                  >
                    {data.value}
                  </button>
                )}
              </Fragment>
            );
          }
        })}
      </div>
      <br />
    </div>
  );
};

export default attributeParser;
