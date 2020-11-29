import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class MarketChart extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Bitcoin In Circulation</CardTitle>
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
                          <a href="https://www.blockchain.com/charts/total-bitcoins" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitcoininfo.png")}
                          />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://www.blockchain.com/charts/total-bitcoins" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                      <td width="70%">The total number of bitcoins that have already been mined</td>
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
                <CardTitle tag="h4">Market Capitalization</CardTitle>
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
                        <a href="https://www.blockchain.com/charts/market-cap" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitcoininfo.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://www.blockchain.com/charts/market-cap" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                    <td width="70%">The total USD value of bitcoin supply in circulation, as calculated by the daily average market price across major exchanges.</td>
                    <td>Line Chart</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://bitinfocharts.com/comparison/bitcoin-marketcap.html" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitinfocharts.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://bitinfocharts.com/comparison/bitcoin-marketcap.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitinfoCharts</font></a></td>
                    <td width="70%">Historical Bitcoin Market capitalization (BTC/USD)</td>
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
                <CardTitle tag="h4">USD Exchange Trade Volume</CardTitle>
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
                        <a href="https://www.blockchain.com/charts/trade-volume" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitcoininfo.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://www.blockchain.com/charts/trade-volume" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                    <td width="70%">The total USD value of trading volume on major bitcoin exchanges.</td>
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
                <CardTitle tag="h4">Sent in USD</CardTitle>
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
                      <a href="https://bitinfocharts.com/comparison/sentinusd-btc.html" rel="noopener noreferrer" target="_blank">
                        <img
                          alt="..."
                          src={require("../../assets/img/bitinfocharts.png")}
                        />
                      </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://bitinfocharts.com/comparison/sentinusd-btc.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitinfoCharts</font></a></td>
                    <td width="70%">Historical Bitcoin Sent in USD</td>
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
                <CardTitle tag="h4">Bitcoin Price</CardTitle>
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
                        <a href="https://explorer.bitcoin.com/btc" rel="noopener noreferrer" target="_blank">
                        <img
                          alt="..."
                          src={require("../../assets/img/explorer.png")}
                        />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://explorer.bitcoin.com/btc" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Bitcoin core</font></a></td>
                    <td width="70%">Average USD market price across major bitcoin exchanges.</td>
                    <td>Line Chart</td>
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
                    <a href="https://tradeblock.com/markets/bfnx/xbt-usd/5m/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                    <td width="70%">Average USD market price across major bitcoin exchanges.</td>
                    <td>Histogram Chart</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://bitinfocharts.com/comparison/bitcoin-price.html" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitinfocharts.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://bitinfocharts.com/comparison/bitcoin-price.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitinfoCharts</font></a></td>
                    <td width="70%">Historical Bitcoin price in USD</td>
                    <td>Linear, log</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://www.blockchain.com/charts/market-price" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitcoininfo.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://www.blockchain.com/charts/market-price" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                    <td width="70%">Average USD market price across major bitcoin exchanges.</td>
                    <td>Line Chart</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://bitcoinwisdom.com/" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/wisdom.jpeg")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://bitcoinwisdom.com/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitcoinWisdom</font></a></td>
                    <td width="70%">Average USD/EUR market price across major bitcoin exchanges (change rate and volume)</td>
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
                <CardTitle tag="h4">Mining Profitability</CardTitle>
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
                    <td>
                    <a href="https://bitinfocharts.com/comparison/bitcoin-mining_profitability.html" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BitinfoCharts</font></a></td>
                    <td Width="70%">Historical Bitcoin Mining Prefittability; Mining Profitability USD/Dat for 1 Thash/s</td>
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

export default MarketChart;
