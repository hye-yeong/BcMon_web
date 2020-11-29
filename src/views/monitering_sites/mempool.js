import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

class Mempool extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mempool / Mempool Transaction Count</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Sites</th>
                        <th width="70%">Description</th>
                        <th>Display</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://www.blockchain.com/charts/mempool-count" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/mempool-count" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The number of transactions waiting to be confirmed.</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://statoshi.info/dashboard/db/memory-pool" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/memory-pool" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Total number of unconfirmed  transactions in Mempool in K value; Total TX bytes in MiB value</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://tradeblock.com/bitcoin" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/Tradeblock.svg")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://tradeblock.com/bitcoin" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                         <td width="70%">Total Transacions in Mempool (Tx/Sec, Tx count, Size, Value, Fee, Fee/size)</td>
                         <td>Line Chart</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mempool / Mempool Size</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Sites</th>
                        <th width="70%">Description</th>
                        <th>Display</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://www.blockchain.com/charts/mempool-size" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/mempool-size" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The aggregate size of transactions waiting to be confirmed.</td>
                         <td>Line Chart</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mempool / Mempool Size Grwoth</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Sites</th>
                        <th width="70%">Description</th>
                        <th>Display</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://www.blockchain.com/charts/mempool-growth" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/mempool-growth" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The rate at which the mempool is growing per second.</td>
                         <td>Line Chart</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mempool / Minimum Mempool Transaction Fee</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Sites</th>
                        <th width="70%">Description</th>
                        <th>Display</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://statoshi.info/dashboard/db/memory-pool" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/memory-pool" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Mempool transaction fee in satoshi per Kilobyte (minimum fee)</td>
                         <td>Line Chart</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mempool / Memepool State by fee level</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Sites</th>
                        <th width="70%">Description</th>
                        <th>Display</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://www.blockchain.com/charts/mempool-state-by-fee-level" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/mempool-state-by-fee-level" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The chart shows the current state of the mempool organized by Fee Level. Each transaction’s ‘Fee Level’ is defined as the number of Satoshis per byte the transaction pays.</td>
                         <td>Bar Chart</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mempool / Mempool Dynamic Memory Usage</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Sites</th>
                        <th width="70%">Description</th>
                        <th>Display</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://statoshi.info/dashboard/db/memory-pool" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/memory-pool" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Memory usage in MiB value</td>
                         <td>Line Chart</td>
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

export default Mempool;
