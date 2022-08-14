import React from "react";
import fetch from "../../helper/fetch";
import { getCurrencies } from "../../Schemas/getCurrencies";
import classes from "./Select.module.css";
import { currencyActions } from "../../../store/currencieSlice";
import { connect } from "react-redux/es/exports";
class SelectCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  selectChangeHandler = (event) => {
    let data = event.target.value.split(" ");
    console.log(data);
    this.props.changeCurrency(data[0]);
    this.setState({ ...this.state, symbol: data[1] });
  };

  componentDidMount() {
    const getData = async () => {
      const data = await fetch(getCurrencies);
      this.setState({ data });
    };
    getData();
  }
  render() {
    if (this.state === null) return 0;
    return (
      <div className={classes.selectDiv}>
        <select  className={classes.select} onChange={this.selectChangeHandler}>
          {this.state.data.currencies.map((data, index) => (
            <option
              className={classes.option}
              key={index}
              value={`${index} ${data.symbol}`}
            >
             {`${data.symbol} ${data.label}`}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (index) => dispatch(currencyActions.changeCurrency(index)),
  };
};
export default connect(null, mapDispatchToProps)(SelectCurrency);
