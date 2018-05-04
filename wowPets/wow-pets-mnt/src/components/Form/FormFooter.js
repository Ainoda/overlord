import React, { Component } from 'react'
import { withStyles,Button } from 'material-ui'

import formFooterStyle from './formFooterStyle'

class FormFooter extends Component {
  render() {
    const { classes, cancel, cancelText, ok, okText, summitAble, ...rest} = this.props
    return (
      <div {...rest}>
        <Button variant="raised" color="secondary" className={classes.button} onClick={cancel}>
          {cancelText}
        </Button>
        <Button variant="raised" color="primary" disabled={!summitAble} className={classes.button} onClick={ok}>
          {okText}
        </Button>
      </div>
    )
  }
}
FormFooter.defaultProps = {
  cancelText:'取消',
  okText:'确定',
  summitAble:true
}

export default withStyles(formFooterStyle)(FormFooter)
