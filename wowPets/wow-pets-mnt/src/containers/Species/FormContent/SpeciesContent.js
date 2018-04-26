import React, { Component } from "react"
import { withStyles,Grid } from "material-ui"

import { CustomInput,ItemGrid } from "../../../components"
import speciesContentStyle from "./speciesContentStyle"

class SpeciesContent extends Component {
  render() {
    const { classes, ...rest} = this.props
    return (
      <Grid container {...rest}>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="名称" formControlProps={{fullWidth: true}}/>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="编码" formControlProps={{fullWidth: true}}/>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="猎物" formControlProps={{fullWidth: true}}/>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="天敌" formControlProps={{fullWidth: true}}/>
        </ItemGrid>
      </Grid>
    )
  }
}

export default withStyles(speciesContentStyle)(SpeciesContent)
