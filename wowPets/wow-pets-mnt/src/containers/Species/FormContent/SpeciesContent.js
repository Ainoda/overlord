import React, { Component } from "react"
import { withStyles,Grid } from "material-ui"
import axios from "axios"

import { CustomInput,ItemGrid,FormFooter,Modal } from "../../../components"
import speciesContentStyle from "./speciesContentStyle"

class SpeciesContent extends Component {
  render() {
    const { classes,handleModalState,handleValueChange,showModal,model,ok,...rest} = this.props
    return (
      <Modal
        title={model ? '编辑类型' : '新增类型'}
        showModal={showModal}
        headerColor="blue"
        content={
          <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="名称" inputProps={{onChange: e => handleValueChange("name", e.target.value),value:model.name}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="编码" inputProps={{onChange: e => handleValueChange("code", e.target.value),value:model.code}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="猎物" inputProps={{onChange: e => handleValueChange("prey", e.target.value),value:model.prey}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="天敌" inputProps={{onChange: e => handleValueChange("hunter", e.target.value),value:model.hunter}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
          </Grid>
        }
        footer={
          <FormFooter className={classes.formFooter} cancel={e => handleModalState(false)} ok={ok} />
        }/>
    )
  }
}

export default withStyles(speciesContentStyle)(SpeciesContent)
