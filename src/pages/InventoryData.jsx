import React, { useState } from "react";
import {
  Card,
  Table,
  Input,
  Button,
  Tag,
  Pagination,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShareAltOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import FilterListIcon from '@mui/icons-material/FilterList';
import image1 from '../assets/images/cardicon1.png';
import "./Pages.css";
import { useNavigate } from "react-router-dom";

const InventoryData = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => setSearchText(e.target.value);

  const dataSource = [
    {
      key: 1,
      productName: "iPhone 13 Pro",
      category: "Gadgets",
      unitPrice: "₦1,225,000.00",
      inStock: 8,
      discount: "₦0.00",
      totalValue: "₦50,000.00",
      status: "Published",
      image: "https://www.apple.com/v/iphone-13/x/images/overview/hero/hero_iphone_13__d8nmebfdy6ki_large_2x.jpg",
      productLink: "https://www.apple.com/iphone-13-pro/",
    },
    {
      key: 2,
      productName: "iPhone 12 Pro",
      category: "Gadgets",
      unitPrice: "₦725,000.00",
      inStock: 12,
      discount: "₦0.00",
      totalValue: "₦50,000.00",
      status: "Published",
      image: "https://www.apple.com/v/iphone-12/x/images/overview/hero/hero_iphone_12__lqfoelomqtqi_large_2x.jpg",
      productLink: "https://www.apple.com/iphone-12-pro/",
    },
    {
      key: 3,
      productName: "Polo T-Shirt",
      category: "Fashion",
      unitPrice: "₦125,000.00",
      inStock: 120,
      discount: "₦0.00",
      totalValue: "₦50,000.00",
      status: "Unpublished",
      image: "https://www.example.com/polo-tshirt.jpg",
      productLink: "https://www.example.com/polo-tshirt",
    },
    {
      key: 4,
      productName: "Nike Sneakers",
      category: "Footwear",
      unitPrice: "₦85,000.00",
      inStock: 30,
      discount: "₦0.00",
      totalValue: "₦50,000.00",
      status: "Published",
      image: "https://www.example.com/nike-sneakers.jpg",
      productLink: "https://www.example.com/nike-sneakers",
    },
    {
      key: 5,
      productName: "Samsung Galaxy S21",
      category: "Gadgets",
      unitPrice: "₦1,000,000.00",
      inStock: 15,
      discount: "₦0.00",
      totalValue: "₦50,000.00",
      status: "Unpublished",
      image: "https://www.samsung.com/global/galaxy/galaxy-s21-5g/_images/overview/galaxy-s21-ultra-front-01.jpg",
      productLink: "https://www.samsung.com/galaxy-s21/",
    },
  ];

  const columns = [
    {
      title: (
        <div>
          &emsp;Product Name &emsp;
          <FilterListIcon style={{ height: "15px", width: "15px", marginTop: "8px" }} />
        </div>
      ),
      dataIndex: "productName",
      key: "productName",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record.image}
            alt={text}
            style={{ width: 30, height: 30, marginRight: 8 }}
          />
          <a
            href={record.productLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1890ff", textDecoration: "none" }}
          >
            <span>{text}</span>
          </a>
        </div>
      ),
    },
    {
      title: (
        <div>
          &emsp;Category &emsp;
          <FilterListIcon style={{ height: "15px", width: "15px", marginTop: "8px" }} />
        </div>
      ),
      dataIndex: "category",
      key: "category",
    },
    {
      title: (
        <div>
          &emsp;Unit Price&emsp; <FilterListIcon style={{ height: "15px", width: "15px", marginTop: "8px" }} />
        </div>
      ),
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: (
        <div>
          &emsp;In-Stock&emsp; <FilterListIcon style={{ height: "15px", width: "15px", marginTop: "8px" }} />
        </div>
      ),
      dataIndex: "inStock",
      key: "inStock",
    },
    {
      title: (
        <div>
          &emsp;Discount &emsp;
          <FilterListIcon style={{ height: "15px", width: "15px", marginTop: "8px" }} />
        </div>
      ),
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: (
        <div>
          &emsp;Total Value&emsp; <FilterListIcon style={{ height: "15px", width: "15px", marginTop: "8px" }} />
        </div>
      ),
      dataIndex: "totalValue",
      key: "totalValue",
    },
    {
      title: (
        <div>
          &emsp;Status&emsp; <FilterListIcon style={{ height: "15px", width: "15px", marginTop: "8px" }} />
        </div>
      ),
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Published" ? "blue" : "orange"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="inventory-container">
      <div className="inventoryheader">
        <h2>Inventory Summary</h2>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => navigate("/new-inventory-item")}
        >
          Add New Product
        </Button>
      </div>

      <div className="inventory-summary-cards">
        <Card className="" style={{background:"#33acff"}}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "50%" }}>
              <p>All Products</p>
              <p>350</p>
            </div>
            <div>
              <p>Active</p>
              <p>316 <span style={{ fontSize: "10px", color: "#DBDEEE" }}>86%</span></p>
            </div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={image1} alt="" />
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "33.3%" }}>
              <p>Low Stock Alert</p>
              <p>23</p>
            </div>
            <div style={{ width: "33.3%" }}>
              <p>Expired</p>
              <p>3</p>
            </div>
            <div>
              <p>1 Star Rating</p>
              <p>2</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="inventory-actions">
        <h3>Inventory Items</h3>
        <div style={{ float: "right" }}>
          <Input
            className="search-input"
            placeholder="Search"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={handleSearch}
          />
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button icon={<ShareAltOutlined />}>Share</Button>
          <Button>Inventory Items</Button>
          <Button>Bulk Actions</Button>
        </div>
      </div>

      <Table
        rowSelection={{ type: "checkbox" }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey="key"
      />

      <div className="inventory-pagination">
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
    </div>
  );
};

export default InventoryData;
