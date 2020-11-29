import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { VectorMap } from "react-jvectormap";
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { hasFlag } from 'country-flag-icons'
import chartData from "../../../variables/chartData.js";
import ReactCountryFlag from "react-country-flag"

let dataSource = 0;
let ethereum_node_discovery_url = "http://bcmon.kmu.ac.kr/coin-data/ethereum/view/node/discovery/latest/results";
var mapData = 0;

class ethereumBlock extends React.Component {
  render() {
    chartData.renderTableData(ethereum_node_discovery_url, 5);
    dataSource = chartData.renderTableData(ethereum_node_discovery_url, 15);
    mapData = dataSource[3];

    const list_day = dataSource[0]['date']
    const listItems = dataSource[1].map((list_) =>
      <tr>
        <td>
          <ReactCountryFlag
              countryCode={list_.country_code}
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
              svg
              title={list_.country_code}
            />
        </td>
        <td>{list_.country_name}</td>
        <td>{list_.node_count}</td>
        <td>{list_.ratio}</td>
      </tr>
    );

    return (
      <>
        <div className="content">
        <h2 className="text-center">Management</h2>
          <div className="title content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3 className="text-center">Ethereum Node Discovery</h3>
                  <p className="text-center">BcMon is currently being developed to find all the reachable nodes in the Ethereum network.</p>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="12">
                  <Card className="card-management-ethereum">
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <Link to={"/admin/advanced_analysis/management/ethereum_node_discovery"}>
                            <Table responsive>
                              <thead>
                                {list_day}
                                <p>&nbsp;</p>
                              </thead>
                              <tbody>
                                <tr>
                                  {listItems}
                                </tr>
                              </tbody>
                            </Table>
                            </Link>
                          </Col>
                          <Col className="ml-auto mr-auto" md="6">
                            <VectorMap
                              map={"world_mill"}
                              backgroundColor="transparent"
                              zoomOnScroll={true}
                              containerStyle={{
                                "margin-left":"-10px",
                                width: "100%",
                                height: "350px"
                              }}
                            regionStyle={
                              {
                                initial: {
                                fill: "#e4e4e4",
                                "fill-opacity": 1,
                                stroke: "none",
                                "stroke-width": 0,
                                "stroke-opacity": 0
                              }
                            }}
                            series={{
                              regions: [
                                {
                                  values: mapData,
                                  scale: ["#AAAAAA", "#444444"],
                                  normalizeFunction: "polynomial"
                                }
                              ]
                            }}
                          />
                        </Col>
                      </Row>
                    </CardBody>
                    <CardHeader>
                      <CardTitle>
                        <Row>
                          <Col md="4">
                            <h3><b>&nbsp;Development Environment</b></h3>
                            <p>&nbsp;&nbsp;&nbsp;CPU: Intel Core i7-6700 CPU@3.40GHZ*8</p>
                            <p>&nbsp;&nbsp;&nbsp;Disk: SSD 1TB</p>
                            <p>&nbsp;&nbsp;&nbsp;Memory: 16MB</p>
                            <p>&nbsp;&nbsp;&nbsp;OS: Linux 18.04</p>
                            <p>&nbsp;&nbsp;&nbsp;Go Release : go1.13.6(released 2019.09.03)</p>
                            <p>&nbsp;&nbsp;&nbsp;Geth Release : 1.9.12-unstable</p>
                          </Col>
                          <Col md="8">
                            <h3>System Architecture</h3>
                            <p>Proposeed Framework Architecture</p>
                          </Col>
                        </Row>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default ethereumBlock;
