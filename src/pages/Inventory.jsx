import React from "react";
import icon1 from "../assets/images/cardicon1.png";
import { Col, Row } from "antd";
import "./inventory.css";

function Inventory() {
  return (
    <div>
      <div className="all_cards">
        <div className="card_container">
          <img src={icon1} alt="" />
          <Row>
            <Col span={12}>
              <p>All Products</p>
              <p>350</p>
            </Col>
            <Col span={12}>
              <p>Active</p>
              <p>
                316 <span>86%</span>
              </p>
            </Col>
          </Row>
        </div>
        <div className="card_container">
          <img src={icon1} alt="" />
          <Row>
            <Col span={8}>
              <p>Low Stock Alert</p>
              <p>23</p>
            </Col>
            <Col span={8}>
              <p>Expired</p>
              <p>3</p>
            </Col>
            <Col span={8}>
              <p>1 Start Rating</p>
              <p>2</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
