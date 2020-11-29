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
import chartData from "../../../../variables/charts_multipleline.js";
import chart_totalData from "../../../../variables/charts_multipleline_total.js"

import ReactFC from 'react-fusioncharts';
import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import Zoomline from "fusioncharts/fusioncharts.zoomline";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, charts, Zoomline, FusionTheme);
charts(FusionCharts);

let dataSource=[];
let url =[
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/icmp-message/day",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/icmp-message/year"
];
var in_value = "in_value";
var out_value = "out_value";
var title = "ICMP Message";
var caption ="The total number of ICMP messages which the entity received / attempted to send.";

class icmpMessage_sum extends React.Component {
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
    dataSource[0] = chart_totalData.renderZoomChart(url[0], in_value, out_value, title, caption);
    dataSource[1] = chartData.renderZoomChart(url[1], in_value, out_value, title, caption);

    return (
      <>
        <div className="content">
          <h2 className="text-center">Network</h2>
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
                          <i className="tim-icons icon-single-02" />
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
                          <i className="tim-icons icon-gift-2" />
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
                          { text: "SNMP icmpInMsgs(수신한 ICMP메시지의 총 개수), icmpOutMsgs(송신한 ICMP메시지의 총 개수)" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "수집 방법" },
                          { text: "비트코인 노드가 설치된 서버의 SNMP interface에서 20초 간격으로 icmpInMsgs(수신한 ICMP메시지의 총 개수), icmpOutMsgs(송신한 ICMP메시지의 총 개수) data 수집" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "분석 방법" },
                          { text: "당일 icmpInMsgs 총합, 당일 icmpOutMsgs" },
                        ]
                      },
                    ]}
                  />
                  <ul>
                    <li>SNMP(Simple Network Management Protocol): TCP/IP기반 네트워크상의 각 호스트로부터 정기적으로 여러 관리 정보를 자동으로 수집하거나 실시간으로 상태를 모니터링 및 설정할 수 있는 서비스<br />
                        SNMP를 활용하여 실제 네트워크 관리 정보를 얻기 위해서는 네트워크 장비 및 서버에 설치되어 있어야 함</li>
                  </ul>
                  <ul>
                    <li>icmpInMsgs: 엔티티가 수신한 ICMP 메시지의 총 개수</li>
                  </ul>
                  <ul>
                    <li>icmpOutMsgs: 엔티티가 송신하려고 시도했던 ICMP 메시지의 총 개수</li>
                  </ul>
                  <ul>
                    <li>ICMP: TCP/IP에서 IP 패킷을 처리할 때 발생되는 문제를 알리거나, 진단 등과 같이 IP 계층에서 필요한 기타 기능들을 수행하기위해 사용되는 프로토콜, 네트워크 오류메시지를 전송받는데 주로 사용</li>
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

export default icmpMessage_sum;
