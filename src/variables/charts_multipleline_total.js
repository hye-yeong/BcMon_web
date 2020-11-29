let result; //zoom in zoom out chart data

function sleep (delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

//render zoom in zoom out graph
function renderZoomChart(url, in_value, out_value, title, caption){
  var xhr = new XMLHttpRequest(); // xhr은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  xhr.open("get", url, false); // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){ // 통신 상태가 4 = 양호 확인
          if(xhr.status === 200){ //status 가 200일 경우 아래 process; 로 진행
              result = process(in_value, out_value, title, caption, xhr); // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
              return result;
          }else{
                alert(title+"그래프 데이터 요청 실패:" + xhr.status); // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
          }
      }
  }
  xhr.send(null);
  return result;
}

function process(in_value, out_value, title, caption, xhr){  // 프로세스를 부름
  var data = xhr.responseText;          // get은 Text 방식으로
  var parseData = JSON.parse(data);     //객체화 : 배열 처리

  var datasource = {};
  var label = {};
  var Ivalue = {};
  var Ovalue = {};

  var temp_key = "";
  var temp_inValue = "";
  var temp_outValue="";

  label = {"category" : ""}
  Ivalue = {"serisename" : "in_value", "data" : "" }
  Ovalue = {"serisename" : "out_value", "data" : "" }

  for(var index = 0; index<parseData.length; index++) {
    temp_key += parseData[index]._id + '|';
    temp_inValue += parseData[index][in_value] + '|';
    temp_outValue += parseData[index][out_value] + '|';
  };

  temp_key = temp_key.slice(0, -1);
  temp_inValue = temp_inValue.slice(0, -1);
  temp_outValue = temp_outValue.slice(0, -1);

  label.category = temp_key;
  Ivalue.data = temp_inValue;
  Ovalue.data = temp_outValue;

  datasource = {
  "chart": {
    "caption": title,
    "yaxisname": "Value",
    "xaxisname": "Day",
    "subcaption": caption,
    "numbersuffix":"",
    "forceaxislimits": "1",
    "pixelsperpoint": "0",
    "pixelsperlabel": "30",
    "compactdatamode": "1",
    "dataseparator": "|",
    "palettecolors": "#17afb7, #b30710",       // 선 색상 변경 가능
    "labelDisplay":"auto",
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
    "yaxisvaluesstep":"0",

    "legendNumColumns": "1",
    "legendPosition": "RIGHT",
    "defaultCenterLabel": "Total <br> $214",
    "centerLabel": "$label<br>$value",
    "centerLabelBold": "1",
    "centerLabelFontSize": "20",
    "enableRotation": "0",
    "transposeAnimation": "1",
    "showhovereffect": "1",
    "drawcrossline": "1",
    "plotToolText": "<b>$dataValue</b>$dataValue<div>"
  }
  ,
    "categories": [label],
    "dataset": [Ivalue,Ovalue]
};

console.log("LABEL-02: ")
console.log(temp_key)

console.log("DATASET-02: ")
console.log(temp_inValue)

console.log("DATASET-02: ")
console.log(temp_inValue)

console.log("DATA-02: ")
console.log(temp_outValue)

console.log("DATATYPE-02: ")
console.log(temp_key.toString())
console.log(typeof temp_key)
console.log(temp_inValue.toString())
console.log(typeof temp_inValue)
console.log(temp_outValue.toString())
console.log(typeof temp_outValue)

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
