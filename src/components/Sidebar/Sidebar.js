/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import styles from './Sidebar.css';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Collapse, NavItem, Nav, TabContent, TabPane, Row, Col} from "reactstrap";

var ps;
import logo from "../../assets/img/BcMonLogo.ico";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "profile",
      verticalTabs: "profile",
      verticalTabsIcons: "home",
      pageTabs: "home",
      openedCollapses: [""]
    };
  }
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = routes => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }

  collapsesToggle = (e, collapse) => {
    e.preventDefault();
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  // with this function we change the active tab for all the tabs in this page
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = routes => {
    const { rtlActive } = this.props;
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        return (
          <li
            className={this.getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={this.state[prop.state]}
              onClick={e => {
                e.preventDefault();
                this.setState(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {rtlActive ? prop.rtlName : prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span className="sidebar-mini-icon">
                    {rtlActive ? prop.rtlMini : prop.mini}
                  </span>
                  <span className="sidebar-normal">
                    {rtlActive ? prop.rtlName : prop.name}
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>
            <Collapse isOpen={this.state[prop.state]}>
              <ul className="nav">{this.createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={this.activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink to={prop.layout + prop.path} activeClassName="" onClick={this.props.closeSidebar}>
            {prop.icon !== undefined ? (
              <>
                <i className={prop.icon} />
                <p>{rtlActive ? prop.rtlName : prop.name}</p>
              </>
            ) : (
              <>
                <span className="sidebar-mini-icon">
                  {rtlActive ? prop.rtlMini : prop.mini}
                </span>
                <span className="sidebar-normal">
                  {rtlActive ? prop.rtlName : prop.name}
                </span>
              </>
            )}
          </NavLink>
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  componentDidMount() {
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar);
    }
  }
  componentWillUnmount() {
    // we need to destroy the false scrollbar when we navigate
    // to a page that doesn't have this component rendered
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    const { activeColor, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
      if (logo.outterLink !== undefined) {
        logoImg = (
          <a
            href={logo.outterLink}
            className="simple-text logo-mini"
            target="_blank"
            onClick={this.props.closeSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        );
        logoText = (
          <a
            href={logo.outterLink}
            className="simple-text logo-normal"
            target="_blank"
            onClick={this.props.closeSidebar}
          >
            {logo.text}
          </a>
        );
      } else {
        logoImg = (
          <NavLink
            to={logo.innerLink}
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </NavLink>
        );
        logoText = (
          <NavLink
            to={logo.innerLink}
            className="simple-text logo-normal"
            onClick={this.props.closeSidebar}
          >
            {logo.text}
          </NavLink>
        );
      }
    }

    return (
      <div className="sidebar" data={activeColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          {logoImg !== null || logoText !== null ? (
            <div className="logo">
              {logoImg}
              {logoText}
            </div>
          ) : null}
          <div class="user">
          <Card className="card-plain">
            <div
              aria-multiselectable={true}
              className="card-collapse"
              id="accordion"
              role="tablist"
            >
            <Card className="card-plain">
                <CardHeader role="tab">
                  <div className={styles.menu}>
                    <a
                      aria-expanded={this.state.openedCollapses.includes("collapseOne")}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={e => this.collapsesToggle(e, "collapseOne")}
                    >
                    <img
                      vspace="5"
                      hspace="10"
                      width="auto"
                      height="28px"
                      alt="..."
                      src={require("../../assets/img/bitcoin_wh.svg")}
                    />
                      Bitcoin{" "}
                        <i className="tim-icons icon-minimal-down"/>
                    </a>
                  </div>
                </CardHeader>
                <Collapse
                  role="tabpanel"
                  isOpen={this.state.openedCollapses.includes(
                    "collapseOne"
                  )}
                >
                <CardBody>
                  <dl>
                    <dt><Link to={"/admin/bitcoin/block_menu"}>Block</Link></dt>
                    <dt><Link to={"/admin/bitcoin/network_menu"}>Network</Link></dt>
                    <dt><Link to={"/admin/bitcoin/node_menu"}>Node</Link></dt>
                    <dt><Link to={"/admin/bitcoin/tx_menu"}>Transaction</Link></dt>
                  </dl>
                </CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
                <CardHeader role="tab">
                  <div className={styles.menu}>
                    <a
                      aria-expanded={this.state.openedCollapses.includes("collapseTwo")}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={e => this.collapsesToggle(e, "collapseTwo")}
                    >
                    <img
                      vspace="5"
                      hspace="10"
                      width="auto"
                      height="28px"
                      alt="..."
                      src={require("../../assets/img/ethereum_wh.svg")}
                    />
                      Ethereum{" "}
                        <i className="tim-icons icon-minimal-down"/>
                    </a>
                  </div>
                </CardHeader>
                <Collapse
                  role="tabpanel"
                  isOpen={this.state.openedCollapses.includes(
                    "collapseTwo"
                  )}
                >
                <CardBody>
                  <dl>
                    <dt><Link to={"/admin/ethereum/block_menu"}>Block</Link></dt>
                    <dt><Link to={"/admin/ethereum/network_menu"}>Network</Link></dt>
                    <dt><Link to={"/admin/ethereum/node_menu"}>Node</Link></dt>
                    <dt><Link to={"/admin/ethereum/tx_menu"}>Transaction</Link></dt>
                  </dl>
                </CardBody>
              </Collapse>
            </Card>

            <Card className="card-plain">
                <CardHeader role="tab">
                  <div className={styles.menu}>
                    <a
                      aria-expanded={this.state.openedCollapses.includes("collapseThree")}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={e => this.collapsesToggle(e, "collapseThree")}
                    >
                    <img
                      vspace="5"
                      hspace="10"
                      width="auto"
                      height="28px"
                      alt="..."
                      src={require("../../assets/img/analysis.png")}
                    />
                      Advanced analysis{" "}
                        <i className="tim-icons icon-minimal-down"/>
                    </a>
                  </div>
                </CardHeader>
                <Collapse
                  role="tabpanel"
                  isOpen={this.state.openedCollapses.includes(
                    "collapseThree"
                  )}
                >
                <CardBody>
                  <dl>
                    <dt><Link to={"/admin/advanced/forensic_menu"}>Bitcoin Forensic</Link></dt>
                    <dt><Link to={"/admin/advanced/DDos"}>Bitcoin DDoS</Link></dt>
                    <dt><Link to={"/admin/advanced/illegal_menu"}>Illegal</Link></dt>
                    <dt><Link to={"/admin/advanced/management_menu"}>Management</Link></dt>
                  </dl>
                </CardBody>
              </Collapse>
            </Card>

              <Card className="card-plain">
                <CardHeader role="tab">
                  <div className={styles.menu}>
                      <a
                        aria-expanded={this.state.openedCollapses.includes("collapsefour")}
                        href="#pablo"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        onClick={e => this.collapsesToggle(e, "collapsefour")}
                      >
                      <img
                        vspace="5"
                        hspace="10"
                        width="auto"
                        height="25px"
                        alt="..."
                        src={require("../../assets/img/laptop.svg")}
                      />
                      Monitoring Sites{" "}
                      <i className="tim-icons icon-minimal-down" />
                      </a>
                    </div>
                  </CardHeader>
                  <Collapse
                    role="tabpanel"
                    isOpen={this.state.openedCollapses.includes(
                      "collapsefour"
                    )}
                  >
                  <CardBody>
                  <dl>
                    <dt><Link to={"/admin/monitering/blockchain_sites"}>Blockchain chart</Link></dt>
                    <dt><Link to={"/admin/monitering/blockchain_explorer"}>Blockchain Explorer</Link></dt>
                    <dt><Link to={"/admin/monitering/market_chart"}>Market chart</Link></dt>
                  </dl>
                  </CardBody>
                </Collapse>
              </Card>
            </div>
          </Card>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  activeColor: PropTypes.oneOf(["primary", "blue", "green", "orange", "red"]),
  rtlActive: PropTypes.bool,
  routes: PropTypes.array.isRequired,
  logo: PropTypes.oneOfType([
    PropTypes.shape({
      innerLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      outterLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ]),
  // this is used on responsive to close the sidebar on route navigation
  closeSidebar: PropTypes.func
};

export default Sidebar;
