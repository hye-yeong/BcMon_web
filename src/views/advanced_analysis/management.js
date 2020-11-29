import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { VectorMap } from "react-jvectormap";
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import FusionCharts from "fusioncharts";
import chartData from "../../variables/charts_month.js";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

let dataSource = [];
let dataInfo = [
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/advanced-analysis/cmpctblock_received_time/40",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/advanced-analysis/similarity/block_propagation"
,]
var tag = ["received_time","similarity"]
var title = ["Time receive Compact Block", "Mempool Similarity"]
var caption = [
  "Time to receive the compact block of a single connected node",
  "Common transactions between the mempool and each blocks"
]


class management extends React.Component {
  render() {
    for(var i = 0; i < dataInfo.length; i++)
    {
      dataSource[i] = chartData.renderGraph(dataInfo[i], tag[i], title[i], caption[i], i);
    }

    return (
      <>
        <div className="content">
        <h2 className="text-center">Management</h2>
          <div className="title content">
            <Row>
              <Col md="12">
                <Card className="card-management-firstoutline">
                  <CardHeader>
                    <CardTitle>
                        <h3>Bitcoin Network Realtime Monitoring</h3>
                        <p>The network data is SNMP data collected in Real-time from nodes in the Blockchain network, and monitoring can be performed to determine the status of the network.</p>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
            <Row>
                  <Col md="4">
                    <Link to={"/admin/advanced_analysis/management/topology"}>
                      <Card className="card-management-thirdoutline">
                        <CardHeader>
                          <CardTitle>
                            <h3>Bitcoin Network Topology</h3>
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Link>
                  </Col>
                  <Col md="4">
                      <Card className="card-management-thirdoutline">
                        <CardHeader>
                          <CardTitle>
                            <h3>Bitcoin Node Discovery</h3>
                          </CardTitle>
                        </CardHeader>
                      </Card>
                  </Col>
                  <Col md="4">
                <Card className="card-management-thirdoutline">
                  <Link to={"/admin/advanced_analysis/management/ethereum_node_discovery"}>
                    <CardHeader>
                      <CardTitle>
                        <h3>Ethereum Node Discovery</h3>
                      </CardTitle>
                    </CardHeader>
                  </Link>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Card className="card-management-thirdoutline">
                  <CardHeader>
                    <CardTitle>
                      <h3>Bitcoin Protocol Analysis</h3>
                      <p><b>Bitcoin core Version</b> : 0.20.99</p>
                      <p><b>Wireshark Version</b> : 3.3.1</p>
                      <p><b>Diessector Protocols</b> : sendcmpct, cmpctblock, getblocktxn, blocktxn</p>
                      <p>&nbsp;</p>
                      <p>When you want use the BcMon's Bitcoin Protocol Analysis,&nbsp;<a href="https://github.com/jungyeon0904/BcMon_bitcoin_protocol_analysis.git" rel="noopener noreferrer" target="_blank"><b><u>click here</u></b></a> and then download it.</p>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
              <Col md="12">
                <Card className="card-management-thirdoutline">
                  <CardHeader>
                    <CardTitle>
                      <h3>Block Popagation</h3>
                      <p>When created blocks are relayed, the time at which block data is relayed from the previous node to the next node is analyzed through log data.</p>
                    </CardTitle>
                  </CardHeader>
                  <Row>
                    <Col md="4">
                      <Card className="card-managementMini">
                        <Link to={"/admin/advanced_analysis/management/cmpBlock"}>
                          <CardBody>
                            <div className="chart-area">
                              <ReactFusioncharts
                                type="line"
                                className = "mychart"
                                width="100%"
                                height="300"
                                dataFormat="JSON"
                                dataSource={dataSource[0]}
                              />
                            </div>
                          </CardBody>
                        </Link>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Card className="card-managementMini">
                        <Link to={"/admin/advanced_analysis/management/mempool"}>
                          <CardBody>
                            <div className="chart-area">
                              <ReactFusioncharts
                                type="line"
                                className = "mychart"
                                width="100%"
                                height="300"
                                dataFormat="JSON"
                                dataSource={dataSource[1]}
                              />
                            </div>
                          </CardBody>
                        </Link>
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default management;
