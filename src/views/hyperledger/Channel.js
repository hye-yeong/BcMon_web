import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import SortingTable from "../../components/SortingTable/SortingTable_.js";

let dataSource=[];
let url = "http://bcmon.kmu.ac.kr/hyperledger/data/channel";

//Get representative data
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
  urlData.send(null);
  return channelData;
}

function process(urlData){ // 프로세스를 부름
  var data = urlData.responseText; // get은 Text 방식으로, chartExample4
  var parseData = JSON.parse(data); //객체화 : 배열 처리
  var datasource = [];
  var temp_data = {};

  temp_data = parseData[0]["id"];
  datasource.push(JSON.stringify(temp_data));

  temp_data = parseData[0]["name"];
  datasource.push(temp_data);

  temp_data = parseData[0]["blocks"];
  datasource.push(JSON.stringify(temp_data));

  temp_data = parseData[0]["trans"];
  datasource.push(JSON.stringify(temp_data));

  temp_data = parseData[0]["createdt"];
  datasource.push(temp_data);

  return datasource;
}

class hyperledgerChannel extends React.Component {
  render() {
    dataSource=getData(url);    

    return (
      <>
        <div className="content">
        <h2 className="text-center">Hyperledger Channel<br /><br /></h2>
          <div className="content">
            <Row>
              <Col xm="12" md={{ size: 10, offset: 1 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                    </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <SortingTable
                        thead={[
                          { text: "ID" },
                          { className: "text-center", text: "Channel Name" },
                          { className: "text-center", text: "Blocks" },
                          { className: "text-center", text: "Transactions" },
                          { className: "text-center", text: "Timestamp" }
                        ]}                    
                        tbody={[
                          {
                            data: [
                              { text: dataSource[0] },
                              { className: "text-center", text: dataSource[1] },
                              { className: "text-center", text: dataSource[2] },
                              { className: "text-center", text: dataSource[3] },
                              { className: "text-center", text: dataSource[4] }
                            ]
                          }
                        ]}
                      />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default hyperledgerChannel;
