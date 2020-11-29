import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="copyright text-center">
            © BCMon{" "}2019{" "}
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
