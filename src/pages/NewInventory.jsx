import React, { useContext, useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import "./Pages.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InventoryContext } from "./InventoryContext";

const { TextArea } = Input;
const { Option } = Select;

const NewInventoryItem = () => {
  const [imageList, setImageList] = useState([]);
  const [longDescription, setLongDescription] = useState("");
  const [inventoryData, setInventoryData] = useState({
    discount: false,
    expiryDate: false,
    returnpolicy: false,
    productName: "",
    productCategory: "",
    selling_price: "",
    cost_price: "",
    quantity_stock: "",
    short_description: "",
    order_type: "",
  });
  const [productName, setProductName] = useState("");
  const [productLink, setProductLink] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const { setInventory, setNewInventory } = useContext(InventoryContext);

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const values = state;
    console.log(values, "v");
    setInventoryData({
      discount: state?.discount,
      expiryDate: state?.expiryDate,
      returnpolicy: state?.returnpolicy,
      productName: state?.productName,
      productCategory: state?.productCategory,
      selling_price: state?.selling_price,
      cost_price: state?.cost_price,
      quantity_stock: state?.quantity_stock,
      short_description: state?.short_description,
      order_type: state?.order_type,
    });
  }, [state]);
  console.log(inventoryData, "in");

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

  // useEffect(()=>{
  //   console.log("Trigger");

  // },[editData])

  const handleSaveAndPublish = () => {
    const image = imageList[0];
    let imageUrl = null;

    if (image?.originFileObj) {
      imageUrl = URL.createObjectURL(image.originFileObj);
    } else if (image?.url) {
      imageUrl = image.url;
    }

    setInventory((preveInventory) => ({
      ...preveInventory,
      image: imageUrl,
      productName,
      productLink,
      date,
      time,
      // inventoryData
    }));
    setNewInventory({
      ...inventoryData,
      image: imageUrl,
      long_description: longDescription,
    });

    navigate("/viewinventory");
  };

  console.log(location, "location");
  const handleChangeText = (event, type) => {
    if (type === "productName") {
      setInventoryData((prevState) => ({
        ...prevState,
        productName: event.target.value,
      }));
    } else if (type === "productCategory") {
      setInventoryData((prevState) => ({
        ...prevState,
        productCategory: event,
      }));
    } else if (type === "sellingPrice") {
      setInventoryData((prevState) => ({
        ...prevState,
        selling_price: event.target.value,
      }));
    } else if (type === "costprice") {
      setInventoryData((prevState) => ({
        ...prevState,
        cost_price: event.target.value,
      }));
    } else if (type === "quantityinstock") {
      setInventoryData((prevState) => ({
        ...prevState,
        quantity_stock: event.target.value,
      }));
    } else if (type === "shortdiscription") {
      setInventoryData((prevState) => ({
        ...prevState,
        short_description: event.target.value,
      }));
    } else if (type === "ordertype") {
      setInventoryData((prevState) => ({
        ...prevState,
        order_type: event,
      }));
    }
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
            onClick={handleSaveAndPublish}
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
              <Input
                placeholder="Enter Product Name"
                onChange={(e) => handleChangeText(e, "productName")}
                value={inventoryData?.productName}
              />
              <label>Product Category</label>
              <Select
                placeholder="Select Product Category"
                onChange={(e) => handleChangeText(e, "productCategory")}
                value={inventoryData?.productCategory}
              >
                <Option value="gadgets">Gadgets</Option>
                <Option value="fashion">Fashion</Option>
                <Option value="footwear">Footwear</Option>
              </Select>
              <div className="price-stock">
                <div>
                  <label>Selling Price</label>
                  <Input
                    placeholder="Selling Price"
                    onChange={(e) => handleChangeText(e, "sellingPrice")}
                    value={inventoryData?.selling_price}
                  />
                </div>
                <div>
                  <label>Cost Price</label>
                  <Input
                    placeholder="Cost Price"
                    onChange={(e) => handleChangeText(e, "costprice")}
                    value={inventoryData?.cost_price}
                  />
                </div>
              </div>
              <label>Quantity in Stock</label>
              <Input
                type="number"
                min={0}
                placeholder="Quantity in Stock"
                onChange={(e) => handleChangeText(e, "quantityinstock")}
                value={inventoryData?.quantity_stock}
              />
              <label>Order Type</label>
              <Select
                placeholder="Select Order Type"
                onChange={(e) => handleChangeText(e, "ordertype")}
                value={inventoryData?.order_type}
              >
                <Option value="single">Single</Option>
                <Option value="bulk">Bulk</Option>
              </Select>
              <div className="discount-expiry">
                <label>Discount</label>
                <div className="discount-expiry1">
                  <p>Add Discount</p>
                  <Switch
                    onChange={(e) => handleChange(e, "discount")}
                    value={inventoryData?.discount}
                  />
                </div>
              </div>
              {inventoryData?.discount && (
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

              {inventoryData?.expiryDate && (
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
              <TextArea
                placeholder="Enter short description"
                rows={3}
                onChange={(e) => handleChangeText(e, "shortdiscription")}
                value={inventoryData?.short_description}
              />
              <div>
                <label>Product Long Description</label>
                <div
                  style={{
                    maxWidth: "360px",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  <ReactQuill
                    style={{ maxWidth: "100%" }}
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
                </div>
              </div>
              <div className="return-policy">
                <label>Return Policy</label>
                <Switch onChange={(e) => handleChange(e, "returnpolicy")} />
              </div>
              {inventoryData?.returnpolicy && (
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
              {/* First Image */}
              {imageList.length > 0 && (
                <div className="first-image">
                  <Card className="image-card">
                    <img
                      src={
                        imageList[0].url ||
                        URL.createObjectURL(imageList[0].originFileObj)
                      }
                      alt="first-preview"
                    />
                    <div className="image-actions">
                      <Button icon={<CloudUploadOutlined />} />
                      <Button
                        icon={<DeleteOutlined />}
                        onClick={() =>
                          setImageList(imageList.filter((_, i) => i !== 0))
                        }
                      />
                    </div>
                  </Card>
                </div>
              )}

              {/* Additional Images */}
              <div className="additional-images">
                {imageList.slice(1).map((file, index) => (
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
                          setImageList(
                            imageList.filter((_, i) => i !== index + 1)
                          )
                        }
                      />
                    </div>
                  </Card>
                ))}
              </div>

              {/* Upload Button */}
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
