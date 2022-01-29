import React from "react";
import { Row, Col } from "antd";

import "./Index.less";

const Index = () => {
  return (
    <div className="index">
      <Row className="cards-row">
        <Col span={12}>first col</Col>
        <Col span={6}>second col</Col>
        <Col span={6}>third col</Col>
      </Row>
    </div>
  );
};

export default Index;
