import React, { Component } from 'react'
import { withStyles,Grid,Button,Input } from 'material-ui'
import axios from 'axios'
import {
  Add,
  Edit,
  Delete,
  Search
} from 'material-ui-icons'

import { RegularCard,Table,ItemGrid,Modal,FormFooter } from '../../components'
import pageStyle from '../pageStyle'
import SpeciesContent from './FormContent/SpeciesContent'

class Species extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData:[],
      tableHead:['名称', '编码', '轻击', '重击'],
      tableDataKey:['name','code','tapName','hitName'],
      page:0,
      rowsPerPage:10,
      selected:-1,
      showModal:false,
      showDelete:false,
      searchName:'',
      model:{name:'',code:'',tap:'',hit:''}
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
    // simple implement
    this.httpRequest = 0;
  }
  componentDidMount() {
    this.handleSearch()
  }
  loading(boolean) {
    if(boolean){
      this.httpRequest += 1
      this.props.loading(true)
    }else {
      this.httpRequest -= 1
      if(this.httpRequest === 0){
        this.props.loading(false)
      }
    }
  }
  handleSearch() {
    let params = {}
    if(this.state.searchName){
      params.name = this.state.searchName
    }
    this.loading(true)
    axios.get('/species/find',{params:params}).then(result => {
    this.loading(false)
      this.setState({tableData:result})
    }).catch(error => {
    this.loading(false)
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
    this.setState({model:{name:'',code:'',tap:'',hit:''}})
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
    this.loading(true)
    axios.delete(`/species/delete/${model._id}`).then(result => {
      this.loading(false)
      this.handleSearch()
      this.setState({showDelete:false})
      this.props.notification('success',result.msg)
    }).catch(error => {
      this.loading(false)
      this.props.notification('danger',error)
    })
  }
  handleSave(type, model) {
    this.loading(true)
    if(type === 'edit'){
      model._id = this.state.model._id
      axios.put('/species/update',model).then(result => {
        this.loading(false)
        this.handleSearch()
        this.handleModalState(false)
        this.props.notification('success','修改成功')
      }).catch(error => {
        this.loading(false)
        this.props.notification('danger',error)
      })
    }else {
      let obj = {
        name:model.name,
        code:model.code,
        tap:model.tap,
        hit:model.hit
      }
      this.setState({model:obj})
      axios.post('/species/insert',obj).then(result => {
        this.loading(false)
        this.handleSearch()
        this.handleModalState(false)
        this.props.notification('success','新增成功')
      }).catch(error => {
        this.loading(false)
        this.props.notification('danger',error)
      })
    }
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <Grid container {...rest}>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
          cardTitle="类型列表"
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
              <Input className={classes.searchButton} value={this.state.searchName} onChange={this.handleSearchChange} name='searchName'/>
            </Table>
          }
          />
        </ItemGrid>
        <SpeciesContent handleModalState={this.handleModalState} showModal={this.state.showModal} model={this.state.model} ok={this.handleSave} options={this.state.tableData}/>
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

export default withStyles(pageStyle)(Species)
