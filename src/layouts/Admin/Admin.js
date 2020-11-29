import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Route, Switch } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// core components
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Footer from "../../components/Footer/Footer.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

import routes from "../../routes.js";
import componentRoutes from "../../componentRoutes.js";

import logo from "../../assets/img/BcMonLogo.ico";

var ps;


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: "blue",
      sidebarMini: true,
      opacity: 0,
      sidebarOpened: false
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel);
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    window.addEventListener("scroll", this.showNavbarButton);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    window.removeEventListener("scroll", this.showNavbarButton);
  }
  componentDidUpdate(e) {
    if (e.location.pathname !== e.history.location.pathname) {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  showNavbarButton = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      this.refs.mainPanel.scrollTop > 50
    ) {
      this.setState({ opacity: 1 });
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      this.refs.mainPanel.scrollTop <= 50
    ) {
      this.setState({ opacity: 0 });
    }
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
          />
        );
      } else {
        return null;
      }
    });
  };
  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";

    for (let i = 0; i < componentRoutes.length; i++) {
      if (componentRoutes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(componentRoutes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        let path = window.location.pathname.split('/')
        let checkExp = path[path.length - 2];
        if (
          window.location.pathname.indexOf(
            componentRoutes[i].layout + componentRoutes[i].path
          ) !== -1 || (
            (checkExp === (componentRoutes[i].layout + componentRoutes[i].path).split('/')[path.length - 2]) &&
            (checkExp === "blockInfo" || checkExp === "txInfo" || checkExp === "addrInfo")
          )
        ) {
          return componentRoutes[i].name;
        }
      }
    }

    for (let j = 0; j < routes.length; j++) {
      if (routes[j].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[j].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[j].layout + routes[j].path
          ) !== -1
        ) {
          return routes[j].name;
        }
      }
    }
    return activeRoute;
  };
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleMiniClick = () => {
    let notifyMessage = "Sidebar mini ";
    if (document.body.classList.contains("sidebar-mini")) {
      this.setState({ sidebarMini: false });
      notifyMessage += "deactivated...";
    } else {
      this.setState({ sidebarMini: true });
      notifyMessage += "activated...";
    }
    let options = {};
    options = {
      place: "tr",
      message: notifyMessage,
      type: "primary",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
    document.body.classList.toggle("sidebar-mini");
  };
  toggleSidebar = () => {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    });
    document.documentElement.classList.toggle("nav-open");
  };
  closeSidebar = () => {
    this.setState({
      sidebarOpened: false
    });
    document.documentElement.classList.remove("nav-open");
  };
  render() {

    return (
      <div className="wrapper">
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <div
          className="navbar-minimize-fixed"
          style={{ opacity: this.state.opacity }}
        >
          <button
            className="minimize-sidebar btn btn-link btn-just-icon"
            onClick={this.handleMiniClick}
          >
            <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
            <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
          </button>
        </div>
        <Sidebar
          {...this.props}
          routes={routes}
          activeColor={this.state.activeColor}
          logo={{
            innerLink: "/",
            text: "BcMon",
            imgSrc: logo
          }}
          closeSidebar={this.closeSidebar}
        />
        <div
          className="main-panel"
          ref="mainPanel"
          data={this.state.activeColor}
        >
          <AdminNavbar
            {...this.props}
            handleMiniClick={this.handleMiniClick}
            brandText={this.getActiveRoute(routes)}
            sidebarOpened={this.state.sidebarOpened}
            toggleSidebar={this.toggleSidebar}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Switch>{this.getRoutes(componentRoutes)}</Switch>
          {// we don't want the Footer to be rendered on full screen maps page
          this.props.location.pathname.indexOf("full-screen-map") !==
          -1 ? null : (
            <Footer fluid />
          )}
        </div>
      </div>
    );
  }
}

export default Admin;
