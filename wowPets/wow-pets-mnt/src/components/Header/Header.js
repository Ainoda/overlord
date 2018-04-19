import React, { Component } from "react";
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

class Header extends Component {
  makeBrand() {
    let name = "";
    this.props.routes.map((prop, key) => {
      if (prop.path === this.props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  render() {
    const { classes, color, routes } = this.props;
    const appBarClasses = cx({
      [" " + classes[color]]: color
    });
    return (
      <AppBar className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button href="#" className={classes.title}>
              {this.makeBrand()}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyle)(Header);
