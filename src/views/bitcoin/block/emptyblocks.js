import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import classNames from "classnames";

// reactstrap components
import { Card, CardHeader, CardTitle, CardBody, Button, ButtonGroup,Row, Col } from "reactstrap";
import SortingTable from "../../../components/SortingTable/SortingTable.js";

// core components_chart 입력하는 부분_
// 아래에 차트 이름과, 차트 경로를 입력하면 된다.
import chartData from "../../../variables/charts.js";
import chart_totalData from "../../../variables/chart_total.js"

import ReactFC from 'react-fusioncharts';
import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import Zoomline from "fusioncharts/fusioncharts.zoomline";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, charts, Zoomline, FusionTheme);
charts(FusionCharts);

let dataSource=[];
let url = [
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/empty-block/day",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/empty-block/year"
];
var tag = "emptyblock_per_day";
var title = "Empty blocks";
var caption = "The total number of empty blocks per day (Blocks that only include the coinbase Transaction)";

class emptyblocks extends React.Component {
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
    dataSource[0] = chart_totalData.renderZoomChart(url[0], tag, title, caption);
    dataSource[1] = chartData.renderZoomChart(url[1], tag, title, caption);

    return (
      <>
        <div className="content">
          <h2 className="text-center">Block</h2>
          <Row>
            <Col xm="12" md={{ size: 10, offset: 1 }}>
              <Card className="card-chart">
                <CardHeader>
                  <Col className="text-left" sm="12">
                  </Col>
                  <Col xm="14">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        color="info"
                        id="0"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: this.state.bigChartData === "0"
                        })}
                        onClick={() => this.setBgChartData("0")}
                      >
                        <input defaultChecked name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          All Time
                        </span>
                        <span className="d-block d-sm-none">
                          All Time
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: this.state.bigChartData === "1"
                        })}
                        onClick={() => this.setBgChartData("1")}
                      >
                        <input name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          1 year
                        </span>
                        <span className="d-block d-sm-none">
                          1 year
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                    <div className="chart-area">
                    <ReactFusioncharts
                          type="zoomline"
                          width="100%"
                          height="500"
                          dataFormat="JSON"
                          dataSource={dataSource[this.state.bigChartData]}
                        />
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col xm="12" md={{ size: 10, offset: 1 }}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h4>Detailed description</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <SortingTable
                    tbody={[
                      {
                        data: [
                          { className: "text-center", text: "수집 정보" },
                          { text: "Coinbase Transaction 외에 다른 Transaction이 없는 블록" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "수집 방법" },
                          { text: "하루 동안 생성된 블록들의 상세정보에서 [nTx]필드를 참조하여 Transaction 개수가 1인 블록을 탐색" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "분석 방법" },
                          { text: "Transaction 개수가 1인 블록의 총합" },
                        ]
                      },
                    ]}
                  />
                  <ul>
                    <li>Coinbase Transaction: 채굴자(miner)에게 해당 블록을 생성한 대가로 받는 보상을 송금하는 Transaction <br /></li>
                  </ul>
                  <ul>
                    <li>Transaction 개수가 1이라는 의미는 생성된 블록에 Coinbase Transaction만이 존재</li>
                  </ul>
                  <ul>
                    <li>number of transaction(nTx)은 해당 블록에서의 Transaction 개수</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default emptyblocks;
