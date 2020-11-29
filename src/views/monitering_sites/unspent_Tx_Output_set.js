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

class Unspent_tx_output_set extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <p className="category">Unspent Transaction Output Set / Total Transactions Unspent Outputs</p>
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
                          <a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average Transaction with unspent outputs</td>
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
                  <p className="category">Unspent Transaction Output Set / Unspent Transactions Outputs</p>
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
                          <a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average unspent outputs within a Transactions </td>
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
                  <p className="category">Unspent Transaction Output Set / Size of Serialized UTXO set</p>
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
                          <a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Average size of serialized UTXO set in GiB</td>
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
                  <p className="category">Unspent Transaction Output Set / Total Bitcoins in Existence</p>
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
                          <a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank">
                              <img
                                alt="..."
                                src={require("../../assets/img/statoshi.png")}
                                />
                            </a>
                          </div>
                         </td>
                         <td><a href="https://statoshi.info/dashboard/db/unspent-transaction-output-set" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Statoshi</font></a></td>
                         <td width="70%">Total amount of BTC in circulation</td>
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

export default Unspent_tx_output_set;
