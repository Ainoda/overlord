import React, { Component } from 'react'
import { withStyles,Grid,Button } from 'material-ui'
import axios from 'axios'
import {
  Add,
  Edit,
  Delete,
  Search
} from 'material-ui-icons'

import { RegularCard,Table,ItemGrid,Modal,FormFooter } from '../../components'
import pageStyle from '../pageStyle'
import SkillContent from './FormContent/SkillContent'

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData:[],
      tableHead:['名称','编码','属性','命中率','冷却','使用','持续','描述'],
      tableDataKey:['name','code','speciesName','hitRate','cooling','useRounds','lastRounds','description'],
      species:[],
      page:0,
      rowsPerPage:10,
      selected:-1,
      showModal:false,
      showDelete:false,
      model:{name:'',code:'',species:'',hitRate:'',cooling:'',useRounds:'',lastRounds:'',description:''}
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
    this.handleModalState = this.handleModalState.bind(this)
    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickEdit = this.handleClickEdit.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.handleSearch()
    this.getSpecies()
  }
  handleSearch() {
    axios.get('/skill/find').then(result => {
      this.setState({tableData:result})
    }).catch(error => {
      this.props.notification('danger',error)
    })
  }
  handleClick(e, index) {
    if(this.state.selected === index){
      this.setState({selected:-1})
    }else {
      this.setState({selected:index})
    }
  }
  handleChangePage(e, page) {
    this.setState({page})
  }
  handleChangeRowsPerPage(e) {
    this.setState({rowsPerPage:e.target.value})
  }
  handleModalState(state=true) {
    this.setState({showModal:state})
  }
  handleClickAdd() {
    this.setState({model:{name:'',code:'',species:'',hitRate:'',cooling:'',useRounds:'',lastRounds:'',description:''}})
    this.handleModalState()
  }
  handleClickEdit() {
    if(this.state.selected >= 0){
      this.setState({model:this.state.tableData[this.state.selected]})
      this.handleModalState()
    }else {
      this.props.notification('warning','请选择一条记录')
    }
  }
  handleClickDelete() {
    if(this.state.selected >= 0){
      this.setState({showDelete:true})
    }else {
      this.props.notification('warning', '请选择一条记录')
    }
  }
  handleDelete() {
    // 获取当前选中的数据
    let model = this.state.tableData[this.state.selected]
    axios.delete(`/skill/delete/${model._id}`).then(result => {
      this.handleSearch()
      this.setState({showDelete:false})
      this.props.notification('success',result.msg)
    }).catch(error => {
      this.props.notification('danger',error)
    })
  }
  handleSave(type, model) {
    if(type === 'edit'){
      model._id = this.state.model._id
      axios.put('/skill/update',model).then(result => {
        this.handleSearch()
        this.handleModalState(false)
        this.props.notification('success','修改成功')
      }).catch(error => {
        this.props.notification('danger',error)
      })
    }else {
      let obj = {
        name:model.name,
        code:model.code,
        species:model.species,
        hitRate:model.hitRate,
        cooling:model.cooling,
        useRounds:model.useRounds,
        lastRounds:model.lastRounds,
        description:model.description
      }
      this.setState({model:obj})
      axios.post('/skill/insert',obj).then(result => {
        this.handleSearch()
        this.handleModalState(false)
        this.props.notification('success','新增成功')
      }).catch(error => {
        this.props.notification('danger',error)
      })
    }
  }
  getSpecies() {
    axios.get('/species/find').then(result => {
      this.setState({'species':result})
    }).catch(error => {
      this.props.notification('danger',error)
    })
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <Grid container {...rest}>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
          cardTitle="技能列表"
          cardSubtitle=""
          content={
            <Table
            tableHeaderColor="primary"
            tableHead={this.state.tableHead}
            tableDataKey={this.state.tableDataKey}
            tableData={this.state.tableData}
            selected={this.state.selected}
            handleClick={this.handleClick}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            page={this.state.page}
            rowsPerPage={this.state.rowsPerPage}
            >
              <Button variant="raised" className={classes.button} onClick={this.handleClickAdd}>
                <Add/>
                新增
              </Button>
              <Button variant="raised" color="primary" onClick={this.handleClickEdit} className={classes.button}>
                <Edit/>
                修改
              </Button>
              <Button variant="raised" color="secondary" onClick={this.handleClickDelete} className={classes.button}>
                <Delete/>
                删除
              </Button>
              <Button variant="raised" color="primary" onClick={this.handleSearch} className={classes.searchButton}>
                <Search/>
                搜索
              </Button>
            </Table>
          }
          />
        </ItemGrid>
        <SkillContent handleModalState={this.handleModalState} showModal={this.state.showModal} model={this.state.model} ok={this.handleSave} options={this.state.species}/>
        <Modal
          title="确认删除"
          showModal={this.state.showDelete}
          headerColor="red"
          content={
            <div>确认删除吗？</div>
          }
          footer={
            <FormFooter className={classes.formFooter} cancel={e => this.setState({showDelete:false})} ok={this.handleDelete} />
          }
        ></Modal>
      </Grid>
    )
  }
}

export default withStyles(pageStyle)(Skill)
