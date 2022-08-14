import React from "react";
import fetch from "../../helper/fetch";
import { getCurrencies } from "../../Schemas/getCurrencies";
import store from "../../../store/store";
import classes from './Select.module.css'
import { currencyActions } from "../../../store/currencieSlice";
class SelectCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  selectChangeHandler(event) {
    store.dispatch(currencyActions.changeCurrency(event.target.value));
  }
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
      <div className={classes.select}>
        <select onChange={this.selectChangeHandler}>
          {this.state.data.currencies.map((data, index) => (
            <option key={index} value={`${index}`}>
              {data.symbol}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default SelectCurrency;
