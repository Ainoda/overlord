import React, { Component } from "react"
import { withStyles,Grid,Button } from "material-ui"
import axios from "axios"
import {
  Add,
  Edit,
  Delete
} from "material-ui-icons"

import { RegularCard,Table,ItemGrid } from "../../components"
import petStyle from "./petStyle"

class Pet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData:[],
      tableHead:["名称", "编码", "类型", "获取方式", "技能1", "技能2", "技能3", "技能4", "技能5", "技能6"],
      tableDataKey:["name","code","dimension","get","firstsk","sencondsk","thirdsk","fourthsk","fifthsk","sixthsk"],
      page:0,
      rowsPerPage:10,
      selected:''
    }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
  }

  componentDidMount() {
    axios.get('/pet/find').then(result => {
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
  handleChangePage(e, page){
    this.setState({page})
  }
  handleChangeRowsPerPage(e){
    this.setState({rowsPerPage:e.target.value})
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <Grid container {...rest}>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
          cardTitle="宠物列表"
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
              <Button variant="raised" className={classes.button}>
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
      </Grid>
    )
  }
}

export default withStyles(petStyle)(Pet)
