import React,{ Component } from 'react'
import { withStyles, FormControl, InputLabel, Input, FormHelperText } from 'material-ui'
import { Clear, Check } from 'material-ui-icons'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { CustomReactSelect as Select } from '../../components'
import customInputStyle from './customInputStyle'

class CustomInputSelect extends Component {
  render() {
    const {
      classes,
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      selectProps,
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
        <Input
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: classes.underline,
            inkbar: inkbarClasses
          }}
          placeholder=""
          inputComponent={Select}
          id={id}
          inputProps={selectProps}
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

CustomInputSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
}

export default withStyles(customInputStyle)(CustomInputSelect)
