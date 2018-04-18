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
import headerStyle from "./headerStyle";

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
  const { classes, color, routes } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button href="#" className={classes.title}>
            { makeBrand() }
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(headerStyle)(Header);
