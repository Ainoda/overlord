import React, { Component } from "react"
import { withStyles,Grid,Button,Slide } from "material-ui"
import axios from "axios"
import {
  Add,
  Edit,
  Delete
} from "material-ui-icons"

import { RegularCard,Table,ItemGrid } from "../../components"
import speciesStyle from "./speciesStyle"

class Species extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData:[],
      tableHead:["名称", "编码", "猎物", "天敌"],
      tableDataKey:["name","code","prey","hunter"],
      page:0,
      rowsPerPage:10,
      selected:'',
      showModal:false
    }
    
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
    this.add = this.add.bind(this)
  }

  componentDidMount() {
    axios.get('/species/find').then(result => {
      this.setState({tableData:result})
    })
  }

  handleClick(e, id, index) {
    if(this.state.selected !== id){
      this.setState({selected:id})
    }else {
      this.setState({selected:''})
    }
  }

  handleChangePage(e, page) {
    this.setState({page})
  }

  handleChangeRowsPerPage(e) {
    this.setState({rowsPerPage:e.target.value})
  }

  add() {
    this.setState({showModal:true})
  }

  render() {
    const { classes, ...rest } = this.props
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
          cardTitle="类型列表"
          cardSubtitle=""
          content={
            <Table
            tableHeaderColor="primary"
            tableHead={ this.state.tableHead }
            tableDataKey={ this.state.tableDataKey }
            tableData={ this.state.tableData }
            selected={ this.state.selected }
            handleClick={ this.handleClick }
            handleChangePage={ this.handleChangePage }
            handleChangeRowsPerPage={ this.handleChangeRowsPerPage }
            page={this.state.page}
            rowsPerPage={this.state.rowsPerPage}
            >
              <Button variant="raised" className={classes.button} onClick={this.add}>
                <Add/>
                新增
              </Button>
              <Button variant="raised" color="primary" className={classes.button}>
                <Edit/>
                修改
              </Button>
              <Button variant="raised" color="secondary" className={classes.button}>
                <Delete/>
                删除
              </Button>
            </Table>
          }
          />
        </ItemGrid>
        <Slide direction="up" in={this.state.showModal} mountOnEnter unmountOnExit>
          <RegularCard
            cardTitle="新增类型"
            cardSubtitle=""
            content={
              
            }
          />
        </Slide>
      </Grid>
    )
  }
}

export default withStyles(speciesStyle)(Species)