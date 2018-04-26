import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import cx from "classnames"
import sidebarStyle from "./sidebarStyle"
import {
  withStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "material-ui"

class Sidebar extends Component {
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1
      ? true
      : false
  }
  render() {
    const {classes, color, image, logoText, routes} = this.props
    var links = (<List className={classes.list}>
      {
        routes.map((prop, key) => {
          if (prop.redirect)
            return null
          const listItemClasses = cx({
            [" " + classes[color]]: this.activeRoute(prop.path)
          })
          const whiteFontClasses = cx({
            [" " + classes.whiteFont]: this.activeRoute(prop.path)
          })
          return (<NavLink to={prop.path} className={classes.item} activeClassName="active" key={key}>
            <ListItem button="button" className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                <prop.icon/>
              </ListItemIcon>
              <ListItemText primary={prop.sidebarName} className={classes.itemText + whiteFontClasses} disableTypography={true}/>
            </ListItem>
          </NavLink>)
        })
      }
    </List>)
    var brand = (<div className={classes.logo}>
      <a className={classes.logoLink}>
        {logoText}
      </a>
    </div>)
    return (<div>
      <Hidden mdUp="mdUp">
        <Drawer variant="temporary" anchor="right" open={this.props.open} classes={{
            paper: classes.drawerPaper
          }} onClose={this.props.handleDrawerToggle} ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}>
          {brand}
          <div className={classes.sidebarWrapper}>
            {links}
          </div>
          {
            image !== undefined
              ? (<div className={classes.background} style={{
                  backgroundImage: "url(" + image + ")"
                }}/>)
              : null
          }
        </Drawer>
      </Hidden>
      <Hidden smDown="smDown">
        <Drawer anchor="left" variant="permanent" open="open" classes={{
            paper: classes.drawerPaper
          }}>
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {
            image !== undefined
              ? (<div className={classes.background} style={{
                  backgroundImage: "url(" + image + ")"
                }}/>)
              : null
          }
        </Drawer>
      </Hidden>
    </div>)
  }

}

export default withStyles(sidebarStyle)(Sidebar)
