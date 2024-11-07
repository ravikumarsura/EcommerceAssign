import React, { useContext, useState } from "react";
import { InventoryContext } from "./InventoryContext";
import { Card, Button, Statistic, Table, Input,Tag } from "antd";
import {
  EyeOutlined,
  FilterOutlined,
  HeartOutlined,
  SearchOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./Pages.css";
import FilterListIcon from '@mui/icons-material/FilterList';

const ViewInventory = () => {
  const { inventory } = useContext(InventoryContext);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => setSearchText(e.target.value);

  const columns = [
    {
      title: (
        <div>
          &emsp;Product Name &emsp;
          <FilterListIcon style={{height:"15px",width:"15px",marginTop:"8px"}}/>
        </div>
      ),
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: (
        <div>
          &emsp;Category &emsp;
          <FilterListIcon style={{height:"15px",width:"15px",marginTop:"8px"}}/>
        </div>
      ),
      dataIndex: "category",
      key: "category",
    },
    {
      title: (
        <div>
          &emsp;Unit Price&emsp; <FilterListIcon style={{height:"15px",width:"15px",marginTop:"8px"}}/>
        </div>
      ),
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: (
        <div>
          &emsp;In-Stock&emsp; <FilterListIcon style={{height:"15px",width:"15px",marginTop:"8px"}}/>
        </div>
      ),
      dataIndex: "inStock",
      key: "inStock",
    },
    {
      title: (
        <div>
          &emsp;Discount &emsp;
          <FilterListIcon style={{height:"15px",width:"15px",marginTop:"8px"}}/>
        </div>
      ),
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: (
        <div>
          &emsp;Total Value&emsp; <FilterListIcon style={{height:"15px",width:"15px",marginTop:"8px"}}/>
        </div>
      ),
      dataIndex: "totalValue",
      key: "totalValue",
    },
    {
      title: (
        <div>
          &emsp;Status&emsp; <FilterListIcon style={{height:"15px",width:"15px",marginTop:"8px"}}/>
        </div>
      ),
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Published" ? "green" : "green"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="view-inventory-container">
      <div className="inventory-header">
        <div className="product-info">
          <img src={inventory?.image} alt="Product" className="product-image" />
          <div>
            <h1>{inventory?.productName}</h1>
            <p>Date Added: {inventory?.date}</p>
            <p>
              Product URL:{" "}
              <a href={inventory?.productLink}>{inventory?.productLink}</a>
            </p>
          </div>
        </div>
        <div className="header-actions">
          <Button className="edit-button" type="primary">
            Edit Product
          </Button>
          <Button className="unpublish-button" danger>
            Unpublish Product
          </Button>
        </div>
      </div>

      <div className="inventory-stats">
        <Card className="stat-card" bordered={false}>
          <Statistic title="Price" value={inventory?.price} />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic title="In-Stock" value={inventory?.stock} />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic
            title="Total Orders"
            value={inventory?.totalOrders}
            prefix={<ShoppingCartOutlined />}
          />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic
            title="Views"
            value={inventory?.views}
            prefix={<EyeOutlined />}
          />
        </Card>
        <Card className="stat-card" bordered={false}>
          <Statistic
            title="Favourite"
            value={inventory?.favourite}
            prefix={<HeartOutlined />}
          />
        </Card>
      </div>

      <div className="inventory-purchases">
        <div className="inventory-actions">
          <h3>Purchased Items</h3>
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
          columns={columns}
          dataSource={inventory?.purchases}
          pagination={false}
          rowKey="date"
        />
      </div>
    </div>
  );
};

export default ViewInventory;
