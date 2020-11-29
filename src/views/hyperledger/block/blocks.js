import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";

// reactstrap components
import { Card, CardHeader, CardTitle, Row, Col } from "reactstrap";

// core components_chart 입력하는 부분_
// 아래에 차트 이름과, 차트 경로를 입력하면 된다.
import chartData from "../../../variables/charts.js";

import ReactFC from 'react-fusioncharts';
import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import Zoomline from "fusioncharts/fusioncharts.zoomline";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

let dataSource;
let url = "http://bcmon.kmu.ac.kr/hyperledger/graphs/block/year";
var tag = "value";
var title = "blocks";
var caption = "Daily blocks count";

ReactFC.fcRoot(FusionCharts, charts, Zoomline, FusionTheme);
charts(FusionCharts);

class hyperBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      //mean은 그래프 당 의미가 하나 밖에 없을 때는 사용하지 말것.
      mean:"BLOCK"
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
    dataSource = chartData.renderZoomChart(url, tag, title, caption);
    return (
      <>
        <div className="content">
          <h2 className="text-center">Blocks</h2>
          <p className="category text-center">
            .
          </p>
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
                          dataSource={dataSource}
                        />
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default hyperBlock;
