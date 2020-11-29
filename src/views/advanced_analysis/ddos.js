import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
ReactFC.fcRoot(FusionCharts, TimeSeries, FusionTheme, CandyTheme);

const jsonify = res => res.json();
const dataFetch = fetch("http://163.152.223.12:5002/get_data").then(jsonify);
const schemaFetch = fetch("http://163.152.223.12:5002/get_schema").then(jsonify);

const dataSource = {
  chart: {theme: "candy"
  },
  subcaption: {
    text: "We predict whether DDoS attack will occur on the next day or not through the Bitcoin's block statistical data of the previous day."
  },
  series: "Model",
  yaxis: [
    {
      plot: [
        {
          value: "Score",
          type: "column"
        }
      ],
      title: "Detection Score",
      format: {
        suffix: ""
      }
    }
  ]
};

class analysis_ddos extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        padding: "10",
        width: "100%",
        height: "600",
        dataSource
      }
    };
  }

  componentDidMount() {
    this.onFetchData();
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];

      console.log(data)

      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );

      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <h2 className="text-center">Bitcoin DDoS</h2>
            <div className="title content">
              <Card className="card-firstoutline">
                <CardHeader>
                  <CardTitle>
                    <h3 className="text-center">DDoS prediction</h3>
                  </CardTitle>
                  </CardHeader>
                  <Row>
                    <Col lg="12">
                      <Card className="card-management-ethereum">
                          <CardBody className="text-center">
                            {this.state.timeseriesDs.dataSource.data ? (
                              <ReactFC {...this.state.timeseriesDs} />
                            ) : (
                                "loading"
                              )}
                          </CardBody>
                          <CardHeader>
                            <CardTitle>
                              <p>DDoS Attack Prediction System predict DDoS attack through predictive model which train the Bitcoin block statistical data and price data. This System consists of four categories in overall.</p>
                              <p>The "Collector" collect the block data and the price data from bitcoin network and exchange respectively.</p>
                              <p>The "pre-processor" cosists of four modules. Statistical data extractor extracts statistical data from collected block data. The unifier unify the time unit of block statistical data and time unit of price data. The time series clustering process divides the entire data into time series group with similar distributions and transfer the clustering results to the time-series classifier.</p>
                              <p>The Training category generates a predictive model that corresponds to a time series dataset , and the number of predictive models depends on the number of time series datasets. The generated training model is transfered to the predictor.</p>
                              <p>The "Predictor" outputs the probability of a DDoS attack within the next 1 day via the entered time series.</p>
                              </CardTitle>
                            </CardHeader>
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

export default analysis_ddos;
