import React,{ Component } from 'react'
import { withStyles,FormControl,InputLabel,Select,FormHelperText,MenuItem,Input } from 'material-ui'
import { Clear, Check } from 'material-ui-icons'
import PropTypes from 'prop-types'
import cx from 'classnames'

import customInputStyle from './customInputStyle'

class CustomSelect extends Component {
  render() {
    const {
      classes,
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      success,
      errorText,
      options
    } = this.props

    const labelClasses = cx({
      [` ${classes.labelRootError}`]: error,
      [` ${classes.labelRootSuccess}`]: success && !error
    })
    const inkbarClasses = cx({
      [classes.inkbarError]: error,
      [classes.inkbarSuccess]: success && !error,
      [classes.inkbar]: !success && !error
    })
    const marginTop = cx({
      [classes.marginTop]: labelText === undefined
    })
    return (
      <FormControl
        {...formControlProps}
        className={`${formControlProps.className} ${classes.formControl}`}
      >
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Select
          input={<Input classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: classes.underline,
            inkbar: inkbarClasses
          }}
          id={id}
          {...inputProps}
          />}>
          {options ? options.map((prop,key) => {
            return (
              <MenuItem key={key} value={prop._id}>{prop.name}</MenuItem>
            )
          }) : null}
        </Select>
        {errorText ? (
          <FormHelperText className={classes.labelRootError}>{errorText}</FormHelperText>
        ):null}
      </FormControl>
    )
  }
}

CustomSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  options:PropTypes.arrayOf(PropTypes.object).isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
}

export default withStyles(customInputStyle)(CustomSelect)
