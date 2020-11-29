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

class BlockchainWallet extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <p className="category">Blockchain wallet activity / Blockchain Wallet Users </p>
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
                          <a href="https://www.blockchain.com/charts/my-wallet-n-users" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/bitcoininfo.png")}
                          />
                          </a>
                        </div>
                        </td>
                        <td><a href="https://www.blockchain.com/charts/my-wallet-n-users" rel="noopener noreferrer" target="_blank"><font size="3" color="white">Blockchain</font></a></td>
                        <td width="70%">The Estimated bitcoin wallets active in the network.</td>
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

export default BlockchainWallet;
