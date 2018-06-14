import React, { Component } from 'react'
import { withStyles,Grid } from 'material-ui'

import { CustomInput as Input,CustomInputSelect as InputSelect,ItemGrid,FormFooter,Modal } from '../../../components'
import pageStyle from '../../pageStyle'

class WeatherContent extends Component {
  constructor(props) {
    super(props)
    this.state = {name:'',code:'',descriptin:'',trigger:''}

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleTriggerChange = this.handleTriggerChange.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({...props.model})
  }
  handleValueChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  handleTriggerChange(v){
    this.setState({trigger:v})
  }
  render() {
    const { classes,handleModalState,showModal,model,ok,options,headerColor,...rest} = this.props
    return (
      <Modal
        {...rest}
        title={model._id ? '编辑天气' : '新增天气'}
        showModal={showModal}
        headerColor={headerColor}
        content={
          <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="名称" inputProps={{onChange:this.handleValueChange,value:this.state.name,name:'name'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="编码" inputProps={{onChange:this.handleValueChange,value:this.state.code,name:'code'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="描述" inputProps={{onChange:this.handleValueChange,multiline:true,value:this.state.description,name:'description'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <InputSelect labelText="触发技能" inputProps={{onChange:this.handleTriggerChange,value:this.state.trigger,name:'trigger'}} selectProps={{options:options,labelKey:'name',valueKey:'_id',simpleValue:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
          </Grid>
        }
        footer={
          <FormFooter className={classes.formFooter} summitAble={this.state.name && this.state.code} cancel={e => handleModalState(false)} ok={e => ok(model._id?'edit':'add',this.state)} />
        }/>
    )
  }
}
WeatherContent.defaultProps = {
  headerColor:'blue'
}

export default withStyles(pageStyle)(WeatherContent)
