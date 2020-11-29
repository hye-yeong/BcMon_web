import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import classNames from "classnames";

// reactstrap components
import { Card, CardHeader, CardTitle, CardBody, Button, ButtonGroup,Row, Col } from "reactstrap";
import SortingTable from "../../../../components/SortingTable/SortingTable.js";

// core components_chart 입력하는 부분_
// 아래에 차트 이름과, 차트 경로를 입력하면 된다.
import chartData from "../../../../variables/charts.js";
import chart_totalData from "../../../../variables/chart_total.js"

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
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-utxo/cumulative/day",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-utxo/cumulative/year"
];
var tag = "value";
var title = "Cumulative";
var caption = "The cumulative value of number of UTXOs (Unspent Transaction Outputs) per day";

class nUtxo extends React.Component {
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
          <h2 className="text-center">Transaction</h2>
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
                    thead={[]}
                    tbody={[
                      {
                        data: [
                          { className: "text-center", text: "수집 정보" },
                          { text: "각 블록의 vout 값(value)과 vin 값(value)" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "수집 방법" },
                          { text: "당일까지 분석된 블록들의 상세정보에서 [vin], [vout]필드를 참조하여 vout 값(value)과 vin 값(value)을 수집" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "분석 방법" },
                          { text: "당일까지 분석된 블록의 vout 값(value) - 당일까지 분석된 블록의 vin 값(value)" },
                        ]
                      },
                    ]}
                  />
                  <ul>
                    <li>Transaction(트랜잭션): 비트코인 네트워크에서 비트코인 거래를 표현하기 위한 데이터 구조(거래 내역으로 생각할 수 있음)<br />
                        비트코인 네트워크를 통해서 연결된 피어(peer) 노드들에게 전파되며, 블록체인 내에 영구적으로 보관되어짐</li>
                  </ul>                                 
                  <ul>
                    <li>UTXO(Unspent transaction output): 미사용 트랜잭션 출력값, 트랜잭션이 발생하면 해당 UTXO는 검증을 받은후 Mempool에 저장됨.</li>
                  </ul>
                  <ul>
                    <li>이중지불: 악의를 가진 유저(user)가 서로 다른 노드에게 같은 비트코인을 중복해서 사용하려고 하는 것 <br />
                        비트코인 채굴(mining)과 블록체인은 네트워크가 어떠한 비트코인 거래들이 유효한 거래인지 아닌지에 대해서 확인하고 합의함<br />
                        채굴자(Miner)들이 mempool에 저장되어있는 한 트랜잭션에 포함된 UTXO의 사용기록을 확인하면 해당 거래를 무효화 할 수 있음(이중지불 방지)</li>
                  </ul>
                  <ul>
                    <li>vin: 한 트랜잭션에서 송신자의 수</li>
                    <li>vin 값(value): 한 트랜잭션에서 송신받은 비트코인의 양</li>
                  </ul>
                  <ul>
                    <li>vout: 한 트랜잭션에서 수신자의 수</li>
                    <li>vout 값(value): 한 트랜잭션에서 보낸 비트코인의 양</li>
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

export default nUtxo;
