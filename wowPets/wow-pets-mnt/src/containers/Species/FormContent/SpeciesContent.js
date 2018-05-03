import React, { Component } from "react"
import { withStyles,Grid } from "material-ui"
import axios from "axios"

import { CustomInput as Input,CustomSelect as Select,ItemGrid,FormFooter,Modal } from "../../../components"
import speciesContentStyle from "./speciesContentStyle"

class SpeciesContent extends Component {
  constructor(props) {
    super(props)
    this.state = {name:"",code:"",tap:"",hit:""}

    this.handleValueChange = this.handleValueChange.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({...props.model})
  }
  handleValueChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    const { classes,handleModalState,showModal,model,ok,options,...rest} = this.props
    return (
      <Modal
        {...rest}
        title={model._id ? "编辑类型" : "新增类型"}
        showModal={showModal}
        headerColor="blue"
        content={
          <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="名称" inputProps={{onChange:this.handleValueChange,value:this.state.name,name:"name"}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="编码" inputProps={{onChange:this.handleValueChange,value:this.state.code,name:"code"}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Select labelText="轻击" inputProps={{onChange:this.handleValueChange,value:this.state.tap,name:"tap"}} formControlProps={{fullWidth: true}} options={options}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Select labelText="重击" inputProps={{onChange:this.handleValueChange,value:this.state.hit,name:"hit"}} formControlProps={{fullWidth: true}} options={options}/>
            </ItemGrid>
          </Grid>
        }
        footer={
          <FormFooter className={classes.formFooter} summitable={this.state.name && this.state.code} cancel={e => handleModalState(false)} ok={e => ok(model._id?"edit":"add",this.state)} />
        }/>
    )
  }
}

export default withStyles(speciesContentStyle)(SpeciesContent)
