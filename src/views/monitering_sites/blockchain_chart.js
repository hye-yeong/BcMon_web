import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Card,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

class BlockchainChart extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th Width="25%">Sites</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/block"}><font size="3" color="white">&nbsp;&nbsp;Block</font></Link></td>
                      <td >Bitcoin Size, Transaction per Block, Block Usage, Block version, Block Heights, Block Propagation etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/transaction"}><font size="3" color="white">&nbsp;&nbsp;Transaction</font></Link></td>
                      <td >Transaction Fees, Transaction Value, Estimated Transaction Value, Cost per TRansaction etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/mining"}><font size="3" color="white">&nbsp;&nbsp;Mining</font></Link></td>
                      <td >Hash rate, Difficulty, Mining REvenue, Total Transaction Fees&nbsp;(&nbsp;BTC&nbsp;|&nbsp;USD&nbsp;), cost per Transaction etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/mempool"}><font size="3" color="white">&nbsp;&nbsp;Mempool</font></Link></td>
                      <td >Mempool Transaction Count, Mempool Size, Minimum Mempool TRansaction Fee etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/bitcoinAddress"}><font size="3" color="white">&nbsp;&nbsp;Bitcoin Address</font></Link></td>
                      <td >Unique addresses, Transaction Volume Excluding Popular Address, Address Rich List etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/blockwallet"}><font size="3" color="white">&nbsp;&nbsp;Blockchain wallet Activity</font></Link></td>
                      <td >Blockchain Wallet Users</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/unspentTxOutputSet"}><font size="3" color="white">&nbsp;&nbsp;Unspent Transaction Output Set</font></Link></td>
                      <td >Total Transaction Unspent Outputs, Size of Serialized UTXO set, Total Bitcoin in Existence etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/peers"}><font size="3" color="white">&nbsp;&nbsp;Peers</font></Link></td>
                      <td >Peers, Peer Pings, Peer Misbehavior, Active nodes, BItcoin nodes, Nodes, Reachable Nodes etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/scriptTypes"}><font size="3" color="white">&nbsp;&nbsp;Script Types</font></Link></td>
                      <td >-</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/bandwidthUsage"}><font size="3" color="white">&nbsp;&nbsp;Bandwidth Usage</font></Link></td>
                      <td >Incoming & Outgoing Bandwidth usage per second, Total Bnadwidth used since last restart etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/functionTimings"}><font size="3" color="white">&nbsp;&nbsp;Function Timings</font></Link></td>
                      <td >Accept Block, Check Block, Connetc Block, Accept To Mempool, Check in puts etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/p2p_messages"}><font size="3" color="white">&nbsp;&nbsp;P2P Messages</font></Link></td>
                      <td >All messages Received, All Messages SEnt, addr, getData etc..</td>
                    </tr>
                    <tr>
                      <td><Link to={"/admin/monitering/blockchain_chart/systemMetric"}><font size="3" color="white">&nbsp;&nbsp;System Metircs</font></Link></td>
                      <td >CPU message, Load, Memory Uszge, Disk Usage</td>
                    </tr>
                  </tbody>
                </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default BlockchainChart;
