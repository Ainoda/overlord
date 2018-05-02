import React, {Component} from "react"
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TablePagination,
  TableCell,
  Checkbox
} from "material-ui"
import PropTypes from "prop-types"

import tableStyle from "./tableStyle"

class CustomTable extends Component {
  render() {
    const { classes, tableHead, tableDataKey, tableData, tableHeaderColor, selected, handleClick, handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } = this.props
    const rowsPerPageOptions = [10,20,30]
    const emptyRows = rowsPerPage ? rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage) : 0
    return (
      <div>
        <div className={classes.tableResponsive}>
        { this.props.children }
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
              <TableRow>
                {handleClick ? <TableCell padding="checkbox">
                  <Checkbox disabled={true}/>
                </TableCell> : null}
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`} key={key}>
                      {prop}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
          {tableData.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((prop, key) => {
            const isSelected = key === selected
            return (
              <TableRow hover key={prop._id} onClick={e => handleClick ? handleClick(e, key) : null} aria-checked={isSelected} selected={isSelected}>
                { handleClick ? <TableCell padding="checkbox">
                  <Checkbox checked={isSelected}/>
                </TableCell> : null }
                {tableDataKey.map((attr,key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop[attr]}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 49 * emptyRows }}>
              <TableCell colSpan={tableDataKey.length + (handleClick?1:0)} />
            </TableRow>
          )}
          </TableBody>
        </Table>
        </div>
        {handleChangePage ? <TablePagination
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="每页"
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          rowsPerPageOptions={rowsPerPageOptions}
          onChangePage={handleChangePage ? handleChangePage : null}
          onChangeRowsPerPage={handleChangeRowsPerPage ? handleChangeRowsPerPage : null}
        /> : null}
      </div>
    )
  }
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default withStyles(tableStyle)(CustomTable)
