import React, { Component } from 'react'
import { withStyles,Grid } from 'material-ui'

import { CustomInput as Input,ItemGrid,FormFooter,Modal } from '../../../components'
import pageStyle from '../../pageStyle'

class PetDimensionContent extends Component {
  constructor(props) {
    super(props)
    this.state = {name:'',code:'',hp:'',attack:'',speed:''}

    this.handleValueChange = this.handleValueChange.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({...props.model})
  }
  handleValueChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    const { classes,handleModalState,showModal,model,ok,headerColor,...rest} = this.props
    return (
      <Modal
        {...rest}
        title={model._id ? '编辑属性' : '新增属性'}
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
              <Input labelText="生命值" inputProps={{onChange:this.handleValueChange,value:this.state.hp,name:'hp'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="攻击" inputProps={{onChange:this.handleValueChange,value:this.state.attack,name:'attack'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
              <Input labelText="速度" inputProps={{onChange:this.handleValueChange,value:this.state.speed,name:'speed'}} formControlProps={{fullWidth: true}}/>
            </ItemGrid>
          </Grid>
        }
        footer={
          <FormFooter className={classes.formFooter} summitAble={this.state.name && this.state.code} cancel={e => handleModalState(false)} ok={e => ok(model._id?'edit':'add',this.state)} />
        }/>
    )
  }
}
PetDimensionContent.defaultProps = {
  headerColor:'blue'
}

export default withStyles(pageStyle)(PetDimensionContent)
