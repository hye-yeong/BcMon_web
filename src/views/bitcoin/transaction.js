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
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-transaction/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-transaction/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-transaction/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-transaction/rate-of-change/value/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-transaction/rate-of-mining-revenue/value/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-transaction/ratio-of-input-to-output/value/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-vin/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-vin/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-vout/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-vout/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/vout-value/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/vout-value/rate-of-change/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-utxo/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-utxo/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/prediction-number-of-transaction/block/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/transaction-volume/rate-of-mining-revenue/value/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/fee/total/month",
];
var tag = "value";
var title = [
  "Total",
  "Average",
  "Cumulative",
  "Rate of change",
  "Ratio of mining revenue",
  "Ratio of input to output",
  "Total",
  "Average",
  "Total",
  "Average",
  "Total",
  "Rate of change",
  "Total",
  "Cumulative",
  "Block",
  "Ratio of mining revenue to transaction volume",
  "Fee",
];
var caption = [
  "The total number of transactions per day",
  "The average number of transactions per day",
  "The cumulative value of number of transactions per day",
  "The average rate of change to number of transactions per day",
  "The daily average ratio of mining revenue (excluding fee) to number of transaction",
  "The average ratio of number of transaction inputs to number of transaction outputs per day",
  "The total number of transaction inputs per day",
  "The average number of transaction inputs per day",
  "The total number of transaction outputs per day",
  "The average number of transaction outputs per day",
  "The total transaction outputs value per day",
  "The average rate of change to transaction output value per day",
  "The total number of UTXOs (Unspent Transaction Outputs) per day",
  "The cumulative value of number of UTXOs (Unspent Transaction Outputs) per day",
  "The prediction to number of transactions of next block",
  "The daily average ratio of mining revenue (excluding fee) to total transaction volumes",
  "The total transaction fee per day.",
];

class bitcoinTx extends React.Component {
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
    dataSource[i] = chartData.renderGraph(url[i], tag, title[i], caption[i], i);
    console.log("임시 데이터 1 - " + i + " : ");
    console.log(JSON.stringify(dataSource[i]));
  }

    return (
      <>
        <div className="content">
          <h2 className="text-center">Bitcoin Transaction</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Number of Transaction </h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-transaction/total"}>
                      <CardBody>
                        <div className="chart-area">
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
                    <Link to={"/admin/bitcoin/transaction/number-of-transaction/average"}>
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
                    <Link to={"/admin/bitcoin/transaction/number-of-transaction/cumulative"}>
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
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-transaction/rate-of-change/value"}>
                      <CardBody>
                        <div className="chart-area">
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
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-transaction/rate-of-mining-revenue/value"}>
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
                    <Link to={"/admin/bitcoin/transaction/number-of-transaction/ratio-of-inout-to-output/value"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "mychart"
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
            <Card className="card-evenoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Vin(Number of inputs)</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-vin/total"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "mychart"
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
                    <Link to={"/admin/bitcoin/transaction/number-of-vin/average"}>
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
            <Card className="card-thirdoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Vout(Number of outputs)</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-vout/total"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[8]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-vout/average"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[9]}
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
                  <h3>Vout value(Transaction outputs)</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/vout-value/total"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[10]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/vout-value/rate-of-change"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[11]}
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
                  <h3>Number of UTXOs</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-utxo/total"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[12]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/number-of-utxo/cumulative"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[13]}
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
                  <h3>Prediction number of transaction</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/prediction-number-of-transaction/block"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[14]}
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
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/transaction-volume/rate-of-mining-revenue/value"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[15]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/transaction/fee/total"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[16]}
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

export default bitcoinTx;
