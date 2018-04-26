import React, { Component } from "react"
import { withStyles,Button,Slide,Modal,Grid } from "material-ui"
import { RegularCard } from "../../components"

import modalStyle from "./modalStyle"

class CustomModal extends Component {
  render() {
    const { classes,title,subTitle,showModal,cancel,ok,content,footer } = this.props

    return (
      <Modal open={showModal}>
        <Grid xs={12} sm={12} md={12} container justify="center">
          <Grid xs={6} sm={6} md={6} item>
            <Slide direction="up" in={showModal} mountOnEnter unmountOnExit>
              <RegularCard
              cardTitle={title}
              cardSubtitle={subTitle?subTitle:""}
              content={content}
              footer={footer}
              />
            </Slide>
          </Grid>
        </Grid>
      </Modal>
    )
  }
}

export default withStyles(modalStyle)(CustomModal)
