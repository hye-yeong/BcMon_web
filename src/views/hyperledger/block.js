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
  "http://bcmon.kmu.ac.kr/hyperledger/graphs/block/month",
  "http://bcmon.kmu.ac.kr/hyperledger/graphs/block/total-block/month"
];
var tag = [
  "value",
  "value"
];
var title = [
  "Block",
  "Total Block"
];
var caption = [
  "Total block per day",
  "Total block"
];


class hyperledgerBlock extends React.Component {

  render() {
    for(var i = 0; i < url.length; i++)
    {
      dataSource[i] = chartData.renderGraph(url[i], tag[i], title[i], caption[i], i);
      console.log("hyperledger 임시 데이터 1 - " + i + " : ");
      console.log(JSON.stringify(dataSource[i]));
    }
    return (
      <>
        <div className="content">
          <h2 className="text-center">Hyperledger Block</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini">
                    <Link to={"/admin/hyperledger/block/blocks"}>
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
                    <Link to={"/admin/hyperledger/block/total_block"}>
                      <CardBody>
                        <div className="chart-area">
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

export default hyperledgerBlock;
