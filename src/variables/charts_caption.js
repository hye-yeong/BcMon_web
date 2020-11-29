//x축, y축 값 변경
let result; //zoom in zoom out chart data

function sleep (delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

//render zoom in zoom out graph
function renderZoomChart(url, tag, title, yName, xName, caption){
  var xhr = new XMLHttpRequest(); // xhr은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  xhr.open("get", url, false); // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){ // 통신 상태가 4 = 양호 확인
          if(xhr.status === 200){ //status 가 200일 경우 아래 process; 로 진행
              result = process(tag, title, yName, xName,caption, xhr); // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
              return result;
          }else{
                alert(title+"그래프 데이터 요청 실패:" + xhr.status); // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
          }
      }
  }
  xhr.send(null);
  return result;
}

function process(tag, title, yName, xName, caption, xhr){  // 프로세스를 부름
  var data = xhr.responseText;          // get은 Text 방식으로
  var parseData = JSON.parse(data);     //객체화 : 배열 처리

  var datasource = {};
  var label = {};
  var value = {};

  var temp_key = "";
  var temp_value = "";

  label = {"category" : ""}
  value = {"serisename" : "test", "data" : "" }

  console.log("LABEL-01: ")
  console.log(temp_key)
  console.log("DATASET-01: ")
  console.log(temp_value)
  console.log("json original : ")
  console.log(parseData)

  try {
    if(parseData.length < 366) {
      for(var i = parseData.length-1; i >=0; i--) {
        temp_key += parseData[i]._id + '|';
        temp_value += parseData[i][tag] + '|';
      };
    }
    else {
      for(var index = parseData.length-1; index > parseData.length-366; index--) {
        temp_key += parseData[index]._id + '|';
        temp_value += parseData[index][tag] + '|';
      };
    }
  } catch (e) {
    return datasource;
  }

  temp_key = temp_key.slice(0, -1);
  temp_value = temp_value.slice(0, -1);

  label.category = temp_key;
  value.data = temp_value;

  datasource = {
  "chart": {
    "caption": title,
    "yaxisname": yName,
    "xaxisname": xName,
    "subcaption": caption,
    "forceaxislimits": "1",
    "pixelsperpoint": "0",
    "pixelsperlabel": "30",
    "compactdatamode": "1",
    "theme": "fusion",

    "numberscalevalue": "1000,1000,1000,1000,1000",
    "numberscaleunit": "K,M,G,T,P",

    "showBorder": "0",
    "showShadow": "0",
    //use3DLighting: "0",
    "bgColor": "#27293d",
    //bgAlpha: "0",
    "canvasBgAlpha": "0",
    "plotBorderAlpha": "0",

    "toolTipBgcolor": "#484E69",
    //toolTipPadding: "7",
    "tooltipBorderThickness": "0.7",
    "toolTipColor": "#FDFDFD",
    "baseFont": "",
    "baseFontSize": "10",
    "baseFontColor": "#FDFDFD",

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
    "centerLabelBold": "1",
    "centerLabelFontSize": "20",
    "enableRotation": "0",
    "transposeAnimation": "1",
    "plotToolText": "<div>$label<br>$dataValue<div>"
  }
  ,
    "categories": [label],
    "dataset": [value]
};

console.log("LABEL-02: ")
console.log(temp_key)

console.log("DATASET-02: ")
console.log(temp_value)

console.log("DATA-02: ")
console.log(datasource)

console.log("DATATYPE-02: ")
console.log(temp_key.toString())
console.log(typeof temp_key)
console.log(temp_value.toString())
console.log(typeof temp_value)

console.log("DATATEXT-02: ")
console.log(datasource)

console.log(JSON.stringify(datasource))
console.log(typeof datasource)

return datasource;
}

module.exports = {
  sleep,
  renderZoomChart,
};
