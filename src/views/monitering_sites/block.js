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

class Block extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">block / Block Size</p>
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
                            <a href="https://www.blockchain.com/charts/blocks-size" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitcoininfo.png")}
                            />
                            </a>
                          </div>
                        </td>
                        <td> <a href="https://www.blockchain.com/charts/blocks-size" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                        <td width="70%">The total size of all block headers and transactions in MB</td>
                        <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/statoshi.png")}
                            />
                            </a>
                          </div>
                        </td>
                        <td> <a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                        <td width="70%">Current size with witness "SegWit  BIP 141" in Bytes ( Max & Avg in M  (1 vbyte = 4 M weight units)) </td>
                        <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://btc.com/stats/block-size" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/btc.png")}
                            />
                            </a>
                          </div>
                        </td>
                        <td> <a href="https://btc.com/stats/block-size" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                        <td width="70%">Median daily/monthly block size</td>
                        <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://coin.dance/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                        </td>
                        <td> <a href="https://coin.dance/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                        <td width="70%">Daily Avrage Bitcoin Block size in K</td>
                        <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://bitinfocharts.com/comparison/size-btc.html" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitinfocharts.png")}
                            />
                            </a>
                          </div>
                        </td>
                        <td> <a href="https://bitinfocharts.com/comparison/size-btc.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                        <td width="70%">Historical Bitcoin block size in M; Average block size</td>
                        <td>Linear, log</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">block / Average Block Size</p>
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
                            <a href="https://www.blockchain.com/charts/avg-block-size " rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitcoininfo.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://www.blockchain.com/charts/avg-block-size" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                        <td width="70%">The average block size in MB</td>
                        <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://tradeblock.com/bitcoin/historical/1d-f-txval_per_tot-01071-blksize_per_avg-01071" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/Tradeblock.svg")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://tradeblock.com/bitcoin/historical/1d-f-txval_per_tot-01071-blksize_per_avg-01071" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                        <td width="70%">Average Block size (Bytes)</td>
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
                  <p className="category">block / Transaction per Block</p>
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
                            <a href="https://www.blockchain.com/charts/n-transactions-per-block" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitcoininfo.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://www.blockchain.com/charts/n-transactions-per-block" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                        <td width="70%">The average number of transactions per block.</td>
                        <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://tradeblock.com/bitcoin/historical/1d-f-txval_per_tot-01071-blksize_per_avg-01071" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/Tradeblock.svg")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://tradeblock.com/bitcoin/historical/1d-f-txval_per_tot-01071-blksize_per_avg-01071" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                        <td width="70%">Total transaction value (XBT), Average Block size (Bytes)</td>
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
                  <p className="category">block / Median Transaction Confirmation Time(With fee)</p>
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
                            <a href="https://www.blockchain.com/charts/median-confirmation-time" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitcoininfo.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://www.blockchain.com/charts/median-confirmation-time" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                        <td width="70%">The median time for a transaction (with mining fees) to be accepted into a mined block and added to the public ledger.</td>
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
                  <p className="category">block / Block Usage</p>
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
                            <a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/statoshi.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                        <td width="70%">CurrentNumTX (Max & Avg), CurrentSigOps "signature-checking operations" (Max & Avg), CurrentWeight (Max & Avg)</td>
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
                  <p className="category">block / Block Received vs Block Height</p>
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
                            <a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/statoshi.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                        <td width="70%">Block, Cmptblock "Bitcoin Compact block relay BIP152", Current Height</td>
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
                  <p className="category">block / Blocks Received vs Block INVs Received</p>
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
                            <a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/statoshi.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                        <td width="70%">BlockReceived, CompactBlockReceives, BlockInvReceived</td>
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
                  <p className="category">block / Blocks received vs Blocks sent</p>
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
                            <a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/statoshi.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://statoshi.info/dashboard/db/blocks" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                        <td width="70%">BlockReceived, CompactBlockReceives, BlockRequested, BlockSent</td>
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
                  <p className="category">block / Block version</p>
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
                            <a href="https://btc.com/stats/block-size" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/btc.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://btc.com/stats/block-size" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                        <td width="70%">Percentage of Bitcoin blocks versions (v1, v2, v3, v4, other)</td>
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
                  <p className="category">block / Recent Blocks</p>
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
                            <a href="https://tradeblock.com/bitcoin" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/Tradeblock.svg")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://tradeblock.com/bitcoin" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                        <td width="70%">Transactions count, Transactions value per block</td>
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
                  <p className="category">block / Bitcoin Hashrate by network</p>
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
                            <a href="https://coin.dance/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://coin.dance/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                        <td width="70%">Bitcoin Hash rate in PH/s</td>
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
                  <p className="category">block / Bitcoin Fee</p>
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
                            <a href="https://coin.dance/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://coin.dance/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                        <td width="70%">Daily Average Bitcoin Fee in USD</td>
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
                  <p className="category">block / Block Time</p>
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
                            <a href="https://bitinfocharts.com/comparison/bitcoin-confirmationtime.html" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitinfocharts.png")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://bitinfocharts.com/comparison/bitcoin-confirmationtime.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                        <td width="70%">Avg. time between blocks in minutes</td>
                        <td>Linear, log</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">block / Bitcoin Block Generation time vs difficulty</p>
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
                            <a href="https://bitcoinwisdom.com/bitcoin/difficulty" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/wisdom.jpeg")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://bitcoinwisdom.com/bitcoin/difficulty" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitcoinWisdom</font></a></td>
                        <td width="70%">The relative time needed to generate a new block based on the current Bitcoin network difficulty</td>
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
                  <p className="category">block / Block Heights</p>
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
                            <a href="https://bitnodes.earn.com/dashboard/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitnodes.jpg")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://bitnodes.earn.com/dashboard/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Bitnodes</font></a></td>
                        <td width="70%">Distribution of reachable nodes across leading block heights</td>
                        <td>Graphique en aires</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">block / Block Propagation</p>
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
                            <a href="https://bitnodes.earn.com/dashboard/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitnodes.jpg")}
                            />
                            </a>
                            </div>
                        </td>
                        <td><a href="https://bitnodes.earn.com/dashboard/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Bitnodes</font></a></td>
                        <td width="70%">Block propagation time in milliseconds during the last 24 hours. (50%)</td>
                        <td>Graphique en aires</td>
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

export default Block;
