// 요약 그래프 출력
var chart_result = [];

function sleep (delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

//render line 2d graph
function renderGraph(url, tag, title, caption, num){
  var summaryChart = new XMLHttpRequest(); // summaryChart은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  summaryChart.open("get", url, false); // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  // 값이 1이면 서버와의 연결이 성사됨
  summaryChart.onreadystatechange = function(){
    console.log("onreadystatechange function");
      if(summaryChart.readyState === 4){ // 통신 상태가 4 = 양호 확인
          if(summaryChart.status === 200){ //status 가 200일 경우 아래 process; 로 진행
              chart_result[num] = getGraphData(tag, title, caption, summaryChart); // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
              return chart_result[num];
          }else{
                alert(title+"그래프 데이터 요청 실패:" + summaryChart.status); // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
          }
      }
  }
  try {
    summaryChart.send(null);
  } catch (e) {
    return chart_result[num];
  }

  return chart_result[num];
}

function getGraphData(tag, title, caption, summaryChart){ // 프로세스를 부름
  var data = summaryChart.responseText; // get은 Text 방식으로
  var parseData = JSON.parse(data); //객체화 : 배열 처리

  var datasource = {};

  var temp_data_array = [];
  var temp_data = JSON.stringify(parseData);

  if(parseData.length > 50){
   for (var index = 50; index >= 0; index--) {
     temp_data_array.push(parseData[index]);
    };
  }
  else{
    for (var index = parseData.length-1; index >= 0; index--) {
      temp_data_array.push(parseData[index]);
     };
  }
    temp_data = JSON.stringify(temp_data_array);

   for (var i = 0; i < temp_data_array.length; i++) {
      temp_data = temp_data.replace("_id", "label");
      temp_data = temp_data.replace(tag, "value");
    };
  temp_data = JSON.parse(temp_data);

  // 그래프 선이 출력되는 부분 코드
  datasource = {
  "chart": {
    "caption": title,
    "yaxisname": "",
    "xaxisname": "",
    "subcaption": caption,
    "numbersuffix": "",
    "rotatelabels": "1",
    "drawAnchors": "0",
    "showLabels": "0",
    "palettecolors": "#17afb7",       // 선 색상 변경 가능
    "setadaptiveymin": "1",
    "linethickness": "3",
    "theme": "fusion",

    "numberscalevalue": "1000,1000,1000,1000,1000",
    "numberscaleunit": "K,M,G,T,P",

    "showBorder": "0",
    "showShadow": "0",
    //use3DLighting: "0",
    "bgColor": "#25263b",
    //bgAlpha: "0",
    "canvasBgAlpha": "0",
    "plotBorderAlpha": "0",

    "toolTipBgcolor": "#484E69",
    //toolTipPadding: "7",
    "tooltipBorderThickness": "0.7",
    "toolTipColor": "#FDFDFD",
    "baseFont": "",
    "baseFontSize": "10",
    "baseFontColor": "ededf0",

    "showLegend": "1",
    "legendShadow": "0",
    "legendBorderAlpha": "0",
    "drawCustomLegendIcon": "1",
    "legendBgAlpha": "0",

    "showAlternateHGridColor": "0",
    // chartTopMargin: "-10",
    // canvasTopMargin: "-10",
    // chartBottomMargin: "20",
    // canvasBottomMargin: "20",

    "legendNumColumns": "1",
    "legendPosition": "RIGHT",
    "defaultCenterLabel": "Total <br> $214",
    "centerLabel": "$label<br>$value",
    "centerLabelBold": "2",
    "centerLabelFontSize": "20",
    "enableRotation": "0",
    "transposeAnimation": "1",
    "plotToolText": "<div>$label<br>$dataValue<div>"
  }
  ,
    data: temp_data
};

return datasource;
}

module.exports = {
  sleep,
  renderGraph
};
