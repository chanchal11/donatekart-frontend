import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import axios from "axios";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CurrencyMenu(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("INR");

  const onChangeHandler = async (e) => {
    const currencyType = e.target.value;
    setCurrency();
    if (currencyType == "INR") props.onChangeCurrency(currencyType, 1);
    else if (currencyType == "USD") {
      const response = await axios.get(
        "https://v6.exchangerate-api.com/v6/c1a8c1246a2e7df3969373ff/latest/INR"
      );
      props.onChangeCurrency(currencyType, response.data.conversion_rates.USD);
    }
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">
          Currency
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={currency}
          onChange={onChangeHandler}
          input={<BootstrapInput />}
        >
          <option value={"INR"}>INR</option>
          <option value={"USD"}>USD</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
