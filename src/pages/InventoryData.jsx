import React, { useState } from "react";
import {
  Card,
  Table,
  Input,
  Button,
  Tag,
  Checkbox,
  Pagination,
  Dropdown,
  Menu,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShareAltOutlined,
  PlusOutlined,
  DownloadOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./Pages.css";

const InventoryData = () => {
  const [searchText, setSearchText] = useState("");

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
    },
  ];

  const columns = [
    {
      title: (
        <div>
          &emsp;Product Name &emsp;
          <MenuOutlined />
        </div>
      ),
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: (
        <div>
          &emsp;Category &emsp;
          <MenuOutlined />
        </div>
      ),
      dataIndex: "category",
      key: "category",
    },
    {
      title: (
        <div>
          &emsp;Unit Price&emsp; <MenuOutlined />
        </div>
      ),
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: (
        <div>
          &emsp;In-Stock&emsp; <MenuOutlined />
        </div>
      ),
      dataIndex: "inStock",
      key: "inStock",
    },
    {
      title: (
        <div>
          &emsp;Discount &emsp;
          <MenuOutlined />
        </div>
      ),
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: (
        <div>
          &emsp;Total Value&emsp; <MenuOutlined />
        </div>
      ),
      dataIndex: "totalValue",
      key: "totalValue",
    },
    {
      title: (
        <div>
          &emsp;Status&emsp; <MenuOutlined />
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
        <Card className="summary-card">
          <MenuOutlined className="card-icon" />
          <span>Total Products: 350</span>
        </Card>
        <Card className="summary-card">
          <DownloadOutlined className="card-icon" />
          <span>In Stock: 316</span>
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
