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

class BlockchainExplorer extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h1">Block</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center"></th>
                      <th>Sites</th>
                      <th width="80%">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a onClick={this.handleToggle} href="https://www.blockchain.com/en/btc/blocks" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitcoininfo.png")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a
                      href="https://www.blockchain.com/en/btc/blocks"
                      rel="noopener noreferrer"
                      target="_blank">
                      <font size="3" color="white">Blockchain</font></a></td>
                      <td Width="80%">A Bitcoin Block detailed data</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://blockexplorer.com/blocks" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/blockexplorer.png")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://blockexplorer.com/blocks" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BlockExplorer</font></a></td>
                      <td Width="80%">A Bitcoin Block detailed data</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://live.blockcypher.com/btc/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/cyper.png")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://live.blockcypher.com/btc/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BlockCypher</font></a></td>
                      <td Width="80%">Bitcoin Block detailed data</td>
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
                      <td>
                      <a href="https://explorer.bitcoin.com/btc" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Bitcoin core</font></a></td>
                      <td Width="80%">Bitcoin Block detailed data</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://tradeblock.com/bitcoin/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/Tradeblock.svg")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://tradeblock.com/bitcoin/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                      <td Width="80%">Bitcoin Block detailed data</td>
                    </tr>
                  </tbody>
                </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Transaction</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center"></th>
                      <th>Sites</th>
                      <th width="80%">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://www.blockchain.com/explorer" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitcoininfo.png")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://www.blockchain.com/explorer" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                      <td Width="80%">A Bitcoin Transaction detailed data</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://btc.com/TxHash" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/btc.png")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://btc.com/TxHash" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                      <td Width="80%">A Bitcoin Transaction detailed data</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://blockexplorer.com/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/blockexplorer.png")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://blockexplorer.com/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BlockExplorer</font></a></td>
                      <td Width="80%">A Bitcoin Transaction detailed data</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://live.blockcypher.com/btc/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/cyper.png")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://live.blockcypher.com/btc/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BlockCypher</font></a></td>
                      <td Width="80%">Bitcoin Transaction detailed data</td>
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
                      <td>
                      <a href="https://explorer.bitcoin.com/btc" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Bitcoin core</font></a></td>
                      <td Width="80%">Bitcoin Transaction detailed data</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <a href="https://tradeblock.com/bitcoin/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/Tradeblock.svg")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                      <a href="https://tradeblock.com/bitcoin/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                      <td Width="80%">Bitcoin Transaction detailed data</td>
                    </tr>
                  </tbody>
                </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Address</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center"></th>
                      <th>Sites</th>
                      <th width="70%">Description</th>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://www.blockchain.com/explorer" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitcoininfo.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td class="SITELINK">
                    <a href="https://www.blockchain.com/explorer" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                    <td Width="80%">A Bitcoin Address detailed data</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://btc.com/AddrHash" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/btc.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://btc.com/AddrHash" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                    <td Width="80%">A Bitcoin Address detailed data</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://blockexplorer.com/blocks" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/blockexplorer.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://blockexplorer.com/blocks" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BlockExplorer</font></a></td>
                    <td Width="80%">A Bitcoin Address detailed data</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <a href="https://live.blockcypher.com/btc/" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/cyper.png")}
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                    <a href="https://live.blockcypher.com/btc/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BlockCypher</font></a></td>
                    <td Width="80%">Bitcoin Address detailed data</td>
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
                    <td>
                    <a href="https://tradeblock.com/bitcoin/historical/1d-f-txval_per_tot-01071-blksize_per_avg-01071" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Trade Block</font></a></td>
                    <td Width="80%">Bitcoin Address detailed data</td>
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

export default BlockchainExplorer;
