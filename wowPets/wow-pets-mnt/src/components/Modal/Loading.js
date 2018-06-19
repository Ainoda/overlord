import React, { Component } from 'react'
import { withStyles,Modal,CircularProgress } from 'material-ui'
import PropTypes from 'prop-types'

import modalStyle from './modalStyle'

class Loading extends Component {
  render() {
    const { classes,loading,color,hideBackdrop } = this.props

    return (
      <Modal open={loading} className={classes.modal} hideBackdrop={hideBackdrop}>
        <CircularProgress color={color} className={classes.progress}/>
      </Modal>
    )
  }
}
Loading.defaultProps = {
  color:'primary',
  hideBackdrop:'true'
}
Loading.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'inherit'
  ])
}

export default withStyles(modalStyle)(Loading)
