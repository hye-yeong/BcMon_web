import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import { VectorMap } from "react-jvectormap";
import { Card, CardHeader, CardTitle, CardBody, Table, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { hasFlag } from 'country-flag-icons'
import ReactCountryFlag from "react-country-flag"

class bitcoin_forensic extends React.Component {
  render() {
    return(
      <>
        <div className="content">
          <h2 className="text-center">Bitcoin Forensic</h2>
            <div className="title content">
              <Row>
                <Col md="12">
                  <Card className="card-management-firstoutline">
                    <CardHeader>
                      <CardTitle>
                        <h3>Bitcoin explorer</h3>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Col>
                <Col md="12">
                  <Card className="card-management-evenoutline">
                    <CardHeader>
                      <CardTitle>
                        <h3>Estimating wallets and bitcoins owned by Satoshi using Hash-rate</h3>
                        <p>비트코인 해시레이트 변화율을 이용한 사토시 나카모토의 비트코인 보유량 추적</p>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Col>
                <Col md="12">
                  <Card className="card-management-evenoutline">
                    <CardHeader>
                      <CardTitle>
                        <h3>Illegal transaction's BTC tracking</h3>
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

export default bitcoin_forensic
