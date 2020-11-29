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

class  Peers extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Peers / Peers</p>
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
                            <a href="https://statoshi.info/dashboard/db/peers" rel="noopener noreferrer" target="_blank">
                                <img
                                  alt="..."
                                  src={require("../../assets/img/statoshi.png")}
                                  />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/peers" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                       <td width="70%">Total Bitcoin peers/addresses (Full/SPV nodes, Inbound/outbound connections, IPv4/IPv6/Tor connections; Peers known addresses)</td>
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
                  <p className="category">Peers / Peer Pings</p>
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
                            <a href="https://statoshi.info/dashboard/db/peers" rel="noopener noreferrer" target="_blank">
                                <img
                                  alt="..."
                                  src={require("../../assets/img/statoshi.png")}
                                  />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/peers" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Bitcoin ping's time in microsecond  (lower/median in ms, upper in s)</td>
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
                  <p className="category">Peers / Peer Misbehavior</p>
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
                            <a href="https://statoshi.info/dashboard/db/peers" rel="noopener noreferrer" target="_blank">
                                <img
                                  alt="..."
                                  src={require("../../assets/img/statoshi.png")}
                                  />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/peers" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Total rejected messages per second; Number of misbehaving nodes per second (banned nodes)</td>
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
                  <p className="category">Peers / Active nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="60%">Total Active nodes based on the used Bitcoin client software</td>
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
                  <p className="category">Peers / Bitcoin nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active nodes based on the used Bitcoin client software</td>
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
                  <p className="category">Peers / Bitcoin UAFS nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active UAFS nodes </td>
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
                  <p className="category">Peers / Bitcoin Knot  nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active Knot nodes </td>
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
                  <p className="category">Peers / Bitcoin BCOIN  nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active BCOIN nodes </td>
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
                  <p className="category">Peers / Bitcoin Unlimited nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active Unlimited nodes </td>
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
                  <p className="category">Peers / Bitcoin BTCD nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active BTCD nodes </td>
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
                  <p className="category">Peers / Bitcoin TRB nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active TRB nodes </td>
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
                  <p className="category">Peers / Bitcoin BTC1 nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active BTC1 nodes </td>
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
                  <p className="category">Peers / Bitcoin XT nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active XT nodes </td>
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
                  <p className="category">Peers / Bitcoin libbitcoin nodes</p>
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
                            <a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/coindance.png")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://coin.dance/nodes" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Coin Dance</font></a></td>
                          <td width="70%">Historical count of Active libbitcoin nodes </td>
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
                  <p className="category">Peers / Nodes</p>
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
                            <a href="https://bitnodes.earn.com/" rel="noopener noreferrer" target="_blank">
                            <img
                              alt="..."
                              src={require("../../assets/img/bitnodes.jpg")}
                            />
                            </a>
                          </div>
                          </td>
                          <td><a href="https://bitnodes.earn.com/" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Bitnodes</font></a></td>
                          <td width="70%">Reachable bitcoin nodes' distribution in the last 24h</td>
                          <td>Table, map charts</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Peers / Reachable Nodes</p>
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
                          <td width="70%">Reachable bitcoin nodes' distribution in the last 24h (based on the network address types)</td>
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
                  <p className="category">Peers / Network Availability</p>
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
                          <td width="70%">Total number of reachable bitcoin nodes' distribution in the last 24h</td>
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
                  <p className="category">Peers / User Agents</p>
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
                          <td width="70%">Distribution of reachable nodes across leading Bitcoin's user agents</td>
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
                  <p className="category">Peers / ASNS</p>
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
                          <td width="70%">Distribution  of reachable nodes across leading ASNs</td>
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
                  <p className="category">Peers / Countries</p>
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
                          <td width="70%">Distribution  of reachable Bitcoin nodes across leading countries</td>
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

export default Peers;
