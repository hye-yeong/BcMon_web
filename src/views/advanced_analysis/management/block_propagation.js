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
let dataInfo = "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/advanced-analysis/cmpctblock_received_time"
var tag = "received_time"
var title = "Time to receive Compact Block"
var caption = "Time to receive the compact block of a single connected node"

charts(FusionCharts);

class cmpBlock extends React.Component {
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
                          { className: "text-center", text: "환경 구성" },
                          { text: "총 2개의 노드(Node1, Node2)로 구성, Node1은 비트코인 네트워크와 연결되어있고 Node2는 Node1과 단일연결되어있음"},
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "수집 정보" },
                          { text: "received cmpctblock time(startTime), partially downloaded block's hash, sucessfully reconstructed block time(endTime), information of cmpctblock" },
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "수집 방법" },
                          { text: "Node2의 로그파일에서 위의 수집 정보를 모두 수집, cmpblock을 수신 받은 후부터 재조립 되었을때까지 측정"},
                        ]
                      },
                      {
                        data: [
                          { className: "text-center", text: "분석 방법" },
                          { text: "endTIme - startTme = reveiveTime" },
                        ]
                      },
                    ]}
                  />
                  <p>* cmpctblock(compact block)</p>
                      <ul>
                        <li>압축 블록 전달 방식(BIP152 – CBR : Compact Block Relay)을 이용한 블록</li>
                        <li>CBR은 비트코인 P2P 네트워크의 풀노드가 새로운 블록을 전달할 때 사용하는 대역폭을 절약하는 방법</li>
                        <li>블록 전달 시, 블록 헤더 + 트랜잭션의 단축된 해시 ID 만 전송 하여 절약</li>
                        <li>cmpctblock을 받은 후 노드는 cmpctblock의 정보를 이용하여, 자신의 mempool 에서 transaction을 가져와 cmpctblock을 완전한 block으로 재조립.</li>
                      <p>&nbsp;</p>
                      </ul>
                    <p>* 수집 정보 상세 설명</p>
                      <ul>
                        <li>received cmpctblock time : cmpctblock을 받은 시간</li>
                        <li>partially downloaded block'' hash : mempool에서 transaction을 가져와 받을 때, 어떤 블록인지 hash로 표현</li>
                        <li>sucessfully reconstructed block time : cmpctblock이 완전한 block으로 재조립된 시간. (cmpctblock이 완성된 시간)</li>
                        <li>information of cmpctblock : UpdateTip 로그. hash, height, version, log2_work, date, progress, cache의 데이터를 포함</li>
                      </ul>
                  <p>&nbsp;</p>
                  <p>** Hash(Block Hash/블록 해시) : 기본적으로 블록체인의 블록에 대한 참조 번호로, SHA256을 통해 블록 헤더를 두 번 hashing하여 얻음</p>
                  <p>** Mempool(멤풀) : 노드에 의해 검증되지 않은(블록에 아직 포함되지 못한) transaction들 이 저장 되는 공간</p>
                  <p>** Transaction(트랜잭션): 비트코인 네트워크에서 비트코인 거래를 표현하기 위한 데이터 구조(거래 내역으로 생각할 수 있음), 비트코인 네트워크를 통해서 연결된 피어(peer) 노드들에게 전파되며, 블록체인 내에 영구적으로 보관되어짐</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default cmpBlock;
