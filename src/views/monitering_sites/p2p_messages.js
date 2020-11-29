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

class P2P_Messages extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">P2P messages / All Messages Received</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Total Bitcoin received  messages per second</td>
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
                  <p className="category">P2P messages / All Messages Sent</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Total Bitcoin sent  messages per second</td>
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
                  <p className="category">P2P messages / addr</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average received/sent addr messages per second</td>
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
                  <p className="category">P2P messages / getData</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average received/sent getdata messages per second</td>
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
                  <p className="category">P2P messages / inv</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average received/sent inv messages per second</td>
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
                  <p className="category">P2P messages / tx</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average received/sent tx messages per second</td>
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
                  <p className="category">P2P messages / ping</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average received/sent ping messages per second</td>
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
                  <p className="category">P2P messages / pong</p>
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
                         <td><a href="https://statoshi.info/dashboard/db/transactions" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average received/sent pong messages per second</td>
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

export default P2P_Messages;
