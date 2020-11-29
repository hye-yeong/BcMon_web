var result_tableData;

function sleep (delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function renderTableData(url, limit){
  var get_nodeData = new XMLHttpRequest();      // get_nodeData은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  get_nodeData.open("get", url, false);         // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  // 값이 1이면 서버와의 연결이 성사됨
  get_nodeData.onreadystatechange = function(){
    console.log("onreadystatechange function");
      if(get_nodeData.readyState === 4){        // 통신 상태가 4 = 양호 확인
          if(get_nodeData.status === 200){      //status 가 200일 경우 아래 process; 로 진행
              result_tableData = getTableData(get_nodeData, limit);                     // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
              return result_tableData;
          }else{
                alert("Ethereum Node discovery 데이터 요청 실패:" + get_nodeData.status);  // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
          }
      }
  }
  try {
    get_nodeData.send(null);
  } catch (e) {
    return result_tableData;
  }

  return result_tableData;
}

function getTableData(get_nodeData, limit){
  const { getCode, getName } = require('country-list');

  var data = get_nodeData.responseText;
  var dataParse = JSON.parse(data);
  var dataObject = dataParse[0];

  var renderData = [];
  var tableDataList = [];
  var tableDataList_limit = 0;

  //var date_ = dataObject._id;
  renderData.push({'date': dataObject._id});
  var total_node = 0;

  delete dataObject._id;

  for (var key in dataObject){
    total_node = total_node + dataObject[key];
  }

  for (var key in dataObject){
    var country_node = {
      'country_code': key,
      'country_name': getName(key),
      'node_count': dataObject[key],
      'ratio': ((dataObject[key]/total_node)*100).toFixed(1)+"%"
    };
    tableDataList.push(country_node);
  }

  tableDataList.sort(function (a, b){
    return a.node_count > b.node_count ? -1 : a.node_count < b.node_count ? 1 :0;
  });

  if (limit >=1) {
    tableDataList_limit = tableDataList.slice(0,limit)
  }
  else {
    tableDataList_limit = tableDataList
  }

  renderData.push(tableDataList_limit);
  renderData.push({'total_node': total_node});
  renderData.push(dataObject);

  return renderData
}

module.exports = {
  sleep,
  renderTableData
};
