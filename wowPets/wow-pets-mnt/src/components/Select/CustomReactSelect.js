import React, { Component } from 'react'
import Select from 'react-select'
import { withStyles, Typography } from 'material-ui'
import { ArrowDropUp, ArrowDropDown, Clear } from 'material-ui-icons'

import { CustomOption as Option } from '../../components'
import customReactSelectStyle from './customReactSelectStyle'

class CustomReactSelect extends Component {

  render() {
    const { classes, ...other } = this.props;

    return (
      <Select
        optionComponent={Option}
        noResultsText={<Typography>{'没有找到选项'}</Typography>}
        arrowRenderer={arrowProps => {
          return arrowProps.isOpen ? <ArrowDropUp /> : <ArrowDropDown />
        }}
        clearRenderer={() => <Clear />}
        valueComponent={valueProps => {
          const { value, children, onRemove } = valueProps
          const onDelete = event => {
            event.preventDefault()
            event.stopPropagation()
            onRemove(value)
          }
          if (onRemove) {
            return (
              <div className={classes.chip}>
                <div className={classes.label}>{children}</div>
                <span className={classes.icon} onClick={onDelete}>x</span>
              </div>
              // <Chip
              //   tabIndex={-1}
              //   label={children}
              //   className={classes.chip}
              //   deleteIcon={<Cancel onTouchEnd={onDelete} />}
              //   onDelete={onDelete}
              // />
            )
          }
          return <div className="Select-value">{children}</div>
        }}
        {...other}
      />
    );
  }
}
export default withStyles(customReactSelectStyle)(CustomReactSelect)
