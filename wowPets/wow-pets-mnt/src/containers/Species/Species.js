import React, { Component } from "react"
import { withStyles,Grid,Button } from "material-ui"
import axios from "axios"
import {
  Add,
  Edit,
  Delete,
  Search
} from "material-ui-icons"

import { RegularCard,Table,ItemGrid,Snackbar } from "../../components"
import speciesStyle from "./speciesStyle"
import SpeciesContent from "./FormContent/SpeciesContent"

class Species extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData:[],
      tableHead:["名称", "编码", "猎物", "天敌"],
      tableDataKey:["name","code","prey","hunter"],
      page:0,
      rowsPerPage:10,
      selected:-1,
      showModal:false,
      model:{name:'',code:'',prey:'',hunter:''},
      notification:{status:'',message:''}
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
  }
  componentDidMount() {
    this.handleSearch()
  }
  handleSearch() {
    axios.get('/species/find').then(result => {
      this.setState({tableData:result})
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
    this.setState({model:{name:'',code:'',prey:'',hunter:''}})
    this.handleModalState();
  }
  handleClickEdit() {
    if(this.state.selected >= 0){
      this.setState({model:this.state.tableData[this.state.selected]})
      this.handleModalState();
    }else {
      this.notification('warning','请选择一条记录')
    }
  }
  handleClickDelete() {
    if(this.state.selected >= 0){
      let model = this.state.tableData[this.state.selected]
      axios.delete(`/species/delete/${model._id}`).then(result => {
        this.handleSearch()
        this.handleModalState(false)
        this.notification('success','删除成功')
      })
    }else {
      this.notification('warning','请选择一条记录')
    }
  }
  handleSave(type, model) {
    if(type == 'edit'){
      model._id = this.state.model._id
      axios.put('/species/update',model).then(result => {
        this.handleSearch()
        this.handleModalState(false)
        this.notification('success','修改成功')
      })
    }else {
      axios.post('/species/insert',model).then(result => {
        this.handleSearch()
        this.handleModalState(false)
        this.notification('success','新增成功')
      })
    }
  }
  notification(status,message) {
    this.setState({notificationOpen:true})
    this.setState({notification:{status,message}})
    setTimeout(()=>{
      this.setState({notificationOpen:false})
    },6000)
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
            </Table>
          }
          />
        </ItemGrid>
        <SpeciesContent handleModalState={this.handleModalState} showModal={this.state.showModal} model={this.state.model} ok={this.handleSave} />
        <Snackbar
          place="tr"
          color={this.state.notification.status}
          message={this.state.notification.message}
          open={this.state.notificationOpen}
          closeNotification={() => this.setState({ notificationOpen: false })}
          close
        />
      </Grid>
    )
  }
}

export default withStyles(speciesStyle)(Species)
