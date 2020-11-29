import React from "react";
import ReactTable from "react-table";
import { ReactTableDefaults } from 'react-table'
import "react-table/react-table.css";
import { makeBlockData } from './explorerUtils'
import { Card, Table } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class bitcoinExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastBlockHeight: 0 };
  }

  render() {
    Object.assign(ReactTableDefaults, {
      sortable: false
    })
    const { data } = this.state;
    return (
      <>
        <div className="content">
          <h2 className="text-center">Bitcoin Explorer</h2>
          <p className="category text-center">
            .
            </p>

          <Card className="card-chart">
            <ReactTable
              data={makeBlockData(583932)}
              columns={[
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Height</div>
                  ),
                  id: "height",
                  accessor: d => d.height,
                  sortable: true,
                  width: 100,
                  Cell: e => <Link to={"/admin/bitcoin/explorer/blockInfo/" + e.value}>{e.value}</Link>
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Timestamp (UTC)</div>
                  ),
                  accessor: "timestamp",
                  width: 150
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Age</div>
                  ),
                  accessor: "age",
                  width: 70
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Miner</div>
                  ),
                  accessor: "miner",
                  width: 100
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Transactions</div>
                  ),
                  accessor: "transactions",
                  width: 150
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Average Fee</div>
                  ),
                  accessor: "averageFee",
                  width: 100
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Size (Bytes)</div>
                  ),
                  accessor: "size",
                  width: 100
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left-align" }}>Weights (wu)</div>
                  ),
                  accessor: "weight",
                  width: 100
                }
              ]}
              defaultSorted={[
                {
                  id: "height",
                  desc: true
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
              resizable={false}
            />
          </Card>
        </div>
      </>
    );
  }


}

export default bitcoinExplorer;
