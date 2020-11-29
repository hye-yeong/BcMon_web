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

class BandwidthUsage extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Bandwidth usage / Incoming & Outgoing Bandwidth usage per second</p>
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
                          <a href="https://statoshi.info/dashboard/db/bandwidth-usage" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td>
                          <a
                            href="https://statoshi.info/dashboard/db/bandwidth-usage"
                            rel="noopener noreferrer"
                            target="_blank"><font size="3" color="white">
                            Statoshi</font></a></td>
                         <td width="70%">Received Bytes (Max  & Avg in Kbps); Sent Bytes (Max in Mbps & Avg in Kbps)</td>
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
                  <p className="category">Bandwidth usage / Total Bandwidth used since last restart</p>
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
                          <a href="https://statoshi.info/dashboard/db/bandwidth-usage" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td>
                         <a
                         href="https://statoshi.info/dashboard/db/bandwidth-usage"
                         rel="noopener noreferrer"
                         target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Total Byte Received (current  in GiB); Total Byte Sent (current in GiB)</td>
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
                  <p className="category">Bandwidth usage / Incoming Bandwidth usage by message</p>
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
                          <a href="https://statoshi.info/dashboard/db/bandwidth-usage" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td>
                          <a
                           href="https://statoshi.info/dashboard/db/bandwidth-usage"
                           rel="noopener noreferrer"
                           target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">The max and avg Bitcoin incoming message size</td>
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
                  <p className="category">Bandwidth usage / Outgoing Bandwidth usage by message</p>
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
                          <a href="https://statoshi.info/dashboard/db/bandwidth-usage" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td>
                         <a
                           href="https://statoshi.info/dashboard/db/bandwidth-usage"
                           rel="noopener noreferrer"
                           target="_blank"><font size="3" color="white">Statoshi</font>
                        </a></td>
                         <td width="70%">The max and avg Bitcoin outgoing message size</td>
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
                  <p className="category">Bandwidth usage / Total Incoming Bandwidth usage by message</p>
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
                          <a href="https://statoshi.info/dashboard/db/bandwidth-usage" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td>
                         <a
                           href="https://statoshi.info/dashboard/db/bandwidth-usage"
                           rel="noopener noreferrer"
                           target="_blank"><font size="3" color="white">Statoshi</font>
                         </a></td>
                         <td width="70%">Current Bitcoin incoming message size (currently connected peers)</td>
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
                  <p className="category">Bandwidth usage / Total Outgoing Bandwidth usage by message</p>
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
                          <a href="https://statoshi.info/dashboard/db/bandwidth-usage" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td>
                         <a
                           href="https://statoshi.info/dashboard/db/bandwidth-usage"
                           rel="noopener noreferrer"
                           target="_blank"><font size="3" color="white">Statoshi</font>
                         </a></td>
                         <td width="70%">Current Bitcoin outgoing message size (currently connected peers)</td>
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
                  <p className="category">Bandwidth usage / 95th Percentile Bandwidth Usage</p>
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
                          <a href="https://statoshi.info/dashboard/db/bandwidth-usage" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td>
                          <a
                            href="https://statoshi.info/dashboard/db/bandwidth-usage"
                            rel="noopener noreferrer"
                            target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Top 5% bandwidth spikes</td>
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

export default BandwidthUsage;
