import React, { useContext, useState } from "react";
import { InventoryContext } from "./InventoryContext";
import {
  Card,
  Button,
  Statistic,
  Table,
  Input,
  Tag,
  Row,
  Col,
  Modal,
  Checkbox,
  message,
} from "antd";
import {
  DownOutlined,
  EyeOutlined,
  FastForwardOutlined,
  FilterOutlined,
  HeartOutlined,
  SearchOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useNavigate } from "react-router-dom";
import "./Pages.css";
import image1 from "../assets/images/cardicon1.png";

const ViewInventory = () => {
  const { inventory, newInventory } = useContext(InventoryContext);
  const [searchText, setSearchText] = useState("");
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]); // State for checkbox selections

  const handleSearch = (e) => setSearchText(e.target.value);
  const navigate = useNavigate();

  const currentDate = new Date().toLocaleString();

  const dataSource = [
    {
      key: 1,
      orderdate: currentDate,
      category: "Home Delivery",
      unitPrice: "₦25,000.00",
      inStock: 2,
      discount: "₦0.00",
      totalValue: "₦50,000.00",
      status: "Completed",
      productLink: "https://www.apple.com/iphone-13-pro/",
      isChecked: false,
    },
    {
      key: 2,
      orderdate: currentDate,
      category: "Office Delivery",
      unitPrice: "₦15,000.00",
      inStock: 2,
      discount: "₦0.00",
      totalValue: "₦30,000.00",
      status: "Pending",
      productLink: "https://www.apple.com/iphone-13-pro/",
      isChecked: false,
    },
  ];

  const columns = [
    {
      title: <Checkbox />,
      dataIndex: "isChecked",
      key: "isChecked",
      render: (text, record) => (
        <Checkbox
          checked={record.isChecked}
          onChange={() => handleCheckboxChange(record.key)}
        />
      ),
    },
    {
      title: (
        <div>
          &emsp;Order Date &emsp;
          <FilterListIcon
            style={{ height: "15px", width: "15px", marginTop: "8px" }}
          />
        </div>
      ),
      dataIndex: "orderdate",
      key: "orderdate",
      render: (text) => <span>{text}</span>,
    },
    {
      title: (
        <div>
          &emsp;Order Type &emsp;
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
          &emsp;Qty&emsp;{" "}
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
          &emsp;Order Total&emsp;{" "}
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
        <Tag color={status === "Completed" ? "green" : "orange"}>{status}</Tag>
      ),
    },
  ];

  const handleCheckboxChange = (key) => {
    const updatedDataSource = dataSource.map((item) =>
      item.key === key ? { ...item, isChecked: !item.isChecked } : item
    );
    setSelectedItems(updatedDataSource.filter((item) => item.isChecked));
  };
  const editProduct = () => {
    navigate("/new-inventory-item", { state: newInventory });
  };
  const handleFilterOpen = () => setIsFilterModalVisible(true);
  const handleFilterApply = () => {
    message.success("Filters applied successfully.");
    setIsFilterModalVisible(false);
  };
  const handleFilterCancel = () => setIsFilterModalVisible(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Inventory Data",
          text: "Check out our inventory data",
          url: window.location.href,
        })
        .then(() => {
          message.success("Shared successfully");
        })
        .catch((error) => {
          message.error("Failed to share");
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      message.info("Link copied to clipboard");
    }
  };

  return (
    <div className="view-inventory-container">
      <div className="view-inventory-header">
        <div className="product-info">
          <div className="product-details">
            <h2>
              {newInventory?.productName
                ? newInventory?.productName
                : "Phantasm"}
            </h2>
            <p>Date Added: {currentDate}</p>
            <p>
              Product URL:{" "}
              <a href={inventory?.productLink}>
                https://example.com/polo-t-shirt
              </a>
            </p>
          </div>
        </div>

        <div className="header-actions">
          <Button
            className="edit-button"
            type="primary"
            onClick={() => editProduct()}
          >
            Edit Product <DownOutlined />
          </Button>
          <Button className="unpublish-button">Unpublish Product</Button>
        </div>
      </div>

      <div className="view-inventory-cards-container">
        <Card className="image-card-container">
          <img
            src={newInventory.image}
            alt="Inventory"
            className="inventory-view-image"
          />
        </Card>

        <Card className="card-container">
          <div className="card-orders">
            <p>
              Last Order <span></span>
            </p>
            <p className="published">Published</p>
          </div>
          <div className="card-stock">
            <div>
              <p>Price</p>
              <p>₦{newInventory?.cost_price}</p>
            </div>
            <div>
              <p>In-Stock</p>
              <p>{newInventory?.quantity_stock}</p>
            </div>
          </div>
        </Card>

        <Card className="card-container">
          <div className="card-orders">
            <p>
              Last Order <span></span>
            </p>
            <p className="published">Published</p>
          </div>
          <div className="card-stock">
            <div>
              <p>Total Orders</p>
              <p>₦{newInventory?.quantity_stock}</p>
            </div>
          </div>
        </Card>

        <Card className="card-container">
          <div className="card-orders">
            <p>
              Last Order <span></span>
            </p>
            <p className="published">Published</p>
          </div>
          <div className="card-stock">
            <div>
              <p>Views</p>
              <p>1200</p>
            </div>
            <div>
              <p>Favorite</p>
              <p>23</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="inventory-summary-cards">
        <Card className="inventory-summary-card">
          <div>
            <img src={image1} alt="Summary Image" />
          </div>
          <div className="inventory-summary-stats">
            <div>
              <p>All Orders</p>
              <p>3</p>
            </div>
            <div>
              <p>Pending</p>
              <p>3</p>
            </div>
            <div>
              <p>Completed</p>
              <p>2</p>
            </div>
          </div>
        </Card>

        <Card className="inventory-summary-card">
          <div>
            <img src={image1} alt="Summary Image" />
          </div>
          <div className="inventory-summary-stats">
            <div>
              <p>Cancelled</p>
              <p>0</p>
            </div>
            <div>
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
            <Button icon={<FilterOutlined />} onClick={handleFilterOpen}>
              Filter
            </Button>
            <Button icon={<ShareAltOutlined />} onClick={handleShare}>
              Share
            </Button>
            <Button>Inventory Items</Button>
            <Button>Bulk Actions</Button>
          </div>
        </div>

        <Modal
          title="Apply Filters"
          visible={isFilterModalVisible}
          onOk={handleFilterApply}
          onCancel={handleFilterCancel}
        >
          <Checkbox>Category: Gadgets</Checkbox>
          <br />
          <Checkbox>Category: Fashion</Checkbox>
          <br />
          <Checkbox>Status: Published</Checkbox>
          <br />
          <Checkbox>Status: Unpublished</Checkbox>
          <br />
        </Modal>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey="key"
        />
      </div>
    </div>
  );
};

export default ViewInventory;
