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
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

charts(FusionCharts);

let dataSource = [];
let url = [
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/block-size/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/block-size/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/block-size/cumulative/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/block-size/insufficeint/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/block-size/rate-of-change/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/stripped-block-size/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/stripped-block-size/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/stripped-block-size/insufficeint/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/block-weight/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/block-weight/average/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/difficulty/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/mining-interval/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/mining-revenue/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/whole-revenue/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/empty-block/month"
];
var tag = [
  "value",
  "value",
  "value",
  "abnor_size_count",
  "value",
  "sum_strippedsize_per_day",
  "avg_strippedsize_per_day",
  "abnor_strippedsize_count",
  "sum_weight_per_day",
  "avg_weight_per_day",
  "value",
  "value",
  "value",
  "value",
  "emptyblock_per_day"
];
var title = [
  "Total",
  "Average",
  "Cumulative",
  "Insufficeint",
  "Rate of change",
  "Total",
  "Average",
  "Insufficeint",
  "Total",
  "Average",
  "Difficulty",
  "Mining interval",
  "Mining Revenue",
  "Whole revenue",
  "Empty blocks"
];
var caption = [
  "The total block size per day",
  "The average block size per day",
  "The cumulative value of block size per day",
  "Total number of blocks generated per day with size less than 500K",
  "The average rate of block size change per day",
  "The total of stripped block size per day",
  "The average stripped block size per day",
  "Total number of blocks generated during per day with stripped size less than 500K",
  "The total block weight per day",
  "The average of block weight per day",
  "The average value of difficulty per day",
  "The daily average time to mine a block",
  "The total mining reward (excluding Tx fee) per day",
  "The total mining revenue (including Tx fee) per day",
  "The total number of empty blocks per day (Blocks that only include the coinbase Transaction)"
];


class bitcoinBlock extends React.Component {
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
          <h2 className="text-center">Bitcoin Block</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Block Size</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/block-size/total/year"}>
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
                    <Link to={"/admin/bitcoin/block-size/average/year"}>
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
                    <Link to={"/admin/bitcoin/block-size/cumulative/year"}>
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
                    <Link to={"/admin/bitcoin/blocks/insufficient/block-size/total/year"}>
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
                    <Link to={"/admin/bitcoin/block-size/value/year"}>
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
            <Card className="card-evenoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Stripped Block Size</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/blocks/stripped-block-size/total/year"}>
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
                    <Link to={"/admin/bitcoin/blocks/stripped-block-size/average/year"}>
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
                    <Link to={"/admin/bitcoin/blocks/insufficient/stripped-block-size/total/year"}>
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
                  <h3>Block Weight</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/blocks/block-weight/total/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
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
                    <Link to={"/admin/bitcoin/blocks/block-weight/average/year"}>
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
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/blocks/difficulty/average/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
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
                    <Link to={"/admin/bitcoin/blocks/mining-interval/average/year"}>
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
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/blocks/mining-revenue/total/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
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
              </Row>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/blocks/whole-revenue/total/year"}>
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
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/bitcoin/blocks/empty-blocks/total/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="line"
                            className = "fc-line"
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
          </div>
        </div>
      </>
    );
  }
}

export default bitcoinBlock;
