import React, { Component } from 'react'
import { withStyles,Grid } from 'material-ui'

import { CustomInput as Input,CustomSelect as Select,ItemGrid,FormFooter,Modal } from '../../../components'
import pageStyle from '../../pageStyle'

class SkillContent extends Component {
  constructor(props) {
    super(props)
    this.state = {name:'',code:'',species:'',hitRate:'',description:''}

    this.handleValueChange = this.handleValueChange.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({...props.model})
  }
  handleValueChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    const { classes,handleModalState,showModal,model,ok,options,headerColor,...rest} = this.props
    return (
      <Modal
        {...rest}
        title={model._id ? '编辑技能' : '新增技能'}
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
              <Input labelText="命中率" inputProps={{onChange:this.handleValueChange,value:this.state.hitRate,name:'hitRate'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
            <Select labelText="属性" inputProps={{onChange:this.handleValueChange,value:this.state.species,name:'species'}} formControlProps={{fullWidth: true}} options={options}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="描述" inputProps={{onChange:this.handleValueChange,rows:'3',multiline:true,value:this.state.description,name:'description'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
          </Grid>
        }
        footer={
          <FormFooter className={classes.formFooter} summitAble={this.state.name && this.state.code} cancel={e => handleModalState(false)} ok={e => ok(model._id?'edit':'add',this.state)} />
        }/>
    )
  }
}
SkillContent.defaultProps = {
  headerColor:'blue'
}

export default withStyles(pageStyle)(SkillContent)
