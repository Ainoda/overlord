import React, { Component } from 'react'
import { withStyles, MenuItem } from 'material-ui'

import customReactSelectStyle from './customReactSelectStyle'

class CustomOption extends Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };
  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;
    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}
export default withStyles(customReactSelectStyle)(CustomOption)