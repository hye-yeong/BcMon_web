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
import chart_totalData from "../../../variables/charts_cmpBlock.js"

import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";

let dataSource = [];
let dataInfo = "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/advanced-analysis/similarity/block_propagation"
var tag = "similarity"
var title = "Mempool Similarity"
var caption = "Common transactions between the mempool and each blocks"

charts(FusionCharts);

class mempool extends React.Component {
  render() {
    dataSource[0] = chart_totalData.renderZoomChart(dataInfo, tag, title, caption);

    return (
      <>
        <div className="content">
          <h2 className="text-center">Management</h2>
          <Row>
            <Col xm="12" md={{ size: 10, offset: 1 }}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                    <div className="chart-area">
                      <ReactFusioncharts
                          type="zoomline"
                          width="100%"
                          height="500"
                          dataFormat="JSON"
                          dataSource={dataSource[0]}
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
                          { text: "Mempool data, Transaction data, Block Data" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "수집 방법" },
                          { text: "비트코인 코어 RPC 명령어를 사용하여 Mempool data 수집, 수집된 Mempool data에 있는 트랜잭션들의 데이터를 분석하고, 해당 트랜잭션이 포함된 블록의 데이터를 수집"},
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "분석 방법" },
                          { text: "메모리풀에서 빠져나간 트랜잭션들 중 블록에 포함된 트랜잭션들과 블록에 포함된 트랜잭션들 간의 트랜잭션들의 유사한 정도를 분석" },
                        ]
                      },
                    ]}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default mempool;
