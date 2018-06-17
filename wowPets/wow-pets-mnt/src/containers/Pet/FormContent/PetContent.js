import React, { Component } from 'react'
import { withStyles,Grid } from 'material-ui'

import { CustomInput as Input,ItemGrid,CustomSelect as Select,CustomInputSelect as InputSelect,FormFooter,Modal } from '../../../components'
import pageStyle from '../../pageStyle'

class PetContent extends Component {
  constructor(props) {
    super(props)
    this.state = {name:'',code:'',species:'',dimension:'',firstSk:'',secondSk:'',thirdSk:'',fourthSk:'',fifthSk:'',sixthSk:'',description:''}

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSelectValueChange = this.handleSelectValueChange.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({...props.model})
  }
  handleValueChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  handleSelectValueChange(k,v){
    this.setState({[k]:v})
  }
  render() {
    const { classes,handleModalState,showModal,model,speciesOption,dimensionOption,skillOption,ok,headerColor,...rest} = this.props
    return (
      <Modal
        {...rest}
        title={model._id ? '编辑宠物' : '新增宠物'}
        showModal={showModal}
        headerColor={headerColor}
        content={
          <Grid container>
            <ItemGrid xs={6} sm={6} md={6}>
              <Input labelText="名称" inputProps={{onChange:this.handleValueChange,value:this.state.name,name:'name'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Input labelText="编码" inputProps={{onChange:this.handleValueChange,value:this.state.code,name:'code'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <InputSelect labelText="属性" inputProps={{onChange:v=>this.handleSelectValueChange('dimension',v),value:this.state.dimension,name:'dimension'}} selectProps={{options:dimensionOption,labelKey:'name',valueKey:'_id',simpleValue:true,multi:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="类型" multiStyle={true} inputProps={{onChange:this.handleValueChange,value:this.state.species,name:'species'}} formControlProps={{fullWidth: true}} options={speciesOption}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <InputSelect labelText="一技能" inputProps={{onChange:v=>this.handleSelectValueChange('firstSk',v),value:this.state.firstSk,name:'firstSk'}} selectProps={{options:skillOption,labelKey:'name',valueKey:'_id',simpleValue:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <InputSelect labelText="二技能" inputProps={{onChange:v=>this.handleSelectValueChange('secondSk',v),value:this.state.secondSk,name:'secondSk'}} selectProps={{options:skillOption,labelKey:'name',valueKey:'_id',simpleValue:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <InputSelect labelText="三技能" inputProps={{onChange:v=>this.handleSelectValueChange('thirdSk',v),value:this.state.thirdSk,name:'thirdSk'}} selectProps={{options:skillOption,labelKey:'name',valueKey:'_id',simpleValue:true}}  formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <InputSelect labelText="四技能" inputProps={{onChange:v=>this.handleSelectValueChange('fourthSk',v),value:this.state.fourthSk,name:'fourthSk'}} selectProps={{options:skillOption,labelKey:'name',valueKey:'_id',simpleValue:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <InputSelect labelText="五技能" inputProps={{onChange:v=>this.handleSelectValueChange('fifthSk',v),value:this.state.fifthSk,name:'fifthSk'}} selectProps={{options:skillOption,labelKey:'name',valueKey:'_id',simpleValue:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <InputSelect labelText="六技能" inputProps={{onChange:v=>this.handleSelectValueChange('sixthSk',v),value:this.state.sixthSk,name:'sixthSk'}} selectProps={{options:skillOption,labelKey:'name',valueKey:'_id',simpleValue:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="描述" inputProps={{onChange:this.handleValueChange,value:this.state.description,name:'description',multiline:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
          </Grid>
        }
        footer={
          <FormFooter className={classes.formFooter} summitAble={this.state.name && this.state.code} cancel={e => handleModalState(false)} ok={e => ok(model._id?'edit':'add',this.state)} />
        }/>
    )
  }
}
PetContent.defaultProps = {
  headerColor:'blue'
}

export default withStyles(pageStyle)(PetContent)
