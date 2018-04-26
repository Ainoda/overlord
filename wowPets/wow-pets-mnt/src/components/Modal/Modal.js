import React, { Component } from "react"
import { withStyles,Slide,Modal,Grid } from "material-ui"
import { RegularCard,ItemGrid } from "../../components"

import modalStyle from "./modalStyle"

class CustomModal extends Component {
  render() {
    const { classes,title,subTitle,showModal,content,footer } = this.props

    return (
      <Modal open={showModal} className={classes.modal}>
        <Grid xs={12} sm={12} md={12} container justify="center">
          <ItemGrid xs={6} sm={6} md={6}>
            <Slide direction="up" in={showModal} mountOnEnter unmountOnExit>
              <RegularCard
              cardTitle={title}
              cardSubtitle={subTitle?subTitle:""}
              content={content}
              footer={footer}
              />
            </Slide>
          </ItemGrid>
        </Grid>
      </Modal>
    )
  }
}

export default withStyles(modalStyle)(CustomModal)
