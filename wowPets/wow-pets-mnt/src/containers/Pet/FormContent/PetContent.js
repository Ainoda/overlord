import React, { Component } from 'react'
import { withStyles,Grid } from 'material-ui'

import { CustomInput as Input,ItemGrid,CustomSelect as Select,CustomInputSelect as InputSelect,FormFooter,Modal } from '../../../components'
import pageStyle from '../../pageStyle'

class PetContent extends Component {
  constructor(props) {
    super(props)
    this.state = {name:'',code:'',species:'',dimension:'',firstSk:'',secondSk:'',thirdSk:'',fourthSk:'',fifthSk:'',sixthSk:''}

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleDimensionChange = this.handleDimensionChange.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({...props.model})
  }
  handleValueChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  handleDimensionChange(v){
    this.setState({dimension:v})
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
              <InputSelect labelText="属性" inputProps={{onChange:this.handleDimensionChange,value:this.state.dimension,name:'dimension'}} selectProps={{options:dimensionOption,labelKey:'name',valueKey:'_id',simpleValue:true,multi:true}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="类型" multiStyle={true} inputProps={{onChange:this.handleValueChange,value:this.state.species,name:'species'}} formControlProps={{fullWidth: true}} options={speciesOption}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="一技能" inputProps={{onChange:this.handleValueChange,value:this.state.firstSk,name:'firstSk'}} formControlProps={{fullWidth: true}} options={skillOption}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="二技能" inputProps={{onChange:this.handleValueChange,value:this.state.secondSk,name:'secondSk'}} formControlProps={{fullWidth: true}} options={skillOption}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="三技能" inputProps={{onChange:this.handleValueChange,value:this.state.thirdSk,name:'thirdSk'}} formControlProps={{fullWidth: true}} options={skillOption}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="四技能" inputProps={{onChange:this.handleValueChange,value:this.state.fourthSk,name:'fourthSk'}} formControlProps={{fullWidth: true}} options={skillOption}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="五技能" inputProps={{onChange:this.handleValueChange,value:this.state.fifthSk,name:'fifthSk'}} formControlProps={{fullWidth: true}} options={skillOption}/>
            </ItemGrid>
            <ItemGrid xs={6} sm={6} md={6}>
              <Select labelText="六技能" inputProps={{onChange:this.handleValueChange,value:this.state.sixthSk,name:'sixthSk'}} formControlProps={{fullWidth: true}} options={skillOption}/>
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
