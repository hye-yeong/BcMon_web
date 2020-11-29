import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

// core components_chart 입력하는 부분_
// 아래에 차트 이름과, 차트 경로를 입력하면 된다.
import chartData from "../../variables/charts_month.js";
import chartData_multi from "../../variables/charts_multipleMonth.js"
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
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/number-of-unique-addresses/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/number-of-unique-addresses/cumulative/month"
];
var tag = [
  "value",
  "value"
];
var title = [
  "Total",
  "Cumulative"
];
var caption = [
  "The total number of unique addresses per day. Unique address is a newly added address that is not in previous blocks.",
  "The cumulative value of number of unique addresses per day. Unique address is a newly added address that is not in previous blocks."
];
//
let MdataSource = [];
let Murl = [
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/icmp-message/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/interface-bytes/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/ip-packet/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/tcp-segment/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/network/udp-datagram/month",
];
var Mitag = [
  "in_value",
  "in_value",
  "in_value",
  "in_value",
  "in_value"
];
var Motag = [
  "out_value",
  "out_value",
  "out_value",
  "out_value",
  "out_value"
];
var Mtitle = [
  "ICMP Message",
  "Interface bytes",
  "IP Packet",
  "TCP Segment",
  "UDP Datagram"
];
var Mcaption = [
  "The total number of ICMP messages which the entity received / attempted to send",
  "The total number of octets(byte) received / transmitted out on the interface",
  "The total number of input datagrams received from interfaces / requests for transmission",
  "The total number of segments received / sent, including those received in error",
  "The total number of UDP datagrams delivered / sent to UDP users"
];

class bitcoinNetwork extends React.Component {
render() {
    for(var i = 0; i < url.length; i++)
      {
        dataSource[i] = chartData.renderGraph(url[i], tag[i], title[i], caption[i], );
        console.log("임시 데이터 1 - " + i + " : ");
        console.log(JSON.stringify(dataSource[i]));
      }

    for(var index = 0; index < Murl.length; index++)
      {
        MdataSource[index] = chartData_multi.renderZoomChart(Murl[index], Mitag[index], Motag[index], Mtitle[index],  Mcaption[index]);
        console.log("임시 데이터 1 - " + index + " : ");
        console.log(JSON.stringify(MdataSource[index]));
      }

    return (
      <>
        <div className="content">
          <h2 className="text-center">Bitcoin Network</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>Number of unique addresses</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini" >
                    <Link to={"/admin/bitcoin/network/number-of-unique-address/total/year"}>
                      <CardBody>
                        <div className="card-area">
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
                  <Card className="card-mini" >
                    <Link to={"/admin/bitcoin/network/number-of-unique-address/cumulative/year"}>
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
            <Card className="card-evenoutline">
              <CardHeader>
                <CardTitle>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="4">
                  <Card className="card-mini" >
                    <Link to={"/admin/bitcoin/network/icmp-message/sum/year"}>
                      <CardBody>
                        <div className="card-area">
                          <ReactFusioncharts
                            type="msline"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={MdataSource[0]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini" >
                    <Link to={"/admin/bitcoin/network/interface-bytes/sum/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="msline"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={MdataSource[1]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini" >
                    <Link to={"/admin/bitcoin/network/ip-packet/sum/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="msline"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={MdataSource[2]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <Card className="card-mini" >
                    <Link to={"/admin/bitcoin/network/tcp-segment/sum/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="msline"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={MdataSource[3]}
                          />
                        </div>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-mini" >
                    <Link to={"/admin/bitcoin/network/udp-datagram/sum/year"}>
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                            type="msline"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={MdataSource[4]}
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

export default bitcoinNetwork;
