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

class Transaction_M extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category"> Transaction / Transaction Fees</p>
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
                         <td><a href="https://www.blockchain.com/charts/transaction-fees" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">The total value of all transaction fees paid to miners (not including the coinbase value of block rewards) in BTC value. </td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://bitinfocharts.com/comparison/bitcoin-transactionfees.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/bitcoin-transactionfees.html" rel="noopener noreferrer" target="_blank">BitinfoCharts</a></td>
                         <td width="70%">Historical Bitcoin Avg. Transaction fee in USD</td>
                         <td>Linear, log</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://btc.com/stats/fee" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/btc.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://btc.com/stats/fee" rel="noopener noreferrer" target="_blank">BTC</a></td>
                         <td width="70%">Transaction fee (per day/month); Transaction  fees percentage of block reward (per day/month); Transaction fees per KB (per day/month)</td>
                         <td>Line Chart</td>
                      </tr>
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
                         <td><a href="https://www.blockchain.com/charts/transaction-fees-usd" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
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
                  <p className="category"> Transaction / Median Transactions Fee</p>
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
                            <a href="https://bitinfocharts.com/comparison/bitcoin-median_transaction_fee.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/bitcoin-median_transaction_fee.html" rel="noopener noreferrer" target="_blank">BitinfoCharts</a></td>
                         <td width="70%">Historical  Bitcoin Block Time, Average block time in minutes.</td>
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
                  <p className="category"> Transaction / Transaction Value</p>
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
                            <a href="https://bitinfocharts.com/comparison/bitcoin-transactionfees.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/bitcoin-transactionfees.html" rel="noopener noreferrer" target="_blank">BitinfoCharts</a></td>
                         <td width="70%">Historical  Bitcoin Avg. Transaction Value in USD</td>
                         <td>Linear, log</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://tradeblock.com/markets/bfnx/xbt-usd/5m/" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/Tradeblock.svg")}
                              />
                            </a>
                            </div>
                          </td>
                          <td>
                          <a href="https://tradeblock.com/markets/bfnx/xbt-usd/5m/" rel="noopener noreferrer" target="_blank">Trade Block</a></td>
                         <td width="70%">Total transaction value (XBT)</td>
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
                  <p className="category"> Transaction / Estimated Transaction value</p>
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
                            <a href="https://www.blockchain.com/charts/estimated-transaction-volume" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/estimated-transaction-volume" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">The total estimated value of transactions on the Bitcoin blockchain (does not include coins returned to sender as change). In BTC value.</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://https://www.blockchain.com/charts/estimated-transaction-volume-usd" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/estimated-transaction-volume-usd" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">The Estimated Transaction Value in USD value.</td>
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
                  <p className="category"> Transaction / Total number of transactions</p>
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
                            <a href="https://www.blockchain.com/charts/n-transactions-total" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/n-transactions-total" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">Total Number of transactions</td>
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
                  <p className="category"> Transaction / Transactions Count</p>
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
                         <td><a href="https://coin.dance/" rel="noopener noreferrer" target="_blank">Coin Dance</a></td>
                         <td width="70%">Daily Avrage Bitcoin Transactions per block</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://www.blockchain.com/charts/n-transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/n-transactions" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">The number of daily confirmed Bitcoin transactions.</td>
                         <td>Line Chart</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <a href="https://explorer.bitcoin.com/btc" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/explorer.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://explorer.bitcoin.com/btc" rel="noopener noreferrer" target="_blank">Bitcoin core</a></td>
                         <td width="70%">Daily Transaction count</td>
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
                  <p className="category"> Transaction / Transactions</p>
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
                            <a href="https://bitinfocharts.com/comparison/bitcoin-transactions.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/bitcoin-transactions.html" rel="noopener noreferrer" target="_blank">BitinfoCharts</a></td>
                         <td width="70%">Historical Bitcoin Transaction in K; Average block size</td>
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
                  <p className="category"> Transaction / Cost percentage of Transaction Volume</p>
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
                         <td><a href="https://www.blockchain.com/charts/cost-per-transaction-percent" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
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
                  <p className="category"> Transaction / Cost per Transaction</p>
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
                         <td><a href="https://www.blockchain.com/charts/cost-per-transaction" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
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
                  <p className="category"> Transaction / Transactions Rate</p>
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
                            <a href="https://www.blockchain.com/charts/transactions-per-second" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/transactions-per-second" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">The number of Bitcoin transactions added to the mempool per second.</td>
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
                  <p className="category"> Transaction / Transaction volume excluding popular Addresses</p>
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
                            <a href="https://www.blockchain.com/charts/n-transactions-excluding-popular" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/n-transactions-excluding-popular" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">The total number of Bitcoin transactions, excluding those involving any of the network's 100 most popular addresses.</td>
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
                  <p className="category"> Transaction / Transaction volume excluding long chains</p>
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
                            <a href="https://www.blockchain.com/charts/n-transactions-excluding-chains-longer-than-100" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/n-transactions-excluding-chains-longer-than-100" rel="noopener noreferrer" target="_blank">Blockchain</a></td>
                         <td width="70%">The total number of Bitcoin transactions per day excluding those part of long transaction chains. </td>
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
                  <p className="category"> Transaction / Recommended TX fee for target  Confirmation in X block</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">TX fee per block in Satoshi value</td>
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
                  <p className="category"> Transaction / Average network TX fee per byte</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Tx fee per byte (Avg & current) in Satoshi value</td>
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
                  <p className="category"> Transaction / Transactions Propagation</p>
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
                         <td><a href="https://bitnodes.earn.com/dashboard/" rel="noopener noreferrer" target="_blank">Bitnodes</a></td>
                         <td width="70%">Transactions propagation time in milliseconds during the last 24 hours (50%)</td>
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
                  <p className="category"> Transaction / Transaction Sets</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Total Tx cache size (Avg & current); Total Tx in mempool (Avg & current)</td>
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
                  <p className="category"> Transaction / Transaction Accepted Per Second</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Total accepted Transaction per second (Avg); Tx/s trailing month average </td>
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
                  <p className="category"> Transaction / Transactions Accepted vs Rejected</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">percentage of accepted/rejected Transaction per second (Avg)</td>
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
                  <p className="category"> Transaction / BTC spent per Second</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Total BTC spent per second</td>
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
                  <p className="category"> Transaction / Percent Transaction Inputs vs Outputs</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">percentage  of inputs/outputs Transaction per second</td>
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
                  <p className="category"> Transaction / vBytes Per Transaction</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Total TX vBytes / Tx Hash in B (Avg)</td>
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
                  <p className="category"> Transaction / Fees Paid per Transaction</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Transaction fee in Satoshis</td>
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
                  <p className="category"> Transaction / Transaction Free Pair vByte</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Transaction fee in Satoshis per vByte</td>
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
                  <p className="category"> Transaction / Signature Operations</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">Total Signature Operations per Transaction (Avg)</td>
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
                  <p className="category"> Transaction / Total Historical Transactions</p>
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
                            <a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank">Statoshi</a></td>
                         <td width="70%">The Historical Transactions count; Stats gauges transactions  total count in Mil</td>
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

export default Transaction_M;
