import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { VectorMap } from "react-jvectormap";
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { hasFlag } from 'country-flag-icons'
import ReactCountryFlag from "react-country-flag"

class icmp_component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="content">
          <h2 className="text-center">Management</h2>
          <div className="title content">
            <Row>
              <Col md="12">
                <Card className="card-management-firstoutline">
                  <CardHeader>
                    <CardTitle>
                      <h3>Bitcoin Network Realtime Monitoring</h3>
                      <p>The network data is SNMP data collected in Real-time from nodes in the Blockchain network, and monitoring can be performed to determine the status of the network.</p>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default icmp_component;
