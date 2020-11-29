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

class Script_Types extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <p className="category">Script Types</p>
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
                          <a href="https://btc.com/stats/script" rel="noopener noreferrer" target="_blank">
                          <img
                            alt="..."
                            src={require("../../assets/img/btc.png")}
                          />
                          </a>
                        </div>
                        </td>
                        <td><a href="https://btc.com/stats/script" rel="noopener noreferrer" target="_blank"><font size="3" color="white">BTC</font></a></td>
                        <td width="70%">Displays transactions amount of each script (Inputs/Outputs in BTC and inputs count) per block</td>
                        <td>Bar & Diagramme circulaire charts</td>
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

export default Script_Types;
