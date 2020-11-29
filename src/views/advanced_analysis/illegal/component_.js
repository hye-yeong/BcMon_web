import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { VectorMap } from "react-jvectormap";
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { hasFlag } from 'country-flag-icons'
import ReactCountryFlag from "react-country-flag"

class illegal_component extends React.Component {
  render() {
    return(
      <>
        <div className="content">
          <h2 className="text-center">Illegal</h2>
            <div className="title content">
              <Row>
                <Col md="12">
                  <Card className="card-firstoutline">
                    <CardHeader>
                      <CardTitle>
                        <h3>Illegal Transction Detection</h3>
                      </CardTitle>
                    </CardHeader>
                    <Row>
                      <Col md="12">
                        <Card>
                            <CardBody>
                              <p>&nbsp;&nbsp;Enter Transaction ID&nbsp;&nbsp;&nbsp;<input type='text' maxLength='20' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Result&nbsp;&nbsp;<input type='text' maxLength='10' /></p>
                            </CardBody>
                        </Card>
                      </Col>
                      </Row>
                  </Card>
                </Col>
              </Row>
            </div>
        </div>
      </>
    );
  }
}

export default illegal_component
