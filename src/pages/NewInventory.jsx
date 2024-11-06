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
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  CloudUploadOutlined,
  SaveOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "./Pages.css";

const { TextArea } = Input;
const { Option } = Select;

const NewInventoryItem = () => {
  const [imageList, setImageList] = useState([]);

  const handleImageUpload = ({ fileList }) => setImageList(fileList);

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
        <div className="inventory-item-form">
          <div className="form-section">
            <Input placeholder="Enter Product Name" />
            <Select placeholder="Select Product Category">
              <Option value="gadgets">Gadgets</Option>
              <Option value="fashion">Fashion</Option>
              <Option value="footwear">Footwear</Option>
            </Select>

            <div className="price-stock">
              <Input placeholder="Selling Price" />
              <Input placeholder="Cost Price" />
            </div>

            <Input type="number" min={0} placeholder="Quantity in Stock" />

            <Select placeholder="Select Order Type">
              <Option value="single">Single</Option>
              <Option value="bulk">Bulk</Option>
            </Select>

            <div className="discount-expiry">
              <div>
                <label>Discount</label>
                <Switch />
              </div>
              <div>
                <label>Expiry Date</label>
                <Switch />
              </div>
            </div>

            <div className="discount-value">
              <Select placeholder="Type">
                <Option value="percentage">Percentage</Option>
                <Option value="fixed">Fixed</Option>
              </Select>
              <Input placeholder="Value" />
            </div>

            <div className="expiry-date">
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

          <div className="description-section">
            <label>Short Description</label>
            <TextArea placeholder="Enter short description" rows={3} />

            <label>Product Long Description</label>
            <TextArea placeholder="Enter long description" rows={6} />

            <div className="return-policy">
              <label>Return Policy</label>
              <Switch />
            </div>

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
        </div>

        <div className="additional-images-section">
          <h3>Additional Images</h3>
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
      </div>
    </Layout>
  );
};

export default NewInventoryItem;
