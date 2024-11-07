import React, { useState } from "react";
import {
  Layout,
  Input,
  Select,
  Button,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Card,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  CloudUploadOutlined,
  SaveOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Pages.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { TextArea } = Input;
const { Option } = Select;

const NewInventoryItem = () => {
  const [imageList, setImageList] = useState([]);
  const [longDescription, setLongDescription] = useState("");
  const [inventoryData, setInventoryData] = useState({
    discount: false,
    expiryDate: false,
    returnpolicy: false,
  });

  const handleChangenew = (value) => {
    setLongDescription(value);
  };

  const navigate = useNavigate();

  const handleImageUpload = ({ fileList }) => setImageList(fileList);

  const handleChange = (event, type) => {
    setInventoryData((prevState) => ({
      ...prevState,
      [type]: event,
    }));
  };

  return (
    <Layout className="inventory-item-layout">
      <div className="inventory-item-header">
        <h2>New Inventory Item</h2>
        <div>
          <Button
            style={{ background: "#000", color: "#fff" }}
            className="save-publish"
            icon={<SaveOutlined />}
          >
            Save as Draft
          </Button>
          &emsp;
          <Button
            type="primary"
            className="save-publish"
            icon={<PlusOutlined />}
            onClick={() => navigate("/viewinventory")}
          >
            Save & Publish
          </Button>
        </div>
      </div>
      <div className="inventory-item-container">
        <div className="left-section shadow_effects">
          <div className="inventory-item-form">
            <div className="form-section">
              <label>Product Name</label>
              <Input placeholder="Enter Product Name" />
              <label>Product Category</label>
              <Select placeholder="Select Product Category">
                <Option value="gadgets">Gadgets</Option>
                <Option value="fashion">Fashion</Option>
                <Option value="footwear">Footwear</Option>
              </Select>
              <div className="price-stock">
                <div>
                  <label>Selling Price</label>
                  <Input placeholder="Selling Price" />
                </div>
                <div>
                  <label>Cost Price</label>
                  <Input placeholder="Cost Price" />
                </div>
              </div>
              <label>Quantity in Stock</label>
              <Input type="number" min={0} placeholder="Quantity in Stock" />
              <label>Order Type</label>
              <Select placeholder="Select Order Type">
                <Option value="single">Single</Option>
                <Option value="bulk">Bulk</Option>
              </Select>
              <div className="discount-expiry">
                <label>Discount</label>
                <div className="discount-expiry1">
                  <p>Add Discount</p>
                  <Switch onChange={(e) => handleChange(e, "discount")} />
                </div>
              </div>
              {inventoryData.discount && (
                <div className="discount_drop">
                  <div style={{ width: "50%" }}>
                    <label>Type</label>
                    <Select placeholder="Type">
                      <Option value="percentage">Percentage</Option>
                      <Option value="fixed">Fixed</Option>
                    </Select>
                  </div>
                  <div>
                    <label>Value</label>
                    <Input placeholder="Value" />
                  </div>
                </div>
              )}
              <div className="discount-expiry">
                <label>Expiry Date</label>
                <div className="discount-expiry1">
                  <p>Add Expiry Date</p>
                  <Switch onChange={(e) => handleChange(e, "expiryDate")} />
                </div>
              </div>
             
              {inventoryData.expiryDate && (
                <div className="discount_drop">
                  <div style={{ width: "50%" }}>
                    <label>Select Date</label>
                    <DatePicker
                      placeholder="Select Date"
                      suffixIcon={<CalendarOutlined />}
                    />
                  </div>
                  <div>
                    <label>Select Time</label>
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
              <ReactQuill
                value={longDescription}
                onChange={handleChangenew}
                placeholder="Enter long description"
                theme="snow"
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline"],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ["link", "image"],
                  ],
                }}
              />
              <p>Add a Long Description for your Product.</p>
              <div className="return-policy">
                <label>Return Policy</label>
                <Switch onChange={(e) => handleChange(e, "returnpolicy")} />
              </div>
              {inventoryData.returnpolicy && (
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
              )}
            </div>
          </div>
        </div>
        <div className="right-section shadow_effects">
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
                  <div>Upload Image</div>
                </div>
              </Upload>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewInventoryItem;
