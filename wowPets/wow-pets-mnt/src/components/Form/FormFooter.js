import React, { Component } from "react"
import { withStyles,Button } from "material-ui"

import formFooterStyle from "./formFooterStyle"

class FormFooter extends Component {
  render() {
    const { classes, cancel, ok, ...rest} = this.props
    return (
      <div {...rest}>
        <Button variant="raised" color="secondary" className={classes.button} onClick={cancel}>
          取消
        </Button>
        <Button variant="raised" color="primary" className={classes.button} onClick={ok}>
          保存
        </Button>
      </div>
    )
  }
}

export default withStyles(formFooterStyle)(FormFooter)
