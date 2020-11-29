import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

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
  "http://bcmon.kmu.ac.kr/hyperledger/graphs/transaction/month",
  "http://bcmon.kmu.ac.kr/hyperledger/graphs/transaction/total-transaction/month"
];
var tag = [
  "total_Tx_Daily",
  "total_Tx"
];
var title = [
  "Transaction",
  "Total Transaction"
];
var caption = [
  "Total transaction per day",
  "Total Transaction"
];

class hyperledgerTx extends React.Component {
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
          <h2 className="text-center">Hyperledger Transaction</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/hyperledger/transaction/transactions"}>
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
                  <Link to={"/admin/hyperledger/transaction/total_transaction"}>
                    <CardBody>
                      <div className="chart-area" >
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
          </div>
        </div>
      </>
    );
  }
}




export default hyperledgerTx;
