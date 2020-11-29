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
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/number-of-blocks/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/number-of-blocks/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/block-size/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/block-size/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/block-size/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/number-of-uncles/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/number-of-uncles/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/number-of-uncles/cumulative/month",
  ];
var tag = [
  "value",
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
  "Average",
  "Cumulative",
  "Total",
  "Average",
  "Cumulative",
];
var caption = [
  "The total of number of blocks per day",
  "The accumulated value of number of blocks per day",
  "The total of size of blocks per day",
  "The average of size of blocks per day",
  "The accumulated value of size of blocks per day",
  "The total of number of uncles per day",
  "The average number of uncles per day",
  "The accumulated value of number of uncles per day"
];

class ethereumBlock extends React.Component {
  render() {
    for(var i = 0; i < url.length; i++)
    {
      dataSource[i] = chartData.renderGraph(url[i], tag[i], title[i], caption[i], i);
      console.log(JSON.stringify(dataSource[i]));
    }

    return (
      <>
        <div className="content">
        <h2 className="text-center">Ethereum Block</h2>
          <div className="title content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Number of Blocks</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/blocks/number-of-block/total/year"}>
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
                    <Link to={"/admin/ethereum/blocks/number-of-block/cumulated-value/year"}>
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
                  <h3>Block size</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/blocks/size-of-block/total/year"}>
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
                    <Link to={"/admin/ethereum/blocks/size-of-block/average/year"}>
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
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/blocks/size-of-block/cumulative/year"}>
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
              </Row>
            </Card>
            <Card className="card-thirdoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Number of Uncles</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/blocks/number-of-uncles/total/year"}>
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
                    <Link to={"/admin/ethereum/blocks/number-of-uncles/average/year"}>
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
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/blocks/number-of-uncles/cumulated-value/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[7]}
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

export default ethereumBlock;
