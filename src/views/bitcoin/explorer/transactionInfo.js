import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardBody,Table } from "reactstrap";
//import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

class transactionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txid: this.props.match.params.txid };
  }
  render() {
//    const { data } = {};
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 0.1
        }}
      />
    );
    return (
      <>
        <div className="content">
          <h2 className="text-left"><font size="7" color="white">&nbsp;&nbsp;Transaction</font></h2>
          <h3 className="text-left"><font size="5" color="white">&nbsp;&nbsp;{this.state.txid}</font></h3>
          <ColoredLine color="white" />
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th Width="35%"><a href={"/admin/bitcoin/explorer/txInfo/" + this.state.txid}>{this.state.txid}</a></th>
                    <th Width="10%"></th>
                    <th Width="35%"></th>
                    <th Width="20%">2019-08-11 07:49:48</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href={"/admin/bitcoin/explorer/addrInfo/" + "1Po1oWkD2LmodfkBYiAktwh76vkF93LKnh"}>1Po1oWkD2LmodfkBYiAktwh76vkF93LKnh</a></td>
                    <td>==></td>
                    <td><a href={"/admin/bitcoin/explorer/addrInfo/" + "1Po1oWkD2LmodfkBYiAktwh76vkF93LKnh"}>1Po1oWkD2LmodfkBYiAktwh76vkF93LKnh</a></td>
                    <td>0.00002184 BTC</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><a href={"/admin/bitcoin/explorer/addrInfo/" + "1DdrCgSPMYwmMr9HYNpi6XJr2iTVj94ZM9"}>1DdrCgSPMYwmMr9HYNpi6XJr2iTVj94ZM9</a></td>
                    <td>0.00000546 BTC</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><font size="3" color="white">0.0000273 BTC</font></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th Width="15%"><font size="5" color="white">&nbsp;&nbsp;Summary</font></th>
                    <th Width="35%"></th>
                    <th Width="20%"><font size="5" color="white">&nbsp;&nbsp;Inputs & Outputs</font></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Size</font></td>
                    <td>216 (bytes)</td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Total Input</font></td>
                    <td>0.00471 BTC</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Weight</font></td>
                    <td>534</td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Total Output</font></td>
                    <td>0.00401 BTC</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Received Time</font></td>
                    <td>2019-08-22 07:43:07</td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Fees</font></td>
                    <td>0.0007 BTC</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Included In A Block</font></td>
                    <td><a href={"/admin/bitcoin/explorer/blockInfo/" + "580011"}>580011</a> (2019-08-22 07:49:48 + 7 minutes)</td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Fee per Byte</font></td>
                    <td>324.074 sat/B</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Confirmations</font></td>
                    <td>10</td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Fee per Weight Unit</font></td>
                    <td>131.086 sat/WU</td>
                  </tr>
                  <tr>
                    <td ></td>
                    <td ></td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Estimated BTC Transacted</font></td>
                    <td >0.00401 BTC</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </>

    );
  }

}

export default transactionInfo;
