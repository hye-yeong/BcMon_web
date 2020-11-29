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

class Mining extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mining / Hash rate</p>
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
                            <a href="https://www.blockchain.com/charts/hash-rate" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/hash-rate" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The estimated number of terahashes per second (TH/s) the Bitcoin network is performing to mine blocks.</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://bitinfocharts.com/comparison/bitcoin-hashrate.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/bitcoin-hashrate.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                         <td width="70%">Historical Bitcoin Hashrate in E</td>
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
                  <p className="category">Mining / Hashrate Distribution</p>
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
                            <a href="https://www.blockchain.com/pools" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/pools" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The estimation of hashrate distribution amongst the largest  Bitcoin mining pools</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://btc.com/stats/pool" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/btc.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://btc.com/stats/pool" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                         <td width="70%">Hashrate distributions per pool, Pools Mining statistics</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://statoshi.info/dashboard/db/mining" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/mining" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Bitcoin Hashrate historical chart</td>
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
                  <p className="category">Mining / Difficulty</p>
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
                            <a href="https://www.blockchain.com/charts/difficulty" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/difficulty" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">A relative measure of how difficult it is to find a new block. The difficulty is adjusted periodically (every 2 weeks) as a function of how much hashing power has been deployed by the network of miners.</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://statoshi.info/dashboard/db/mining" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/mining" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Bitcoin mining annually difficulty; Hashrate in EH/s; Difficulty (long scale) Next Difficulty date and Estimated </td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://btc.com/stats/diff" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/btc.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://btc.com/stats/diff" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                         <td width="70%">Current Bitcoin difficulty</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://bitinfocharts.com/comparison/bitcoin-difficulty.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/bitcoin-difficulty.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                         <td width="70%">Historical Bitcoin Difficulty; Average mining difficulty per day</td>
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
                  <p className="category">Mining / Mining Revenue</p>
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
                            <a href="https://www.blockchain.com/charts/miners-revenue" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/miners-revenue" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">Total value of coinbase block rewards and transaction fees paid to miners in USD value.</td>
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
                  <p className="category">Mining / Tatal Transaction Fees (BTC)</p>
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
                            <a href="https://www.blockchain.com/charts/transaction-fees" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/transaction-fees" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The total value of all transaction fees paid to miners (not including the coinbase value of block rewards) in BTC value. </td>
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
                  <p className="category">Mining / Tatal Transaction Fees (USD)</p>
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
                            <a href="https://www.blockchain.com/charts/transaction-fees-usd" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/transaction-fees-usd" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The total value of all transaction fees paid to miners (not including the coinbase value of block rewards) in USD value. </td>
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
                  <p className="category">Mining / Cost percentage of Transaction Volume</p>
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
                            <a href="https://www.blockchain.com/charts/cost-per-transaction-percent" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/cost-per-transaction-percent" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">A chart showing miners revenue as percentage of the transaction volume.</td>
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
                  <p className="category">Mining / Cost per Transaction</p>
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
                            <a href="https://www.blockchain.com/charts/cost-per-transaction" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/cost-per-transaction" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">A chart showing miners revenue (in USD value) divided by the number of transactions.</td>
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
                  <p className="category">Mining / Network Speed and Difficulty</p>
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
                            <a href="https://tradeblock.com/bitcoin/mining/" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/Tradeblock.svg")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://tradeblock.com/bitcoin/mining/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                         <td width="70%">Mining difficilty, Network speed (PH/s)</td>
                         <td>Bar chart</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mining / Block / miners</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Sites</th>
                        <th width="60%">Description</th>
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
                         <td width="60%">Lastest Bitcoin Blocks by Mining Pool </td>
                         <td>Diagramme circulaire chart</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Mining / Mining Profitability</p>
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
                            <a href="https://bitinfocharts.com/comparison/bitcoin-mining_profitability.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/bitcoin-mining_profitability.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                         <td width="70%">Historical Bitcoin Mining Prefittability; Mining Profitability USD/Dat for 1 Thash/s</td>
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
                  <p className="category">Mining / Bitcoin Hashrate vs Difficulty</p>
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
                         <td width="70%">Bitcoin network hash rate (PH/s) vs the relative measure of the difficulty</td>
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
                  <p className="category">Mining / Bitcoin Block Generation time vs difficulty</p>
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
                         <td><a href="https://bitcoinwisdom.com/bitcoin/difficulty" rel="noopener noreferrer" target="_blank"><font size="3" color="white">vBitcoinWisdom</font></a></td>
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
                  <p className="category">Mining / Network Speed and Difficulty</p>
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
                            <a href="https://tradeblock.com/bitcoin/mining/" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/Tradeblock.svg")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://tradeblock.com/bitcoin/mining/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                         <td width="70%">Mining difficilty, Network speed (PH/s)</td>
                         <td>Bar chart</td>
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

export default Mining;
