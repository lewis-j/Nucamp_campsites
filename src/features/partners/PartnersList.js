import React from "react";
import { Row, Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";

const PartnersList = () => {
  const partners = selectAllPartners();
  return (
    <Col className="mt-4">
      <Row>
        {partners.map((partner) => (
          <div className="d-flex mb-5" key={partner.id}>
            <Partner partner={partner} />
          </div>
        ))}
      </Row>
    </Col>
  );
};

export default PartnersList;
