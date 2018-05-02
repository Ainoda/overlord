import React, { Component } from "react"
import { withStyles,Grid } from "material-ui"
import axios from "axios"

import { CustomInput,ItemGrid,FormFooter,Modal } from "../../../components"
import speciesContentStyle from "./speciesContentStyle"

class SpeciesContent extends Component {
  constructor(props) {
    super(props)
    this.state = {name:'',code:'',prey:'',hunter:''}

    this.handleValueChange = this.handleValueChange.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({...props.model})
  }
  handleValueChange(key,value) {
    this.setState({[key]:value})
  }
  render() {
    const { classes,handleModalState,showModal,model,ok,...rest} = this.props
    return (
      <Modal
        {...rest}
        title={model._id ? '编辑类型' : '新增类型'}
        showModal={showModal}
        headerColor="blue"
        content={
          <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="名称" inputProps={{onChange: e => this.handleValueChange("name", e.target.value),value:this.state.name}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="编码" inputProps={{onChange: e => this.handleValueChange("code", e.target.value),value:this.state.code}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="猎物" inputProps={{onChange: e => this.handleValueChange("prey", e.target.value),value:this.state.prey}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <CustomInput labelText="天敌" inputProps={{onChange: e => this.handleValueChange("hunter", e.target.value),value:this.state.hunter}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
          </Grid>
        }
        footer={
          <FormFooter className={classes.formFooter} summitable={this.state.name && this.state.code} cancel={e => handleModalState(false)} ok={e => ok(model._id?'edit':'add',this.state)} />
        }/>
    )
  }
}

export default withStyles(speciesContentStyle)(SpeciesContent)
