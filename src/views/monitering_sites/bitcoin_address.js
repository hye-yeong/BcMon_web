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

class BitcoinAddress extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Bitcoin address / Unique addresses</p>
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
                            <a href="https://www.blockchain.com/charts/n-unique-addresses" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitcoininfo.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://www.blockchain.com/charts/n-unique-addresses" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                         <td width="70%">The total number of unique addresses used on the Bitcoin blockchain.</td>
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
                  <p className="category">Bitcoin address / Transaction volume excluding popular Addresses</p>
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
                         <td><a href="https://www.blockchain.com/charts/n-transactions-excluding-popular" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
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
                  <p className="category">Bitcoin address / Address Rich List</p>
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
                            <a href="https://btc.com/stats/rich-list" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/btc.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://btc.com/stats/rich-list" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                         <td width="70%">Displays Bitcoin address count, address balance distribution in BTC and top 100 richest address details</td>
                         <td>Bar & line Charts</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Bitcoin address / Sent from addresses</p>
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
                            <a href="https://bitinfocharts.com/comparison/sentbyaddress-btc.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/sentbyaddress-btc.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                         <td width="70%">Historical Bitcoin Sent; Number of unique (from) addresses per day</td>
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
                  <p className="category">Bitcoin address / Active Addresses</p>
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
                            <a href="https://bitinfocharts.com/comparison/activeaddresses-btc.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/activeaddresses-btc.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                         <td width="70%">Historical  Bitcoin Active Addresses; Number of unique (from or to) addresses per day</td>
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
                  <p className="category">Bitcoin address / Top100ToTotal</p>
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
                            <a href="https://bitinfocharts.com/comparison/top100cap-btc.html" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/bitinfocharts.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://bitinfocharts.com/comparison/top100cap-btc.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitInfoCharts</font></a></td>
                         <td width="70%">Top 100 Richest Addresses to Total coins %</td>
                         <td>Linear, log</td>
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

export default BitcoinAddress;
