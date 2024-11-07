import React, { useContext, useState } from "react";
import { InventoryContext } from "./InventoryContext";
import { Card, Button, Statistic, Table, Input, Tag, Row, Col } from "antd";
import {
  EyeOutlined,
  FilterOutlined,
  HeartOutlined,
  SearchOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./Pages.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import NewInventoryItem from "./NewInventory";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/images/cardicon1.png'

const ViewInventory = () => {
  const { inventory,newInventory } = useContext(InventoryContext);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => setSearchText(e.target.value);
  const navigate = useNavigate();

  console.log(newInventory, "inventorydata==>");

  const columns = [
    {
      title: (
        <div>
          &emsp;Product Name &emsp;
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: (
        <div>
          &emsp;Category &emsp;
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "category",
      key: "category",
    },
    {
      title: (
        <div>
          &emsp;Unit Price&emsp;{" "}
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: (
        <div>
          &emsp;In-Stock&emsp;{" "}
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "inStock",
      key: "inStock",
    },
    {
      title: (
        <div>
          &emsp;Discount &emsp;
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: (
        <div>
          &emsp;Total Value&emsp;{" "}
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "totalValue",
      key: "totalValue",
    },
    {
      title: (
        <div>
          &emsp;Status&emsp;{" "}
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Published" ? "green" : "green"}>{status}</Tag>
      ),
    },
  ];

  const editProduct = () => {
    navigate("/new-inventory-item", { state: newInventory });
  };

  return (
    <div className="view-inventory-container">
      <div className="inventory-header">
        <div className="product-info">
          <img src={newInventory?.image} alt="Product" className="product-image" />
          <div>
            <h1>{newInventory?.productName}</h1>
            <p>Date Added: 12 Sept 2022</p>
            <p>
              Product URL:{" "}
              <a href={inventory?.productLink}>https://example.com/polo-t-shirt</a>
            </p>
          </div>
        </div>
        <div className="header-actions">
          <Button
            className="edit-button"
            type="primary"
            onClick={() => editProduct()}
          >
            Edit Product
          </Button>
          <Button className="unpublish-button" danger>
            Unpublish Product
          </Button>
        </div>
      </div>
      <div className="view-inventory-cards-container">
        <Card className="image_card_container">
          <img src={newInventory.image} alt="" className="inventory_view_image" />
        </Card>

        <Card>
          <div>
            <div className="card_orders">
              <p>
                Last Order <span></span>
              </p>
              <p className="published">Published</p>
            </div>
            <div className="card_stock">
              <div>
                <p>Price</p>
                <p>{newInventory?.cost_price}</p>
              </div>
              <div>
                <p>In-Stock</p>
                <p>{newInventory?.quantity_stock}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
        <div>
            <div className="card_orders">
              <p>
                Last Order <span></span>
              </p>
              <p className="published">Published</p>
            </div>
            <div className="card_stock">
              {/* <div>
                <p>Price</p>
                <p>{newInventory?.cost_price}</p>
              </div> */}
              <div>
                <p>Total Orders</p>
                <p>{newInventory?.quantity_stock}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
        <div>
            <div className="card_orders">
              <p>
                Last Order <span></span>
              </p>
              <p className="published">Published</p>
            </div>
            <div className="card_stock">
              <div>
                <p>Views</p>
                <p>1200</p>
              </div>
              <div>
                <p>Faviorute</p>
                <p>23</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="inventory-summary-cards">
      <Card>
          <div>
            <img src={image1} alt="" />
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "33.3%" }}>
              <p>All Orders</p>
              <p>3</p>
            </div>
            <div style={{ width: "33.3%" }}>
              <p>Pending</p>
              <p>3</p>
            </div>
            <div>
              <p>Completed</p>
              <p>2</p>
            </div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={image1} alt="" />
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "33.3%" }}>
              <p>Cancelled</p>
              <p>0</p>
            </div>
            <div style={{ width: "33.3%" }}>
              <p>Returned</p>
              <p>0</p>
            </div>
            <div>
              <p>Damaged</p>
              <p>0</p>
            </div>
          </div>
        </Card>
      </div>

      {/* <div className="inventory-stats">
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
      </div> */}

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