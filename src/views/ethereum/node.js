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
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/node/node-usage/buffer-size/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/node/node-usage/cached-size/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/node/node-usage/cpu-usage/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/node/node-usage/memory-usage/month",
];
var tag = [
  "value",
  "value",
  "value",
  "value",
];
var title = [
  "Buffer Size ",
  "Cached Size ",
  "CPU Usage",
  "Memory Usage",
];
var caption = [
  "The average used buffer size per day",
  "The average used cache size per day",
  "The average used CPU per day",
  "The average used memory per day",
];

class ethereumNode extends React.Component {

  render() {
    for(var i = 0; i < url.length; i++){
      dataSource[i] = chartData.renderGraph(url[i], tag[i], title[i], caption[i], i);
    }

    return (
      <>
        <div className="content">
          <h2 className="text-center">Ethereum Node</h2>
          <div className="content">
          <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Node usage</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                  <Link to={"/admin/ethereum/node/buffer-size/average/year"}>
                    <CardBody>
                      <div className="chart-area" >
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
                <Col lg="4">
                  <Card className="card-mini">
                  <Link to={"/admin/ethereum/node/cpu/average/year"}>
                    <CardBody>
                      <div className="chart-area" >
                        <ReactFusioncharts
                            type="line"
                            className = "mychart"
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
                  <Link to={"/admin/ethereum/node/memory/average/year"}>
                    <CardBody>
                      <div className="chart-area" >
                        <ReactFusioncharts
                            type="line"
                            className = "mychart"
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
          </div>
        </div>
      </>
    );
  }
}

export default ethereumNode;
