import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Card, CardBody,Table } from "reactstrap";
//import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

class blockInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blockHeight: this.props.match.params.height };
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
          <h2 className="text-left"><font size="7" color="white">&nbsp;&nbsp;Block #{this.state.blockHeight}</font></h2>
          <h3 className="text-left"><font size="5" color="white">&nbsp;&nbsp;0000000000000000000703bc6deb96ccc85e0ae07a2b341f6ee1c61eafff12e1</font></h3>
          <ColoredLine color="white" />
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th Width="15%"><font size="5" color="white">&nbsp;&nbsp;Summary</font></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Previous Block</font></td>
                    <td><a href={"/admin/bitcoin/explorer/blockInfo/" + "580000"}>0000000000000000000703bc6deb96ccc85e0ae07a2b341f6ee1c61eafff12e1</a></td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Next Block</font></td>
                    <td><a href={"/admin/bitcoin/explorer/blockInfo/" + "580000"}>0000000000000000000703bc6deb96ccc85e0ae07a2b341f6ee1c61eafff12e1</a></td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Timestamp</font></td>
                    <td >2019-08-01 02:24:57 utc</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Difficulty</font></td>
                    <td >9.014 x 10^12</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Transactions</font></td>
                    <td >1324</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Version</font></td>
                    <td >0x20000000</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Total Fees</font></td>
                    <td >0.031411334 BTC</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Nonce</font></td>
                    <td >349141044</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Average Fee</font></td>
                    <td >0.031431134 BTC</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Bits</font></td>
                    <td >171f3199</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Weight</font></td>
                    <td >1,799,310 wu</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Merkle Root</font></td>
                    <td >0000000000000000000703bc6deb96ccc85e0ae07a2b341f6ee1c61eafff12e1</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Size</font></td>
                    <td >488,301 bytes</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Chainwork</font></td>
                    <td >2.33 x 10^29 hashes</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Confirmations</font></td>
                    <td >14</td>
                  </tr>
                  <tr>
                    <td ><font size="3" color="white">&nbsp;&nbsp;Miner</font></td>
                    <td >BTC.COM</td>
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

export default blockInfo;
