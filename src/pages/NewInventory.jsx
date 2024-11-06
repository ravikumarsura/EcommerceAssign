import React, { useState } from "react";
import {
  Layout,
  Input,
  Select,
  Button,
  Switch,
  DatePicker,
  TimePicker,
  Card,
  Upload,
  Row,
  Col,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  CloudUploadOutlined,
  SaveOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import "./Pages.css";
import Dragger from "antd/es/upload/Dragger";

const { TextArea } = Input;
const { Option } = Select;

const NewInventoryItem = () => {
  const [imageList, setImageList] = useState([]);
  const [inventoryData, setInventoryData] = useState({
    discount: false,
    expiryDate: false,
    returnpolicy: false
  });

  const handleImageUpload = ({ fileList }) => setImageList(fileList);

  const handleChange = (event, type) => {
    if (type === "discount") {
      setInventoryData((prevState) => ({
        ...prevState,
        discount: event,
      }));
    }
    if (type === "expiry") {
      setInventoryData((prevState) => ({
        ...prevState,
        expiryDate: event,
      }));
    }
    if (type === "returnpolicy") {
      setInventoryData((prevState) => ({
        ...prevState,
        returnpolicy: event,
      }));
    }
  };

  console.log(inventoryData, "inventory");

  return (
    <Layout className="inventory-item-layout">
      <div className="inventory-item-header">
        <h2>New Inventory Item</h2>
        <div style={{ float: "right" }}>
          <Button className="save-draft" icon={<SaveOutlined />}>
            Save as Draft
          </Button>
          &emsp;
          <Button
            type="primary"
            className="save-publish"
            icon={<PlusOutlined />}
          >
            Save & Publish
          </Button>
        </div>
      </div>
      <div className="inventory-item-container">
        <Row className="inventory_container">
          <Col span={17} className="shadow_effects">
            <div className="inventory-item-form">
              <div className="form-section">
                <label htmlFor="">Product Name</label>
                <Input placeholder="Enter Product Name" />
                <label htmlFor="">Product Category</label>
                <Select placeholder="Select Product Category">
                  <Option value="gadgets">Gadgets</Option>
                  <Option value="fashion">Fashion</Option>
                  <Option value="footwear">Footwear</Option>
                </Select>

                <div className="price-stock">
                  <div>
                    <label htmlFor="">Selling Price</label>
                    <Input placeholder="Selling Price" />
                  </div>
                  <div>
                    <label htmlFor="">Cost Price</label>
                    <Input placeholder="Cost Price" />
                  </div>
                </div>

                <label htmlFor="">Quantity in Stock</label>
                <Input type="number" min={0} placeholder="Quantity in Stock" />

                <label htmlFor="">Order Type</label>
                <Select placeholder="Select Order Type">
                  <Option value="single">Single</Option>
                  <Option value="bulk">Bulk</Option>
                </Select>

                <div>
                  <div className="discount-expiry">
                    <label>Discount</label>
                    <div className="discount-expiry1">
                      <p>Add Discount</p>
                      <Switch onChange={(e) => handleChange(e, "discount")} />
                    </div>
                  </div>
                  <div className="discount-expiry">
                    <label>Expiry Date</label>
                    <div className="discount-expiry1">
                      <p>Add Expiry Date</p>
                      <Switch onChange={(e) => handleChange(e, "expiry")} />
                    </div>
                  </div>
                </div>

                {inventoryData.discount && (
                  <div className="discount_drop">
                    <div style={{ width: "50%" }}>
                      <label htmlFor="">Type</label>
                      <div style={{ width: "100%" }}>
                        <Select placeholder="Type">
                          <Option value="percentage">Percentage</Option>
                          <Option value="fixed">Fixed</Option>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="">Value</label>
                      <Input placeholder="Value" />
                    </div>
                  </div>
                )}

                {inventoryData.expiryDate && (
                  <div className="discount_drop">
                    <div style={{ width: "50%" }}>
                      <label htmlFor="">Select Date</label>
                      <DatePicker
                        placeholder="Select Date"
                        suffixIcon={<CalendarOutlined />}
                      />
                    </div>
                    <div>
                      <label htmlFor="">Select Time</label>
                      <TimePicker
                        placeholder="Select Time"
                        suffixIcon={<ClockCircleOutlined />}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="description-section">
                <label>Short Description</label>
                <TextArea placeholder="Enter short description" rows={3} />

                <label>Product Long Description</label>
                <TextArea placeholder="Enter long description" rows={6} />
                <p>Add a long description for your product</p>

                <div className="return-policy">
                  <label>Return Policy</label>
                  <Switch onChange={(e) => handleChange(e, "returnpolicy")} />
                </div>
                {inventoryData.returnpolicy &&(
                  <div>
                    <label>Date Added</label>
                    <div className="date-time-picker">
                      <DatePicker
                        placeholder="Select Date"
                        suffixIcon={<CalendarOutlined />}
                      />
                      <TimePicker
                        placeholder="Select Time"
                        suffixIcon={<ClockCircleOutlined />}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col span={6} className="shadow_effects">
            <div className="additional-images-section">
              <h3>Additional Images</h3>
              {/* <Dragger onChange={handleImageUpload}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Upload a cover image for your product.
                </p>
                <p className="ant-upload-hint">
                  File Format jpeg, png Recommened Size 600x600 (1:1)
                </p>
              </Dragger> */}
              <div className="images-list">
                {imageList.map((file, index) => (
                  <Card key={index} className="image-card">
                    <img
                      src={file.url || URL.createObjectURL(file.originFileObj)}
                      alt="preview"
                    />
                    <div className="image-actions">
                      <Button icon={<CloudUploadOutlined />} />
                      <Button
                        icon={<DeleteOutlined />}
                        onClick={() =>
                          setImageList(imageList.filter((_, i) => i !== index))
                        }
                      />
                    </div>
                  </Card>
                ))}
                <Upload
                  listType="picture-card"
                  fileList={imageList}
                  onChange={handleImageUpload}
                  showUploadList={false}
                >
                  <div className="upload-image">
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload Image</div>
                  </div>
                </Upload>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default NewInventoryItem;