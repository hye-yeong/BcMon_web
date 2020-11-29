import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";

// core components
import month_ChartData from "../variables/charts_month.js";
import ReactFC from 'react-fusioncharts';
import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import Zoomline from "fusioncharts/fusioncharts.zoomline";
import Maps from "fusioncharts/fusioncharts.maps";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, charts, Zoomline, FusionTheme, Maps);
charts(FusionCharts);

// Representative Data
let representative_dataSource = [];
var representative_data = [];
let representative_data_url = [
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/block-height/value", 
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/block-nTransaction/value",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/difficulty/value",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/data/block-size/value",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/data/block-height/value",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/data/difficulty/value",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/data/block-size/value",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/data/gasUsed/value"
];
var representative_data_tag = [
  "height",
  "nTx",
  "difficulty",
  "size",
  "number",
  "difficulty",
  "size",
  "gasUsed"
];

// Charts Data
let chart_dataSource = [];
let chart_url = [
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/number-of-transaction/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/block/difficulty/month",
  "http://bcmon.kmu.ac.kr/coin-data/bitcoin/graphs/transaction/fee/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/transaction/number-of-transaction/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/block-size/total/month",
  "http://bcmon.kmu.ac.kr/coin-data/ethereum/graphs/block/number-of-uncles/total/month"
];
var chart_tag = [
  "value",
  "value",
  "value",
  "value",
  "value",
  "value"
];
var chart_title = [
  "Total number of transactions",
  "Difficulty",
  "Fee",
  "Total of number of transactions",
  "Total of Block Size",
  "Total of Number of Uncles"
];
var chart_caption = [
  "The total number of transactions per day.",
  "The average value of difficulty per day.",
  "The total transaction fee per day.",
  "The total of number of transactions per day",
  "The total of size of blocks per day",
  "The total of number of uncles per day"
];

//Get representative data
function getData(url, tag, num){
  representative_data[num] = new XMLHttpRequest(); // xhr은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  representative_data[num].open("get", url, false); // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  representative_data[num].onreadystatechange = function(){
      if(representative_data[num].readyState === 4){ // 통신 상태가 4 = 양호 확인
          if(representative_data[num].status === 200){ //status 가 200일 경우 아래 process; 로 진행
            representative_dataSource[num] = process(tag, num); // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
            representative_dataSource[num] = Math.floor(parseInt(representative_dataSource[num])) +"";
            //representative_dataSource[num] = parseInt(representative_dataSource[num]).toFixed(2) + "";
              return representative_dataSource[num];
          }else{
                alert("요청 실패:" + representative_data[num].status); // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
          }
      }
  }
  try {
    representative_data[num].send(null);
  } catch (e) {
    return representative_dataSource[num];
  }
  return representative_dataSource[num];
}

function process(tag, num){ // 프로세스를 부름
  var data = representative_data[num].responseText; // get은 Text 방식으로, chartExample4
  var parseData = JSON.parse(data); //객체화 : 배열 처리
  var datasource = "";
  var temp_data = {};

  temp_data = parseData[0][tag];
  datasource = JSON.stringify(temp_data);

  return datasource;
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  handleClick = () =>{
    for(var i = 0; i < representative_data_url.length; i++)
      representative_dataSource[i] = getData(representative_data_url[i], representative_data_tag[i], i);
  }

  render() {
    for(var i = 0; i < representative_data_url.length; i++)
      representative_dataSource[i] = getData(representative_data_url[i], representative_data_tag[i], i);
    for(i = 0; i < chart_url.length; i++)
      chart_dataSource[i] = month_ChartData.renderGraph(chart_url[i], chart_tag[i], chart_title[i], chart_caption[i], i);
    console.log("Get Main Data");

    return (
      <>
        <div className="content" >
          <p className="title">Bitcoin</p>
          <Row>
            <Col lg="3" md="5">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="4">
                      <img
                        vspace="5"
                        hspace="10"
                        width="50px"
                        height="50px"
                        alt="..."
                        src={require("../assets/img/total_node.png")}
                      />
                    </Col>
                    <Col xs="8">
                      <div className="numbers">
                        <p className="card-category">Total Height</p>
                          <CardTitle tag="h4">{representative_dataSource[0]}</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="4">
                      <img
                        vspace="5"
                        hspace="10"
                        width="auto"
                        height="40px"
                        alt="..."
                        src={require("../assets/img/tx.gif")}
                      />
                    </Col>
                    <Col xs="8">
                      <div className="numbers">
                        <p className="card-category">Number of Transaction</p>
                        <CardTitle tag="h4">{representative_dataSource[1]}</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="4">
                      <img
                        vspace="5"
                        hspace="10"
                        width="auto"
                        height="40px"
                        alt="..."
                        src={require("../assets/img/solution.png")}
                      />
                    </Col>
                    <Col xs="8">
                      <div className="numbers">
                        <p className="card-category">Difficulty</p>
                        <CardTitle tag="h4">
                          <small>
                            {representative_dataSource[2]}
                          </small>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="4">
                      <img
                        vspace="5"
                        hspace="10"
                        width="auto"
                        height="40px"
                        alt="..."
                        src={require("../assets/img/blockchain.png")}
                      />
                    </Col>
                    <Col xs="8">
                      <div className="numbers">
                        <p className="card-category">Block-size</p>
                        <CardTitle tag="h4">{representative_dataSource[3]}</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-mini">
                <Link to={"/admin/bitcoin/transaction/number-of-transaction/total"}>
                  <CardBody>
                    <div className="chart-area" >
                      <ReactFusioncharts
                        type="line"
                        className = "mychart"
                        width="100%"
                        height="300"
                        dataFormat="JSON"
                        dataSource={chart_dataSource[0]}
                      />
                    </div>
                  </CardBody>
                </Link>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-mini">
                <Link to={"/admin/bitcoin/blocks/difficulty/average/year"}>
                  <CardBody>
                    <div className="chart-area" >
                      <ReactFusioncharts
                        type="line"
                        className = "mychart"
                        width="100%"
                        height="300"
                        dataFormat="JSON"
                        dataSource={chart_dataSource[1]}
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
                    <div className="chart-area" >
                      <ReactFusioncharts
                        type="line"
                        className = "mychart"
                        width="100%"
                        height="300"
                        dataFormat="JSON"
                        dataSource={chart_dataSource[2]}
                      />
                    </div>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          </Row>
          <div className="content">
            <p>　</p>
          </div>
          <div className="content">
            <p className="title">Ethereum</p>
            <Row>
              <Col lg="3" md="5">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="4">
                        <img
                          vspace="5"
                          hspace="10"
                          width="50px"
                          height="50px"
                          alt="..."
                          src={require("../assets/img/total_node.png")}
                        />
                      </Col>
                      <Col xs="8">
                        <div className="numbers">
                          <p className="card-category">Total Height</p>
                          <CardTitle tag="h4">{representative_dataSource[4]}</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="4">
                        <img
                          vspace="5"
                          hspace="10"
                          width="auto"
                          height="40px"
                          alt="..."
                          src={require("../assets/img/solution.png")}
                        />
                      </Col>
                      <Col xs="8">
                        <div className="numbers">
                          <p className="card-category">Difficulty</p>
                          <CardTitle tag="h4">
                            <small>
                              {representative_dataSource[5]}
                            </small>
                          </CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="4">
                        <img
                          vspace="5"
                          hspace="10"
                          width="auto"
                          height="40px"
                          alt="..."
                          src={require("../assets/img/blockchain.png")}
                        />
                      </Col>
                      <Col xs="8">
                        <div className="numbers">
                          <p className="card-category">Block-size</p>
                          <CardTitle tag="h4">{representative_dataSource[6]}</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="4">
                        <img
                          vspace="5"
                          hspace="10"
                          width="auto"
                          height="40px"
                          alt="..."
                          src={require("../assets/img/Speedometer.png")}
                        />
                      </Col>
                      <Col xs="8">
                        <div className="numbers">
                          <p className="card-category">Gas Used</p>
                          <CardTitle tag="h4">{representative_dataSource[7]}</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Card className="card-mini">
                  <Link to={"/admin/ethereum/transaction/number-of-transactions/total/year"}>
                    <CardBody>
                      <div className="chart-area" >
                        <ReactFusioncharts
                            type="line"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={chart_dataSource[3]}
                          />
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-mini">
                  <Link to={"/admin/ethereum/network/difficulty/total/year"}>
                    <CardBody>
                      <div className="chart-area" >
                        <ReactFusioncharts
                            type="line"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={chart_dataSource[4]}
                          />
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-mini">
                  <Link to={"/admin/ethereum/blocks/size-of-block/total/year"}>
                    <CardBody>
                      <div className="chart-area" >
                        <ReactFusioncharts
                            type="line"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={chart_dataSource[5]}
                          />
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="content">
            <p>　</p>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
