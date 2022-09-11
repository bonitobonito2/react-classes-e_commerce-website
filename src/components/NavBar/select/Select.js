import React from "react";
import fetch from "../../../helper/fetch";
import { getCurrencies } from "../../../Schemas/getCurrencies";
import Select from "react-select";
import classes from "./Select.module.css";
import { currencyActions } from "../../../store/currencieSlice";
import { connect } from "react-redux/es/exports";
class SelectCurrency extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "props");
    this.state = null;
  }

  style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  selectChangeHandler = (event) => {
    console.log(event);

    this.props.changeCurrency(event.index.index);
    this.setState({
      ...this.state,
      choosen: { value: event.value, label: event.value },
    });
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
        <Select
          styles={this.style}
          options={this.state.data.currencies.map((data, index) => ({
            value: data.symbol,
            label: ` ${data.symbol} ${data.label}`,
            index: { index },
          }))}
          defaultValue={{
            value: this.state.data.currencies[this.props.currencyIndex].symbol,
            label: this.state.data.currencies[this.props.currencyIndex].symbol,
          }}
          value={this.state.choosen && this.state.choosen}
          onChange={this.selectChangeHandler}
          placeholder="პოზიცია"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (index) => dispatch(currencyActions.changeCurrency(index)),
  };
};

const mapStateToprops = (state) => {
  return {
    currencyIndex: state.currenciesSlice.index,
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(SelectCurrency);
