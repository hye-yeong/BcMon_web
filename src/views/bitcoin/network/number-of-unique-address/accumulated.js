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
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/number-of-unique-addresses/cumulative/day",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/number-of-unique-addresses/cumulative/year"
];
var tag = "value";
var title = "Cumulative";
var caption = "The cumulative value of number of unique addresses per day. Unique address is a newly added address that is not in previous blocks";

class uniqueAddress_total extends React.Component {
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
                          { text: "각 트랜잭션에 저장된 addresses" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "수집 방법" },
                          { text: "당일까지 분석된 블록들에 저장된 트랜잭션에 기록된 addressses 정보를 수집" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "분석 방법" },
                          { text: "당일까지 분석된 블록 내 트랜잭션에 기록된 고유주소 개수의 총합 (단, 주소가 데이터베이스에 입력되기 전 전처리 과정에서 중복 제거)" },
                        ]
                      },
                    ]}
                  />
                  <ul>
                    <li>Address(주소): 주소는 개인키(private key)와 공개키(public key)로 생성되고, 지갑 주소를 통해 코인을 주고 받을 수 있음<br />
                        개인키로 공개키를 생성하고 공개키 해시를 계산하고 지갑주소를 생성함. (개인키로 여러 공개키와 지갑 주소를 생성할 수 있음)<br /></li>
                  </ul>
                  <ul>
                    <li>개인키(private key): 블록체인에 저장된 비트코인의 소유임을 증명할 때 사용(전자서명). 개인키를 사용하면 지갑에 접근할 수 있는 비밀번호와 같은 기능을 함<br />
                        하지만 비밀번호와 달리 변경과 복구가 불가능하고 분실한 개인키는 어디에서도 찾을 수 없기 때문에 보관에 유의해야 함<br />
                        개인키와 그 안의 코인 정보는 전 세계에 퍼져있는 블록체인 네트워크에 암호화되어 저장됨</li>
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

export default uniqueAddress_total;
