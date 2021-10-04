import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./components/Appbar";
import {Switch, Route, HashRouter} from "react-router-dom";
import Products from "./components/Products";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow:'hidden'
  },
}));

function App() {
  const classes = useStyles();
  return (
      <HashRouter>
        <div className={classes.root}>
          <AppBar />
          <Switch>
            <Route exact path="/" component={Products} />
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
