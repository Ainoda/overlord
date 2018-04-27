import React, { Component } from "react"
import { withStyles,Grid } from "material-ui"

import { CustomInput,ItemGrid,FormFooter } from "../../../components"
import speciesContentStyle from "./speciesContentStyle"

class SpeciesContent extends Component {
  constructor(props){
    super(props)
    if(props.model){
      this.state = props.model;
    }else {
      this.state = {name:'',code:'',prey:'',hunter:''}
    }
    this.valueChange = this.valueChange.bind(this)
  }
  valueChange(key, value) {
    let tmpState = {}
    tmpState[key] = value
    this.setState(tmpState)
  }

  render() {
    const { classes, cancel, ok, ...rest} = this.props
    return (
      <Grid container {...rest}>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="名称" inputProps={{onChange: e => this.valueChange("name", e.target.value)}} formControlProps={{fullWidth: true}}/>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="编码" inputProps={{onChange: e => this.valueChange("code", e.target.value)}} formControlProps={{fullWidth: true}}/>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="猎物" inputProps={{onChange: e => this.valueChange("prey", e.target.value)}} formControlProps={{fullWidth: true}}/>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput labelText="天敌" inputProps={{onChange: e => this.valueChange("hunter", e.target.value)}} formControlProps={{fullWidth: true}}/>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <FormFooter className={classes.formFooter} cancel={cancel} ok={e => ok(this.state)} />
        </ItemGrid>
      </Grid>
    )
  }
}

export default withStyles(speciesContentStyle)(SpeciesContent)
