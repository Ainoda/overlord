import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PerfectScrollbar from 'perfect-scrollbar'

import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { withStyles } from 'material-ui'
import appRoutes from '../../routes/app'
import appStyle from './appStyle.js'
import image from '../../asset/img/sidebar.jpg'
import { Sidebar,Header,Snackbar,Loading } from '../../components'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileOpen:false,
      notification:{status:'',message:''},
      notificationOpen:false,
      loading:false
    }

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.handleNotification = this.handleNotification.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  handleNotification(status,message) {
    this.setState({notificationOpen:true})
    this.setState({notification:{status,message}})
    setTimeout(()=>{
      this.setState({notificationOpen:false})
    },3000)
  }
  handleLoading(v){
    this.setState({loading:v})
  }
  componentDidMount() {
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel)
    }
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={appRoutes}
          logoText="宠物数据库"
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={appRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                {appRoutes.map((prop, key) => {
                  if (prop.redirect){
                    return <Redirect from={prop.path} to={prop.to} key={key} />
                  }
                  return <Route path={prop.path} render={(props) => <prop.component {...props} notification={this.handleNotification} loading={this.handleLoading}/>} key={key} />
                })}
              </Switch>
            </div>
          </div>
          <Snackbar
            place="tr"
            color={this.state.notification.status}
            message={this.state.notification.message}
            open={this.state.notificationOpen}
            closeNotification={() => this.setState({ notificationOpen: false })}
            close
          />
          <Loading loading={this.state.loading}/>
        </div>
      </div>
    )
  }
}

export default withStyles(appStyle)(App)
