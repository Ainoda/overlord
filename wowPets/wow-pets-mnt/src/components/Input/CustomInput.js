import React,{ Component } from 'react'
import { withStyles, FormControl, InputLabel, Input, FormHelperText } from 'material-ui'
import { Clear, Check } from 'material-ui-icons'
import PropTypes from 'prop-types'
import cx from 'classnames'

import customInputStyle from './customInputStyle'

class CustomInput extends Component {
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
      multiStyle
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
            className={`${classes.labelRoot + labelClasses} ${multiStyle ? classes.multiLabel : ''}`}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: classes.underline,
            inkbar: inkbarClasses,
            input: multiStyle ? classes.multiInput : ''
          }}
          id={id}
          {...inputProps}
        />
        {error ? (
          <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
        ) : success ? (
          <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
        ) : null}
        {errorText ? (
          <FormHelperText className={classes.labelRootError}>{errorText}</FormHelperText>
        ):null}
      </FormControl>
    )
  }
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
}

export default withStyles(customInputStyle)(CustomInput)
