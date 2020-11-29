import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { VectorMap } from "react-jvectormap";
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { hasFlag } from 'country-flag-icons'

import ReactFC from 'react-fusioncharts';
import Zoomline from "fusioncharts/fusioncharts.zoomline";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import realTime_chartData from "../../../variables/charts_RealTime.js";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, charts, Zoomline, FusionTheme);
charts(FusionCharts);

let dataSource = [];
let result = [];
let dataInfo = [{
    'url':"http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/snmp/icmpMsms",
    'tag': "ICMP IN Message, Out Message",
    'title':"",
    'in_value': "icmpOutMsms",
    'out_value': "icmpInMsgs",
    'caption':"",
    'InValue': [],
    'OutValue': [],
  },{
    'url':"http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/snmp/ifOctets",
    'call_count':0,
    'tag': "Interface byte",
    'title':"",
    'in_value': "ifInOctets",
    'out_value': "ifOutOctets",
    'caption':"",
    'InValue': [],
    'OutValue': [],
  },{
    'url':"http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/snmp/ipReceives_Requests",
    'call_count':0,
    'tag': "IP Packet",
    'title':"",
    'in_value': "ipInReceives",
    'out_value': "ipOutRequests",
    'caption':"",
    'InValue': [],
    'OutValue': [],
  },{
    'url':"http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/snmp/tcpSegs",
    'call_count':0,
    'tag': "TCP Segment",
    'title':"",
    'in_value': "tcpOutSegs",
    'out_value': "tcpInSegs",
    'caption':"",
    'InValue': [],
    'OutValue': [],
  },{
    'url':"http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/snmp/udpDatagrams",
    'call_count':0,
    'tag': "UDP Datagram",
    'title':"",
    'in_value': "udpOutDatagrams",
    'out_value': "udpInDatagrams",
    'caption':"",
    'InValue': [],
    'OutValue': [],
  }]

class network_monitoring extends React.Component {
  render() {
    function sleep(milliseconds) {
      const start = Date.now();
      while ((Date.now() - start) < milliseconds);
    }

    for(var i = 0; i < dataInfo.length; i++){
      result[i] = realTime_chartData.renderRealTimeData(dataInfo[i]);
      console.log(dataInfo[i]);
      dataSource[i] = result[i]['data'];
      dataInfo[i]['InValue'] = result[i]['InValue'];
      dataInfo[i]['OutValue'] = result[i]['OutValue'];
      }

    return (
      <>
        <div className="content">
          <h2 className="text-center">Mnagement</h2>
          <div className="title content">
            <Card className="card-management-firstoutline">
              <CardHeader>
                <CardTitle>
                  <h3>ICMP Message</h3>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col md="8">
                  <Card className="card-managementMini">
                      <CardBody>
                        <div className="chart-area">
                          <ReactFusioncharts
                              type="zoomline"
                              width="100%"
                              height="500"
                              dataFormat="JSON"
                              dataSource={dataSource[0]}
                            />
                        </div>
                      </CardBody>
                  </Card>
                </Col>
                </Row>
              </Card>
              <Card className="card-management-evenoutline">
                <CardHeader>
                  <CardTitle>
                    <h3>Interface bytes</h3>
                  </CardTitle>
                </CardHeader>
                <Row>
                  <Col md="8">
                    <Card className="card-managementMini">
                        <CardBody>
                          <div>
                            <icmp_component />
                          </div>
                        </CardBody>
                    </Card>
                  </Col>
                  </Row>
                </Card>
                <Card className="card-management-evenoutline">
                  <CardHeader>
                    <CardTitle>
                      <h3>IP Packet</h3>
                    </CardTitle>
                  </CardHeader>
                  <Row>
                    <Col md="8">
                      <Card className="card-managementMini">
                          <CardBody>
                            <div>
                              <icmp_component />
                            </div>
                          </CardBody>
                      </Card>
                    </Col>
                    </Row>
                  </Card>
                  <Card className="card-management-evenoutline">
                    <CardHeader>
                      <CardTitle>
                        <h3>TCP Segment</h3>
                      </CardTitle>
                    </CardHeader>
                    <Row>
                      <Col md="8">
                        <Card className="card-managementMini">
                            <CardBody>
                              <div>
                                <icmp_component />
                              </div>
                            </CardBody>
                        </Card>
                      </Col>
                      </Row>
                    </Card>
                    <Card className="card-management-evenoutline">
                      <CardHeader>
                        <CardTitle>
                          <h3>UDP Datagram</h3>
                        </CardTitle>
                      </CardHeader>
                    <Row>
                      <Col md="8">
                        <Card className="card-managementMini">
                            <CardBody>
                              <div>
                                <icmp_component />
                              </div>
                            </CardBody>
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

  export default network_monitoring;
