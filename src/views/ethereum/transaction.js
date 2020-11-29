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
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/transaction/number-of-transaction/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/transaction/number-of-transaction/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/transaction/number-of-transaction/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/transaction/gas-used/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/transaction/gas-used/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/transaction/gas-used/cumulative/month",
];
var tag = [
  "value",
  "value",
  "value",
  "value",
  "value",
  "value"
];
var title = [
  "Total",
  "Average",
  "Cumulative",
  "Total",
  "Average",
  "Cumulative",
];
var caption = [
  "The total of number of transactions per day",
  "The average number of transactions per day",
  "The accumulated value of number of transactions per day",
  "The total of gasUsed per day",
  "The average of gasUsed per day",
  "The accumulated value of gasUsed per day",
];

class ethereumTx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      //mean은 그래프 당 의미가 하나 밖에 없을 때는 사용하지 말것.
      mean:"Sum of Tx"
    };
  }
  // 버튼 사용시 사용하는 생성자
  setBgChartData = (name1, name2) => {
    this.setState({
      bigChartData: name1,
      mean: name2
    });
  };

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
          <h2 className="text-center">Ethereum Transaction</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Number of Transaction</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/transaction/number-of-transactions/total/year"}>
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
                      <Link to={"/admin/ethereum/transaction/number-of-transactions/average/year"}>
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
                  <Col lg="4">
                    <Card className="card-mini">
                      <Link to={"/admin/ethereum/transaction/number-of-transactions/cumulated-value/year"}>
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
                </Row>
              </Card>
              <Card className="card-evenoutline">
                <CardHeader>
                  <CardTitle>
                    <h3>Gas Used</h3>
                  </CardTitle>
                </CardHeader>
                <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/ethereum/transaction/gas-used/total/year"}>
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
                  <Link to={"/admin/ethereum/transaction/gas-used/summation/year"}>
                    <CardBody>
                      <div className="chart-area">
                      <ReactFusioncharts
                            type="line"
                            className = "mychart"
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
                  <Link to={"/admin/ethereum/transaction/gas-used/average/year"}>
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
              </Row>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default ethereumTx;
