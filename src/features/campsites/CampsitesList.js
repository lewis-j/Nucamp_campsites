import CampsiteCard from "./CampsiteCard";
import { Row, Col } from "reactstrap";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
  const campsites = selectAllCampsites();
  return (
    <Row>
      {campsites.map((campsite) => {
        return (
          <Col md="5" className="m-4" key={campsite.id}>
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
