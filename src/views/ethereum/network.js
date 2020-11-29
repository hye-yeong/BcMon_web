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
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/network/difficulty/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/network/difficulty/average/month",
];
var tag = [
  "value",
  "value",
];
var title = [
  "Total",
  "Average",
];
var caption = [
  "The total of difficulty per day",
  "The average of difficulty per day",
];


class ethereumNetwork extends React.Component {

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
        <h2 className="text-center">Ethereum Network</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Difficulty</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/network/difficulty/Total/year"}>
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
                    <Link to={"/admin/ethereum/network/difficulty/average/year"}>
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
          </div>
        </div>
      </>
    );
  }
}

export default ethereumNetwork;
