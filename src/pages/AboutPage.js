import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

import React from "react";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us" />
      <Row className="row-content">
        <Col sm="6">
          <h3>Our Mission</h3>
          <p>
            We present a curated database of the best campsites in the vast
            woods and backcountry of the World Wide Web Wilderness. We increase
            access to adventure for the public while promoting safe and
            respectful use of resources. The expert wilderness trekkers on our
            staff personally verify each campsite to make sure that they are up
            to our standards. We also present a platform for campers to share
            reviews on campsites they have visited with each other.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <Row tog="dl">
                <Col xs="6" tag="dt">
                  Founded
                </Col>
                <Col xs="6" tag="dd">
                  February 3, 2016
                </Col>
                <Col xs="6" tag="dt">
                  No. of Campsites in 2019
                </Col>
                <Col xs="6" tag="dd">
                  563
                </Col>
                <Col xs="6" tag="dt">
                  No. of Reviews in 2019
                </Col>
                <Col xs="6" tag="dd">
                  4388
                </Col>
                <Col xs="6" tag="dt">
                  Employees
                </Col>
                <Col xs="6" tag="dd">
                  42
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                  I will not follow where the path may lead, but I will go where
                  there is no path, and I will leave a trail.
                </p>
                <footer className="blockquote-footer">
                  Muriel Strode,{" "}
                  <cite title="Source Title">
                    "Wind-Wafted Wild Flowers" - The Open Court, 1903
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <PartnersList />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
