import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardBody,Table } from "reactstrap";
//import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

class addressInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addr: this.props.match.params.addr };
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
          <h2 className="text-left"><font size="7" color="white">&nbsp;&nbsp;Bitcoin Address</font></h2>
          <h3 className="text-left"><font size="5" color="white">&nbsp;&nbsp;{this.state.addr}</font></h3>
          <ColoredLine color="white" />
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th Width="15%"><font size="5" color="white">&nbsp;&nbsp;Summary</font></th>
                    <th Width="35%"></th>
                    <th Width="20%"><font size="5" color="white">&nbsp;&nbsp;Transactions</font></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Address</font></td>
                    <td><a href={"/admin/bitcoin/explorer/addrInfo/" + this.state.addr}>{this.state.addr}</a></td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;No. Transactions</font></td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Hash 160</font></td>
                    <td>fa0692278afe508514b5ffee8fe5e97732ce0669</td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Total Received</font></td>
                    <td>0.00471 BTC</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Received Time</font></td>
                    <td>2019-08-22 07:43:07</td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Fees</font></td>
                    <td>0.0007 BTC</td>
                  </tr>
                  <tr>
                    <td ></td>
                    <td ></td>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Final Balance</font></td>
                    <td >0 BTC</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <h2 className="text-left">Transactions</h2>
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th Width="35%"><a href={"/admin/bitcoin/explorer/txInfo/" + "a59e68c9d3c5a7867b686fc865101e82223d49cb4a1497f8a975ff56b47b38ef"}>a59e68c9d3c5a7867b686fc865101e82223d49cb4a1497f8a975ff56b47b38ef</a></th>
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
              <Table responsive>
                <thead>
                  <tr>
                    <th Width="35%"><a href={"/admin/bitcoin/explorer/txInfo/" + "a59e68c9d3c5a7867b686fc865101e82223d49cb4a1497f8a975ff56b47b38ef"}>a59e68c9d3c5a7867b686fc865101e82223d49cb4a1497f8a975ff56b47b38ef</a></th>
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
        </div>
      </>
    );
  }
}

export default addressInfo;
