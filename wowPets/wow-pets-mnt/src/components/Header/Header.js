import React from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button
} from "material-ui";
import cx from "classnames";
import headerStyle from "./headerStyle.js";

function Header({ ...props }) {
  function makeBrand(){
    console.log(props);
    let name = "";
    props.routes.map((prop, key) => {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  const { classes, routes } = props;
  return (
    <div>
      { makeBrand() }
    </div>
  );
}

export default withStyles(headerStyle)(Header);
