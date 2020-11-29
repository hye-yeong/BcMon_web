// 단순히 참고 자료로만 사용 할 것.
var xhr;
var chart_result = new Array();
let result; //zoom in zoom out chart data

function sleep (delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

//render zoom in zoom out graph
function renderZoomChart(url, tag, title, caption){
  xhr = new XMLHttpRequest(); // xhr은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  xhr.open("get", url, false); // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){ // 통신 상태가 4 = 양호 확인
          if(xhr.status === 200){ //status 가 200일 경우 아래 process; 로 진행
              result = process(tag, title, caption); // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
              console.log("결과 : ");
              console.log(result);
              return result;
          }else{
                alert("요청 실패:" + xhr.status); // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
          }
      }
  }
  xhr.send(null);
  return result;
}

function process(tag, title, caption){ // 프로세스를 부름
  var data = xhr.responseText; // get은 Text 방식으로
  var parseData = JSON.parse(data); //객체화 : 배열 처리

  var datasource = new Object();
  var label = new Object();
  var value = new Object();

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
      for(var i = parseData.length-1; i > 0; i--) {
        temp_key += parseData[i]._id + '|';
        temp_value += parseData[i][tag] + '|';
      };
    }

    else {
      for(var i = parseData.length-1; i > parseData.length-366; i--) {
        temp_key += parseData[i]._id + '|';
        temp_value += parseData[i][tag] + '|';
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
    "yaxisname": "Value",
    "xaxisname": "Day",
    "subcaption": caption,
    "forceaxislimits": "1",
    "pixelsperpoint": "0",
    "pixelsperlabel": "30",
    "compactdatamode": "1",
    "theme": "fusion",

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
    "plotToolText": "<div>$label<br>$dataValue ($percentValue)<div>"
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

//render line 2d graph
function renderGraph(url, tag, title, caption, num){
  var summaryChart = new XMLHttpRequest(); // xhr은 XMLHttpRequest 객체(http를 통해 데이터를 받음)
  var currentState = "";
  summaryChart.open("get", url, false); // tx합 json 데이터를 을 비동기 방식  / get 방식으로 읽어들임
  // 값이 1이면 서버와의 연결이 성사됨
  console.log("summaryChart state");
  console.log(summaryChart.readyState);

  summaryChart.onreadystatechange = function(){
    console.log("onreadystatechange function");
      if(summaryChart.readyState === 4){ // 통신 상태가 4 = 양호 확인
          if(summaryChart.status === 200){ //status 가 200일 경우 아래 process; 로 진행
              chart_result[num] = getGraphData(tag, title, caption, summaryChart); // 프로세스를 부르겠다는 의미 >> 아래 function process로 진행
              return chart_result[num];
          }else{
                alert("요청 실패:" + summaryChart.status); // if의 내용이 실패시 요청 실패 : 오류 메시지 출력
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

  var datasource = new Object();

  var temp_data_array = new Array();
  var temp_data = new Object();
  temp_data = JSON.stringify(parseData);

  console.log("abstract temp data 01: ")
  console.log(temp_data)
  console.log("abstract json original : ")
  console.log(parseData)


  // for (var i = 0; i < parseData.length; i++) {
  //   temp_data = temp_data.replace("_id", "label");
  //   temp_data = temp_data.replace(tag, "value");
  // };

  //temp_data = JSON.parse(temp_data);

   for (var i = parseData.length-1; i >= 0; i--) {
    temp_data_array.push(parseData[i]);
    };

    temp_data = JSON.stringify(temp_data_array);

   for (var i = 0; i < parseData.length; i++) {
      temp_data = temp_data.replace("_id", "label");
      temp_data = temp_data.replace(tag, "value");
    };

  temp_data = JSON.parse(temp_data);


  console.log("abstract temp data 02: ");
  console.log(JSON.stringify(temp_data_array));

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
      "palettecolors": "00b0f0",
      "setadaptiveymin": "1",
      "linethickness": "3",
      "theme": "fusion",

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

      legendNumColumns: "1",
      legendPosition: "RIGHT",
      defaultCenterLabel: "Total <br> $214",
      centerLabel: "$label<br>$value",
      centerLabelBold: "1",
      centerLabelFontSize: "20",
      enableRotation: "0",
      transposeAnimation: "1",
      plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>"
  }
  ,
    data: temp_data
};

console.log("abstract temp data 03: ")
console.log(temp_data)

console.log("abstract data: ")
console.log(datasource)

console.log("abstract temp DATATYPE-02: ")
console.log(temp_data.toString())
console.log(typeof temp_data)

console.log("abstract temp DATATEXT-02: ")
console.log(datasource)

console.log(JSON.stringify(datasource))
console.log(typeof datasource)

return datasource;
}

const node_distribution = {
  chart: {
    caption: "Worldwide CO₂ emissions - 2016",
    subcaption: "Measured in tonnes per year",
    captionalignment: "left",
    theme: "fusion",
    formatnumberscale: "0",
    numbersuffix: " tonns per capita",
    entityfillhovercolor: "#E5E5E9",
    entitytooltext:
      "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lname</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
  },
  colorrange: {
    startlabel: "Low",
    endlabel: "High",
    code: "#D7DDFF",
    minvalue: "0",
    gradient: "1",
    color: [
      {
        maxvalue: "150",
        displayvalue: "Average",
        code: "#828FD6"
      },
      {
        maxvalue: "300",
        code: "#36469F"
      }
    ]
  },
  data: [
    {
      id: "NA",
      value: "57.2",
      link: "newchart-json-NA"
    },
    {
      id: "SA",
      value: "57.1",
      link: "newchart-json-SA"
    },
    {
      id: "AS",
      value: "247",
      link: "newchart-json-AS"
    },
    {
      id: "EU",
      value: "188.5",
      link: "newchart-json-EU"
    },
    {
      id: "AF",
      value: "87.2",
      link: "newchart-json-AF"
    },
    {
      id: "AU",
      value: "8.32",
      link: "newchart-json-AU"
    }
  ],
  linkeddata: [
    {
      id: "NA",
      linkedchart: {
        chart: {
          caption: "North America Worldwide CO₂ emissions - 2016",
          subcaption: "Measured in tonnes per year",
          numbersuffix: " tonns per capita",
          captionalignment: "left",
          theme: "fusion",
          formatnumberscale: "0",
          entityfillhovercolor: "#E5E5E9",
          entitytooltext:
            "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px;color:black'>$value tonns per capita</div>"
        },
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          gradient: "1",
          color: [
            {
              maxvalue: 18,
              displayvalue: "Average",
              code: "#828FD6"
            },
            {
              maxvalue: 36,
              code: "#36469F"
            }
          ]
        },
        data: [
          {
            id: "001",
            value: 5.547
          },
          {
            id: "002",
            value: 6.518
          },
          {
            id: "003",
            value: 4.702
          },
          {
            id: "004",
            value: 1.417
          },
          {
            id: "005",
            value: 15.515
          },
          {
            id: "026",
            value: 9.38
          },
          {
            id: "006",
            value: 1.682
          },
          {
            id: "007",
            value: 3.2
          },
          {
            id: "008",
            value: 2.119
          },
          {
            id: "009",
            value: 2.119
          },
          {
            id: "010",
            value: 1.043
          },
          {
            id: "024",
            value: 9.611
          },
          {
            id: "011",
            value: 2.423
          },
          {
            id: "012",
            value: 1.164
          },
          {
            id: "013",
            value: 0.278
          },
          {
            id: "014",
            value: 1.095
          },
          {
            id: "015",
            value: 2.717
          },
          {
            id: "016",
            value: 3.645
          },
          {
            id: "017",
            value: 0.834
          },
          {
            id: "018",
            value: 2.293
          },
          {
            id: "025",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "019",
            value: 4.378
          },
          {
            id: "020",
            value: 2.416
          },
          {
            id: "021",
            value: 2.007
          },
          {
            id: "022",
            value: 30.059
          },
          {
            id: "023",
            value: 16.438
          }
        ]
      }
    },
    {
      id: "SA",
      linkedchart: {
        chart: {
          caption: "South America CO₂ emissions - 2016",
          subcaption: "Measured in tonnes per year",
          captionalignment: "left",
          theme: "fusion",
          formatnumberscale: "0",
          showlabels: "0",
          numbersuffix: " tonns per capita",
          entityfillhovercolor: "#E5E5E9",
          entitytooltext:
            "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
        },
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          gradient: "1",
          color: [
            {
              maxvalue: 5,
              displayvalue: "Average",
              code: "#828FD6"
            },
            {
              maxvalue: 10,
              code: "#36469F"
            }
          ]
        },
        data: [
          {
            id: "001",
            value: 4.764
          },
          {
            id: "002",
            value: 1.938
          },
          {
            id: "003",
            value: 2.347
          },
          {
            id: "004",
            value: 4.868
          },
          {
            id: "005",
            value: 1.739
          },
          {
            id: "006",
            value: 2.464
          },
          {
            id: "007",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "008",
            value: 2.829
          },
          {
            id: "015",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "009",
            value: 2.754
          },
          {
            id: "010",
            value: 0.894
          },
          {
            id: "011",
            value: 2.133
          },
          {
            id: "016",
            value: 2.525
          },
          {
            id: "012",
            value: 3.761
          },
          {
            id: "013",
            value: 2.064
          },
          {
            id: "014",
            value: 5.601
          }
        ]
      }
    },
    {
      id: "AS",
      linkedchart: {
        chart: {
          caption: "Asia CO₂ emissions - 2016",
          subcaption: "Measured in tonnes per year",
          captionalignment: "left",
          theme: "fusion",
          formatnumberscale: "0",
          showlabels: "0",
          numbersuffix: " tonns per capita",
          entityfillhovercolor: "#E5E5E9",
          entitytooltext:
            "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
        },
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          gradient: "1",
          color: [
            {
              maxvalue: "25",
              displayvalue: "Average",
              code: "#828FD6"
            },
            {
              maxvalue: "50",
              code: "#36469F"
            }
          ]
        },
        data: [
          {
            id: "001",
            value: 0.338
          },
          {
            id: "002",
            value: 1.966
          },
          {
            id: "003",
            value: 4.119
          },
          {
            id: "060",
            value: 24.509
          },
          {
            id: "005",
            value: 0.506
          },
          {
            id: "006",
            value: 1.416
          },
          {
            id: "007",
            value: 23.701
          },
          {
            id: "008",
            value: 0.46
          },
          {
            id: "009",
            value: 0.48
          },
          {
            id: "010",
            value: 7.363
          },
          {
            id: "012",
            value: 0.418
          },
          {
            id: "013",
            value: 2.525
          },
          {
            id: "050",
            value: 5.914
          },
          {
            id: "014",
            value: 1.836
          },
          {
            id: "015",
            value: 1.918
          },
          {
            id: "016",
            value: 8.17
          },
          {
            id: "054",
            value: 4.529
          },
          {
            id: "063",
            value: 7.776
          },
          {
            id: "019",
            value: 9.521
          },
          {
            id: "062",
            value: 2.734
          },
          {
            id: "021",
            value: 13.011
          },
          {
            id: "022",
            value: 1.993
          },
          {
            id: "023",
            value: 11.618
          },
          {
            id: "061",
            value: 25.813
          },
          {
            id: "025",
            value: 1.662
          },
          {
            id: "026",
            value: 0.309
          },
          {
            id: "064",
            value: 3.934
          },
          {
            id: "051",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "028",
            value: 8.492
          },
          {
            id: "030",
            value: 8.634
          },
          {
            id: "031",
            value: 0.315
          },
          {
            id: "057",
            value: 15.09
          },
          {
            id: "033",
            value: 0.978
          },
          {
            id: "034",
            value: 1.242
          },
          {
            id: "059",
            value: 47.829
          },
          {
            id: "036",
            value: 11.325
          },
          {
            id: "055",
            value: 19.655
          },
          {
            id: "038",
            value: 11.171
          },
          {
            id: "039",
            value: 0.998
          },
          {
            id: "053",
            value: 1.716
          },
          {
            id: "049",
            value: 11.146
          },
          {
            id: "041",
            value: 0.625
          },
          {
            id: "042",
            value: 4.753
          },
          {
            id: "052",
            value: 5.08
          },
          {
            id: "044",
            value: 13.473
          },
          {
            id: "058",
            value: 25.794
          },
          {
            id: "046",
            value: 3.418
          },
          {
            id: "047",
            value: 2.013
          },
          {
            id: "056",
            value: 0.819
          }
        ]
      }
    },
    {
      id: "EU",
      linkedchart: {
        chart: {
          caption: "Europe CO₂ emissions - 2016",
          subcaption: "Measured in tonnes per year",
          captionalignment: "left",
          theme: "fusion",
          formatnumberscale: "0",
          showlabels: "0",
          numbersuffix: " tonns per capita",
          entityfillhovercolor: "#E5E5E9",
          entitytooltext:
            "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
        },
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          gradient: "1",
          color: [
            {
              maxvalue: "9",
              displayvalue: "Average",
              code: "#828FD6"
            },
            {
              maxvalue: "18",
              code: "#36469F"
            }
          ]
        },
        data: [
          {
            id: "001",
            value: 2.093
          },
          {
            id: "002",
            value: 6.34
          },
          {
            id: "003",
            value: 7.747
          },
          {
            id: "004",
            value: 6.345
          },
          {
            id: "005",
            value: 8.922
          },
          {
            id: "006",
            value: 6.657
          },
          {
            id: "007",
            value: 6.35
          },
          {
            id: "008",
            value: 4.405
          },
          {
            id: "044",
            value: 6.042
          },
          {
            id: "009",
            value: 9.952
          },
          {
            id: "010",
            value: 6.536
          },
          {
            id: "011",
            value: 12.184
          },
          {
            id: "012",
            value: 8.262
          },
          {
            id: "013",
            value: 5.134
          },
          {
            id: "014",
            value: 9.696
          },
          {
            id: "015",
            value: 6.614
          },
          {
            id: "016",
            value: 4.893
          },
          {
            id: "017",
            value: 10.232
          },
          {
            id: "018",
            value: 8.437
          },
          {
            id: "019",
            value: 5.928
          },
          {
            id: "047",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "020",
            value: 3.8
          },
          {
            id: "021",
            value: 4.248
          },
          {
            id: "022",
            value: 4.578
          },
          {
            id: "023",
            value: 16.467
          },
          {
            id: "024",
            value: 3.805
          },
          {
            id: "025",
            value: 4.165
          },
          {
            id: "026",
            value: 1.453
          },
          {
            id: "027",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "028",
            value: 3.757
          },
          {
            id: "029",
            value: 9.897
          },
          {
            id: "030",
            value: 8.597
          },
          {
            id: "031",
            value: 8.406
          },
          {
            id: "032",
            value: 4.902
          },
          {
            id: "033",
            value: 3.966
          },
          {
            id: "046",
            value: 11.325
          },
          {
            id: "034",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "035",
            value: 5.614
          },
          {
            id: "036",
            value: 6.281
          },
          {
            id: "037",
            value: 6.722
          },
          {
            id: "038",
            value: 5.621
          },
          {
            id: "039",
            value: 4.581
          },
          {
            id: "040",
            value: 4.504
          },
          {
            id: "045",
            value: 5.08
          },
          {
            id: "041",
            value: 5.365
          },
          {
            id: "042",
            value: 5.933
          },
          {
            id: "043",
            value: 0,
            tooltext: "No Data Available"
          }
        ]
      }
    },
    {
      id: "AU",
      linkedchart: {
        chart: {
          caption: "Australia CO₂ emissions - 2016",
          subcaption: "Measured in tonnes per year",
          captionalignment: "left",
          theme: "fusion",
          formatnumberscale: "0",
          showlabels: "0",
          numbersuffix: " tonns per capita",
          entityfillhovercolor: "#E5E5E9",
          entitytooltext:
            "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
        },
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          gradient: "1",
          color: [
            {
              maxvalue: "1",
              displayvalue: "Average",
              code: "#828FD6"
            },
            {
              maxvalue: "2",
              code: "#36469F"
            }
          ]
        },
        data: [
          {
            id: "SW",
            value: 2
          },
          {
            id: "NT",
            value: 1.5
          },
          {
            id: "QU",
            value: 0.5
          },
          {
            id: "SA",
            value: 1.5
          },
          {
            id: "TA",
            value: 0.45
          },
          {
            id: "VI",
            value: 0.2
          },
          {
            id: "WA",
            value: 0.7
          }
        ]
      }
    },
    {
      id: "AF",
      linkedchart: {
        chart: {
          caption: "Africa CO₂ emissions - 2016",
          subcaption: "Measured in tonnes per year",
          captionalignment: "left",
          theme: "fusion",
          formatnumberscale: "0",
          showlabels: "0",
          numbersuffix: "tonns per capita",
          entityfillhovercolor: "#E5E5E9",
          entitytooltext:
            "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
        },
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          gradient: "1",
          color: [
            {
              maxvalue: "5",
              displayvalue: "Average",
              code: "#828FD6"
            },
            {
              maxvalue: "10",
              code: "#36469F"
            }
          ]
        },
        data: [
          {
            id: "001",
            value: 3.787
          },
          {
            id: "002",
            value: 1.24
          },
          {
            id: "003",
            value: 0.602
          },
          {
            id: "004",
            value: 2.955
          },
          {
            id: "005",
            value: 0.159
          },
          {
            id: "006",
            value: 0.044
          },
          {
            id: "007",
            value: 0.317
          },
          {
            id: "059",
            value: 0,
            tooltext: "No Data Available"
          },
          {
            id: "008",
            value: 0.945
          },
          {
            id: "009",
            value: 0.067
          },
          {
            id: "010",
            value: 0.053
          },
          {
            id: "057",
            value: 0.638
          },
          {
            id: "012",
            value: 0.5
          },
          {
            id: "013",
            value: 0.062
          },
          {
            id: "014",
            value: 0.796
          },
          {
            id: "015",
            value: 2.259
          },
          {
            id: "016",
            value: 4.765
          },
          {
            id: "017",
            value: 0.144
          },
          {
            id: "018",
            value: 0.116
          },
          {
            id: "019",
            value: 2.733
          },
          {
            id: "056",
            value: 0.26
          },
          {
            id: "020",
            value: 0.538
          },
          {
            id: "021",
            value: 0.206
          },
          {
            id: "022",
            value: 0.154
          },
          {
            id: "023",
            value: 0.301
          },
          {
            id: "024",
            value: 1.021
          },
          {
            id: "025",
            value: 0.21
          },
          {
            id: "026",
            value: 9.567
          },
          {
            id: "027",
            value: 0.121
          },
          {
            id: "028",
            value: 0.071
          },
          {
            id: "029",
            value: 0.082
          },
          {
            id: "030",
            value: 0.656
          },
          {
            id: "058",
            value: 3.253
          },
          {
            id: "032",
            value: 1.691
          },
          {
            id: "033",
            value: 0.304
          },
          {
            id: "034",
            value: 1.573
          },
          {
            id: "035",
            value: 0.104
          },
          {
            id: "036",
            value: 0.55
          },
          {
            id: "038",
            value: 0.073
          },
          {
            id: "040",
            value: 0.6
          },
          {
            id: "041",
            value: 0.584
          },
          {
            id: "042",
            value: 5.492
          },
          {
            id: "043",
            value: 0.184
          },
          {
            id: "044",
            value: 0.045
          },
          {
            id: "045",
            value: 8.365
          },
          {
            id: "060",
            value: 0.128
          },
          {
            id: "046",
            value: 0.128
          },
          {
            id: "047",
            value: 0.871
          },
          {
            id: "048",
            value: 0.217
          },
          {
            id: "049",
            value: 0.356
          },
          {
            id: "051",
            value: 2.725
          },
          {
            id: "052",
            value: 0.129
          },
          {
            id: "011",
            value: 0.201
          },
          {
            id: "053",
            value: 0,
            tooltext: "No Data available"
          },
          {
            id: "054",
            value: 0.275
          },
          {
            id: "055",
            value: 0.69
          }
        ]
      }
    }
  ]
};


let chartExample1;

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################

const chartExample2 = {
    chart: {
      caption: "Total amount",
      yaxisname: "",
      subcaption: "It means Total Number of Bitcoins",
      numbersuffix: "",
      rotatelabels: "1",
      "drawAnchors": "0",
      "showLabels": "0",
      "palettecolors": "00b0f0",
      setadaptiveymin: "1",
      linethickness: "3",
      theme: "fusion",

      showBorder: "0",
      showShadow: "0",
      //use3DLighting: "0",
      bgColor: "#27293d",
      //bgAlpha: "0",
      canvasBgAlpha: "0",
      plotBorderAlpha: "0",

      toolTipBgcolor: "#484E69",
      //toolTipPadding: "7",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      baseFont: "",
      baseFontSize: "10",
      baseFontColor: "#FDFDFD",

      showLegend: "1",
      legendShadow: "0",
      legendBorderAlpha: "0",
      drawCustomLegendIcon: "1",
      legendBgAlpha: "0",

      "showAlternateHGridColor": "0",
      // chartTopMargin: "-10",
      // canvasTopMargin: "-10",
      // chartBottomMargin: "20",
      // canvasBottomMargin: "20",

      legendNumColumns: "1",
      legendPosition: "RIGHT",
      defaultCenterLabel: "Total <br> $214",
      centerLabel: "$label<br>$value",
      centerLabelBold: "1",
      centerLabelFontSize: "20",
      enableRotation: "0",
      transposeAnimation: "1",
      plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>"
  },
  data: [{
      label: "",
      value: "89.45"
  }, {
      label: "",
      value: "89.87"
  }, {
      label: "",
      value: "89.64"
  }, {
      label: "",
      value: "90.13"
  }, {
      label: "",
      value: "90.67"
  }, {
      label: "",
      value: "90.54"
  }, {
      label: "",
      value: "90.75"
  }, {
      label: "",
      value: "90.8"
  }, {
      label: "",
      value: "91.16"
  }, {
      label: "",
      value: "91.37"
  }, {
      label: "",
      value: "91.66"
  }, {
      label: "",
      value: "91.8"
  }]
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
      labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
      datasets: [
        {
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
const chartExample4 = {
  chart: {
    caption: "Difficulty",
    yaxisname: "",
    subcaption: "Difficulty is a measure of how difficult it is to find a hash below a given target.",
    legendposition: "Right",
    drawanchors: "0",
    showvalues: "0",
    "palettecolors":"00b0f0",
    "showLabels": "0",
    plottooltext: "<b>$dataValue</b>",
    theme: "fusion",

    showBorder: "0",
      showShadow: "0",
      //use3DLighting: "0",
      bgColor: "#27293d",
      //bgAlpha: "0",
      canvasBgAlpha: "0",
      plotBorderAlpha: "0",

      toolTipBgcolor: "#484E69",
      //toolTipPadding: "7",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      baseFont: "",
      baseFontSize: "10",
      baseFontColor: "#FDFDFD",

      showLegend: "1",
      legendShadow: "0",
      legendBorderAlpha: "0",
      drawCustomLegendIcon: "1",
      legendBgAlpha: "0",

      "showAlternateHGridColor": "0",
      // chartTopMargin: "-10",
      // canvasTopMargin: "-10",
      // chartBottomMargin: "20",
      // canvasBottomMargin: "20",

      legendNumColumns: "1",
      legendPosition: "RIGHT",
      defaultCenterLabel: "Total <br> $214",
      centerLabel: "$label<br>$value",
      centerLabelBold: "1",
      centerLabelFontSize: "20",
      enableRotation: "0",
      transposeAnimation: "1",
      plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>"
  },
  data: [
    {
      label: "",
      value: "11.81"
    },
    {
      label: "",
      value: "10.78"
    },
    {
      label: "",
      value: "10.64"
    },
    {
      label: "",
      value: "12.55"
    },
    {
      label: "",
      value: "13.14"
    },
    {
      label: "",
      value: "12.61"
    },
    {
      label: "",
      value: "12.72"
    },
    {
      label: "",
      value: "11.9"
    },
    {
      label: "",
      value: "13.53"
    },
    {
      label: "",
      value: "14.27"
    },
    {
      label: "",
      value: "80.49"
    },
    {
      label: "",
      value: "91.41"
    }
  ]
};

// #########################################
// // // used inside src/views/Charts.jsx
// #########################################
const chartExample5 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.4)");
    gradientStroke.addColorStop(0.8, "rgba(72,72,176,0.2)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#ba54f5",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};
// #########################################
// // // used inside src/views/Charts.jsx
// #########################################
const chartExample6 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(0,135,191,0.2)");
    gradientStroke.addColorStop(0.8, "rgba(0,135,191,0.1)");
    gradientStroke.addColorStop(0, "rgba(0,84,119,0)"); //blue colors
    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#2380f7",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#2380f7",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#2380f7",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};
// #########################################
// // // used inside src/views/Charts.jsx
// #########################################
const chartExample7 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(253,93,147,0.8)");
    gradientStroke.addColorStop(0, "rgba(253,93,147,0)"); //blue colors
    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#ff5991",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(253,93,147,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(253,93,147,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};
// #########################################
// // // used inside src/views/Charts.jsx
// #########################################
const chartExample8 = {
  data: {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Data",
        fill: true,
        backgroundColor: "#ff8a76",
        hoverBackgroundColor: " #ff8a76",
        borderColor: "#ff8a76",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: [80, 100, 70, 80, 120, 80, 130]
      },
      {
        label: "Data",
        fill: true,
        backgroundColor: "#2782f0",
        hoverBackgroundColor: " #2782f0",
        borderColor: "#2782f0",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: [60, 110, 90, 70, 90, 100]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};
// #########################################
// // // used inside src/views/Charts.jsx
// #########################################
const chartExample9 = {
  data: {
    labels: [1, 2],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#00c09d", "#e2e2e2"],
        borderWidth: 0,
        data: [60, 40]
      }
    ]
  },
  options: {
    cutoutPercentage: 70,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },

    scales: {
      yAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          display: 0,
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};
// #########################################
// // // used inside src/views/Charts.jsx
// #########################################
const chartExample10 = {
  data: {
    labels: [1, 2, 3],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#ff8779", "#2a84e9", "#e2e2e2"],
        borderWidth: 0,
        data: [60, 40, 20]
      }
    ]
  },
  options: {
    cutoutPercentage: 70,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    scales: {
      yAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

module.exports = {
  sleep,
  renderZoomChart,
  renderGraph,
  node_distribution,
  chartExample1, // in src/views/Dashboard.jsx
  chartExample2, // in src/views/Dashboard.jsx
  chartExample3, // in src/views/Dashboard.jsx
  chartExample4, // in src/views/Dashboard.jsx
  chartExample5, // in src/views/Charts.jsx
  chartExample6, // in src/views/Charts.jsx
  chartExample7, // in src/views/Charts.jsx
  chartExample8, // in src/views/Charts.jsx
  chartExample9, // in src/views/Charts.jsx
  chartExample10 // in src/views/Charts.jsx
};
