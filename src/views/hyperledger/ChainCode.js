import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap";
import SortingTable from "../../components/SortingTable/SortingTable_.js";

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
let tableDataSource = [];
let url = [
  "http://bcmon.kmu.ac.kr/hyperledger/graphs/chaincode",
  "http://bcmon.kmu.ac.kr/hyperledger/data/chaincode"
];
var tag = "txcount";
var title = "chaincode";
var caption = "mycc chaincode";

function getData(url){
  var urlData = new XMLHttpRequest(); // xhr은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  var channelData=[];
  urlData.open("get", url, false); // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  urlData.onreadystatechange = function(){
      if(urlData.readyState === 4){ // 통신 상태가 4 = 양호 확인
          if(urlData.status === 200){ //status 가 200일 경우 아래 process; 로 진행
            channelData = process(urlData); // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
            //representative_dataSource[num] = parseInt(representative_dataSource[num]).toFixed(2) + "";
              return channelData
          }else{
                alert("요청 실패:" + urlData.status); // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
          }
      }
  }

  try {
    urlData.send(null);
  } catch (e) {
    return channelData;
  }
  return channelData;
}

function process(urlData){ // 프로세스를 부름
  var data = urlData.responseText; // get은 Text 방식으로, chartExample4
  var parseData = JSON.parse(data); //객체화 : 배열 처리

  var datasource_ = [];
  var temp_data = {};

  for(var index=0; index<parseData.length;index++){
    temp_data = parseData[index]["name"];
    datasource_.push(temp_data);
  
    temp_data = parseData[index]["chaincode_name"];
    datasource_.push(temp_data);
  
    temp_data = parseData[index]["path"];
    datasource_.push(temp_data);
  
    temp_data = parseData[index]["txcount"];
    datasource_.push(temp_data); 

    temp_data = parseData[index]["version"];
    datasource_.push(temp_data); 
  }
  return datasource_;
}

class hyperledgerChainCode extends React.Component {
  render() {
    dataSource[0] = chartData.renderGraph(url[0], tag, title, caption, 0);
    tableDataSource=getData(url[1]); 
  
    return (
      <>
        <div className="content">
          <h2 className="text-center">Hyperledger Chaincode</h2>
          <div className="content">
            <Card className="card-firstoutline">
              <CardHeader>
                <CardTitle>
                </CardTitle>
              </CardHeader>
              <Row>
                <Col lg="3">
                  <Card className="card-mini">
                    <CardBody>
                      <div className="chart-area" >
                        <ReactFusioncharts
                            type="column2d"
                            className = "mychart"
                            width="100%"
                            height="300"
                            dataFormat="JSON"
                            dataSource={dataSource[0]}
                          />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="9">
                <Card>
                  <CardHeader>
                    <h4 font-weight="500">Chacode Detail Data </h4>
                  </CardHeader>
                  <CardBody>
                     <SortingTable
                        thead={[
                          { text: "Chaincode Name" },
                          { className: "text-center", text: "Channel Name" },
                          { className: "text-center", text: "Path" },
                          { className: "text-center", text: "Transaction Count" },
                          { className: "text-center", text: "Version" },
                        ]}                    
                        tbody={[
                          {
                            data: [
                              { text: tableDataSource[0] },
                              { className: "text-center", text: tableDataSource[1] },
                              { className: "text-center", text: tableDataSource[2] },
                              { className: "text-center", text: tableDataSource[3] },
                              { className: "text-center", text: tableDataSource[4] },
                            ]
                          }
                        ]}
                      />
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




export default hyperledgerChainCode;
