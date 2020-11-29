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
  try{
    xhr.send(null);
  }catch(e){
    return result;
  }

  return result;

  /*
  try {
    summaryChart.send(null);
  } catch (e) {
    return chart_result[num];
  }

  return chart_result[num];
  */
}

function process(in_value, out_value, title, caption, xhr){  // 프로세스를 부름
  var graphData = xhr.responseText;          // get은 Text 방식으로
  var parseData = JSON.parse(graphData);     //객체화 : 배열 처리

  var datasource = {};

  var label={};
  var Ivalue = {};
  var Ovalue = {};

  var temp_label_array = [];
  var temp_indata_array = [];
  var temp_outdata_array = [];

  label = {"category" : ""}
  Ivalue = {"serisename" : "in_value", "data":""}
  Ovalue = {"serisename" : "out_value", "data":""}

  for (var index = parseData.length-1; index >= 0; index--) {
    var data ={"label":""};
    var indata = {"label":"", "value":""};
    var outdata={"label":"", "value":""};

    data.label=parseData[index]["_id"];

    indata.label=parseData[index]["_id"];
    indata.value=parseData[index][in_value];

    outdata.label=parseData[index]["_id"];
    outdata.value=parseData[index][out_value];

    temp_label_array.push(data);
    temp_indata_array.push(indata);
    temp_outdata_array.push(outdata);
  };

  label.category=temp_label_array;
  Ivalue.data=temp_indata_array;
  Ovalue.data=temp_outdata_array;

  datasource = {
    "chart": {
      "labelDisplay": "none",
      "useEllipsesWhenOverflow":"0",
      "caption": title,
      "yaxisname": "",
      "xaxisname": "",
      "subcaption": caption,
      "numbersuffix": "0",
      "rotatelabels": "1",
      "drawAnchors": "0",
      "showLabels": "0",
      "palettecolors": "#17afb7, #b30710",       // 선 색상 변경 가능
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
      "tooltipBorderThickness": "0.5",
      "toolTipColor": "#FDFDFD",
      "baseFont": "",
      "baseFontSize": "5",
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

      legendNumColumns: "1",
      legendPosition: "RIGHT",
      defaultCenterLabel: "Total <br> $214",
      centerLabel: "$label<br>$value",
      centerLabelBold: "2",
      centerLabelFontSize: "20",
      enableRotation: "0",
      transposeAnimation: "1",
      "plotToolText": "<b>$label &nbsp;</b><b>$dataValue</b><div>"
  }
  ,
  "categories": [label],
  "dataset":[Ivalue, Ovalue]
};

console.log("LABEL-02-Ivalue: ")
console.log(Ivalue)

console.log("LABEL-02-Ovalue: ")
console.log(Ovalue)

console.log("DATASET-02-temp_indata_array: ")
console.log(temp_indata_array)

console.log("DATASET-02-temp_outdata_array: ")
console.log(temp_outdata_array)

console.log("DATATYPE-02: ")
//console.log(temp_data.toString())
//console.log(typeof temp_data)
//console.log(temp_indata.toString())
//console.log(typeof temp_indata)
//console.log(temp_outdata.toString())
//console.log(typeof temp_outdata)

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
