import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

// core components_chart 입력하는 부분_
// 아래에 차트 이름과, 차트 경로를 입력하면 된다.
import chartData from "../../variables/charts_month.js";
import ReactFC from 'react-fusioncharts';
import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import Zoomline from "fusioncharts/fusioncharts.zoomline";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, charts, Zoomline, FusionTheme);
charts(FusionCharts);

let dataSource = [];
let url = [
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/smartcontract/creation/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/smartcontract/creation/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/smartcontract/calling/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/smartcontract/calling/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/smartcontract/distribution/gasused/30",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/smartcontract/distribution/number-of-account/30",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/smartcontract/distribution/recently-called/30"
];
var tag = [
  "value",
  "value",
  "value",
  "value",
  "value",
  "value",
  "value",
];
var title = [
  "Total",
  "Cumulative",
  "Total",
  "Cumulative",
  "GasUsed",
  "Account",
  "Recently Called"
];
var caption = [
  "Number of Smart Contract Creation",
  "Number of Smart Contract Creation",
  "Number of Transaction Calling Smart Contracts",
  "Number of Transaction Calling Smart Contracts",
  "Analysis of smart contracts distribution according to the Average Amount of Gas used in Ethereum Transaction [gasUsed] variable.",
  "Analysis of smart contracts distribution according to the number of accounts generating transactions in Ethereum Transaction [gasUsed] variable.",
  "Analysis of smart contracts distribution according to the number of function calls during a month in Ethereum Transaction [to] variable."
];

class ethereumSmartContract extends React.Component {
  render() {
  for(var i = 0; i < url.length; i++)
  {
    dataSource[i] = chartData.renderGraph(url[i], tag[i], title[i], caption[i], i);
    console.log("임시 데이터 1 - " + i + " : ");
    console.log(JSON.stringify(dataSource[i]));
  }

    return (
      <>
        <div className="content">
        <h2 className="text-center">Ethereum SmartContract</h2>
          <div className="content">
          <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>SmartContract creation</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                   <Link to={"/admin/ethereum/smartcontract/creation/total"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
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
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/smartcontract/creation/cumulative"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
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
            <Card className="card-evenoutline">
              <CardHeader>
                <CardTitle>
                  <h3>SmartContract Calling</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/smartcontract/calling/total"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[2]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/smartcontract/calling/cumulative"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[3]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>

                </Col>
              </Row>
            </Card>
            <Card className="card-evenoutline">
              <CardHeader>
                <CardTitle>
                  <h3>SmartContract Contribution</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/smartcontract/distribution/gasused"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[4]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/smartcontract/distribution/number-of-account"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[5]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/smartcontract/distribution/recently-called"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[6]}
                          />
                        </div>
                      </CardBody>
                    </Link>
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




export default ethereumSmartContract;
