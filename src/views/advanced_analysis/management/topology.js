import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
// import classNames from "classnames";
// reactstrap components
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
//import SortingTable from "../../../components/SortingTable/SortingTable.js";

class topology extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "0"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  render() {
    return (
      <>
        <div className="content">
          <h2 className="text-center">Bitcoin Topology</h2>
          <p className="title"><br />Bitcoin Network Analysis</p>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle><h4>Collected data statistics</h4></CardTitle>
                </CardHeader>
                <CardBody> 
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th></th>
                        <th className="text-center" >IPs</th>
                        <th className="text-center">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th className="text-center">Total IP address</th>
                      <th className="text-center" >162,319</th>
                      <th className="text-center">(*)</th>
                    </tr>
                    <tr>
                      <th className="text-center">Unique IP address</th>
                      <th className="text-center" >136,023</th>
                      <th className="text-center">83.80%</th>
                    </tr>
                    <tr>
                      <th className="text-center">Double IP address</th>
                      <th className="text-center" >26,295</th>
                      <th className="text-center">16.20%</th>
                    </tr>
                    <tr>
                      <th className="text-center">IPv4</th>
                      <th className="text-center" >146,087</th>
                      <th className="text-center">90%</th>
                    </tr>
                    <tr>
                      <th className="text-center">IPv6</th>
                      <th className="text-center" >8,116</th>
                      <th className="text-center">5%</th>
                    </tr>
                    <tr>
                      <th className="text-center">Tor</th>
                      <th className="text-center" >8,116</th>
                      <th className="text-center">5%</th>
                    </tr>
                    <tr>
                      <th className="text-center">Reachable peers</th>
                      <th className="text-center" >87,652</th>
                      <th className="text-center">54%</th>
                    </tr>
                    <tr>
                      <th className="text-center">Unreachable peers(#)</th>
                      <th className="text-center" >74,667</th>
                      <th className="text-center">46%</th>
                    </tr>
                      <tr>
                        <th className="text-center">Permanently connected peers</th>
                        <th className="text-center" >15,640</th>
                        <th className="text-center">17.8% of (#)</th>
                      </tr>
                      <tr>
                        <th className="text-center">Churn peers</th>
                        <th className="text-center" >72,012</th>
                        <th className="text-center">82.1% of (#)</th>
                      </tr>
                      <tr>
                        <th className="text-center">Misbehaving peers</th>
                        <th className="text-center" >1,623</th>
                        <th className="text-center">1%</th>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle><h4>Bitcoin network statistics form the last sub graph sample</h4></CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center" >Avg path length</th>
                      <th className="text-center">22.532</th>
                    </tr>
                    <tr>
                      <th className="text-center" >Network Centralization</th>
                      <th className="text-center">0.058</th>
                    </tr>
                    <tr>
                      <th className="text-center" >Avg Clustering Coefficient</th>
                      <th className="text-center">0.082</th>
                    </tr>
                  </thead>
                </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <p className="title"><br />System Architecture</p>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle><h4>Proposed Framework Architecture</h4></CardTitle>
                </CardHeader>
                <CardBody>
                  <div class="text-center">
                    <img
                      vspace="5"
                      hspace="5"
                      width="800px"
                      height="300px"
                      alt="..."
                      src={require("../../../assets/img/architecture2.png")}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle><h4>Discovery Data structure</h4></CardTitle>
                </CardHeader>
                <CardBody>
                  <div class="text-center">
                    <img
                      vspace="5"
                      hspace="5"
                      width="1000px"
                      height="450px"
                      alt="..."
                      src={require("../../../assets/img/Discovery_Data_structure.png")}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
       </div>
      </>
    );
  }
}

export default topology;
/*
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle><h4>Bitcoin nodes count comparison</h4></CardTitle>
                </CardHeader>
                <CardBody>
                  <div class="text-center">
                    <img
                      vspace="5"
                      hspace="5"
                      width="700px"
                      height="430px"
                      alt="..."
                      src={require("../../../assets/img/comparison.jpg")}
                    />
                    <p className="title"><br /><br /></p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle><h4>Average propagation latency based on nodes geolocation</h4></CardTitle>
                </CardHeader>
                <CardBody>
                  <div class="text-center">
                    <img
                      vspace="5"
                      hspace="5"
                      width="600px"
                      height="450px"
                      alt="..."
                      src={require("../../../assets/img/propagation.png")}
                    />
                    <p className="title"><br /></p>
                  </div>
                </CardBody>
              </Card>
            </Col>
*/
