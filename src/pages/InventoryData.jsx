import React, { useState } from "react";
import {
  Card,
  Table,
  Input,
  Button,
  Tag,
  Pagination,
  Modal,
  Checkbox,
  message,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShareAltOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import FilterListIcon from "@mui/icons-material/FilterList";
import image1 from "../assets/images/cardicon1.png";
import image2 from '../assets/images/2User.svg'
import "./Pages.css";
import img1 from '../assets/images/profile1.png';
import img2 from '../assets/images/Rectangle1.svg';
import img3 from '../assets/images/Rectangle2.svg';
import img4 from '../assets/images/Rectangle3.svg';
import { useNavigate } from "react-router-dom";

const InventoryData = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
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
      image:img2,
        // "https://www.apple.com/v/iphone-13/x/images/overview/hero/hero_iphone_13__d8nmebfdy6ki_large_2x.jpg",
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
      image:img3,
        // "https://www.apple.com/v/iphone-12/x/images/overview/hero/hero_iphone_12__lqfoelomqtqi_large_2x.jpg",
      productLink: "https://www.apple.com/iphone-12-pro/"
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
      image: img4,
      // "https://www.example.com/polo-tshirt.jpg",
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
      image: img2,
      // "https://www.example.com/nike-sneakers.jpg",
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
      image: img3,
        // "https://www.samsung.com/global/galaxy/galaxy-s21-5g/_images/overview/galaxy-s21-ultra-front-01.jpg",
      productLink: "https://www.samsung.com/galaxy-s21/",
    },
  ];

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
        <Tag color={status === "Published" ? "blue" : "orange"}>{status}</Tag>
      ),
    },
  ];

  const filteredData = dataSource.filter((item) =>
    item.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleFilterOpen = () => setIsFilterModalVisible(true);
  const handleFilterApply = () => {
    message.success("Filters applied successfully.");
    setIsFilterModalVisible(false);
  };
  const handleFilterCancel = () => setIsFilterModalVisible(false);

  // Share functionality
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

  const handleInventoryItems = () => {
    setSearchText("");
    setSelectedRows([]);
    message.info("Inventory items reset.");
  };

  const handleBulkActions = () => {
    if (selectedRows.length > 0) {
      message.success(`Bulk action applied to ${selectedRows.length} items.`);
      setSelectedRows([]);
    } else {
      message.warning("Please select items for bulk actions.");
    }
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => setSelectedRows(selectedRows),
  };

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
        <Card className="" style={{ background: "#33acff" }}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div style={{ display: "flex", width: "100%",color:"#fff",fontSize:"1rem" }}>
            <div style={{ width: "50%",padding:"10px" }}>
              <p>All Products</p>
              <p>350</p>
            </div>
            <div style={{ width: "50%",padding:"10px" }}>
              <p>Active</p>
              <p>
                316{" "}
                <span style={{ fontSize: "10px", color: "#DBDEEE" }}>86%</span>
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div >
            <img src={image2} alt="" style={{background: "#FFCC9129",borderRadius:"10px",padding:"10px"}}/>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "33.3%",padding:"10px" }}>
              <p style={{color:"red"}}>Low Stock Alert</p>
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
          <Button icon={<FilterOutlined />} onClick={handleFilterOpen}>
            Filter
          </Button>
          <Button icon={<ShareAltOutlined />} onClick={handleShare}>
            Share
          </Button>
          <Button onClick={handleInventoryItems}>Inventory Items</Button>
          <Button onClick={handleBulkActions}>Bulk Actions</Button>
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
        rowSelection={rowSelection}
        dataSource={filteredData}
        columns={columns}
        pagination={true}
        rowKey="key"
        // Pagination ={{
        //   pageSize: 4
        // }}
      />

      <div className="inventory-pagination">
        <Pagination defaultCurrent={1} pageSize={4} total={filteredData.length} showSizeChanger />
      </div>
    </div>
  );
};

export default InventoryData;
