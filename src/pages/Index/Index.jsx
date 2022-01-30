import React from "react";
import { Row, Col } from "antd";

import "./Index.less";
import Card from "./Card";
import BottomBar from "./BottomBar";

const Index = () => {
  return (
    <div className="index">
      <Row gutter={12}>
        <Col span={12} className="cards-col">
          <Card
            imgUrl="https://images.unsplash.com/photo-1643447946892-2d099c1b1718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2572&q=80"
            title="文章"
            content=""
          />
        </Col>
        <Col span={6} className="cards-col">
          <Card
            imgUrl="https://images.unsplash.com/photo-1643444685512-a269a9b64948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            title="摄影作品"
            content=""
          />
          <Card
            imgUrl="https://images.unsplash.com/photo-1643474662507-c19e1c3c8e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            title="音频"
            content=""
          />
        </Col>
        <Col span={6} className="cards-col">
          <Card
            imgUrl="https://images.unsplash.com/photo-1643446757604-c2b7c45c45dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            title="视频"
            content=""
          />
          <Card
            imgUrl="https://images.unsplash.com/photo-1643307273240-1a3bbce3ac59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            title="古诗词"
            content=""
          />
        </Col>
      </Row>
      <BottomBar />
    </div>
  );
};

export default Index;
