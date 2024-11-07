import React, { useContext, useState } from "react";
import { InventoryContext } from "./InventoryContext";
import { Card, Button, Statistic, Table, Input, Tag, Row, Col, Modal, Checkbox } from "antd";
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
import img2 from '../assets/images/Rectangle1.svg';
import img3 from '../assets/images/Rectangle2.svg';
import img4 from '../assets/images/Rectangle3.svg';
import image1 from '../assets/images/cardicon1.png'

const ViewInventory = () => {
  const { inventory,newInventory } = useContext(InventoryContext);
  const [searchText, setSearchText] = useState("");
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const handleSearch = (e) => setSearchText(e.target.value);
  const navigate = useNavigate();

  console.log(newInventory, "inventorydata==>");

  // const columns = [
  //   {
  //     title: (
  //       <div>
  //         &emsp;Product Name &emsp;
  //         <FilterListIcon
  //           style={{ height: "15px", width: "15px", marginTop: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "productName",
  //     key: "productName",
  //   },
  //   {
  //     title: (
  //       <div>
  //         &emsp;Category &emsp;
  //         <FilterListIcon
  //           style={{ height: "15px", width: "15px", marginTop: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "category",
  //     key: "category",
  //   },
  //   {
  //     title: (
  //       <div>
  //         &emsp;Unit Price&emsp;{" "}
  //         <FilterListIcon
  //           style={{ height: "15px", width: "15px", marginTop: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "unitPrice",
  //     key: "unitPrice",
  //   },
  //   {
  //     title: (
  //       <div>
  //         &emsp;In-Stock&emsp;{" "}
  //         <FilterListIcon
  //           style={{ height: "15px", width: "15px", marginTop: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "inStock",
  //     key: "inStock",
  //   },
  //   {
  //     title: (
  //       <div>
  //         &emsp;Discount &emsp;
  //         <FilterListIcon
  //           style={{ height: "15px", width: "15px", marginTop: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "discount",
  //     key: "discount",
  //   },
  //   {
  //     title: (
  //       <div>
  //         &emsp;Total Value&emsp;{" "}
  //         <FilterListIcon
  //           style={{ height: "15px", width: "15px", marginTop: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "totalValue",
  //     key: "totalValue",
  //   },
  //   {
  //     title: (
  //       <div>
  //         &emsp;Status&emsp;{" "}
  //         <FilterListIcon
  //           style={{ height: "15px", width: "15px", marginTop: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "status",
  //     key: "status",
  //     render: (status) => (
  //       <Tag color={status === "Published" ? "green" : "green"}>{status}</Tag>
  //     ),
  //   },
  // ];

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
      // image:img2,
        // "https://www.apple.com/v/iphone-13/x/images/overview/hero/hero_iphone_13__d8nmebfdy6ki_large_2x.jpg",
      productLink: "https://www.apple.com/iphone-13-pro/",
    },
    // {
    //   key: 2,
    //   productName: "iPhone 12 Pro",
    //   category: "Gadgets",
    //   unitPrice: "₦725,000.00",
    //   inStock: 12,
    //   discount: "₦0.00",
    //   totalValue: "₦50,000.00",
    //   status: "Published",
    //   image:img3,
    //     // "https://www.apple.com/v/iphone-12/x/images/overview/hero/hero_iphone_12__lqfoelomqtqi_large_2x.jpg",
    //   productLink: "https://www.apple.com/iphone-12-pro/"
    // },
    // {
    //   key: 3,
    //   productName: "Polo T-Shirt",
    //   category: "Fashion",
    //   unitPrice: "₦125,000.00",
    //   inStock: 120,
    //   discount: "₦0.00",
    //   totalValue: "₦50,000.00",
    //   status: "Unpublished",
    //   image: img4,
    //   // "https://www.example.com/polo-tshirt.jpg",
    //   productLink: "https://www.example.com/polo-tshirt",
    // },
    // {
    //   key: 4,
    //   productName: "Nike Sneakers",
    //   category: "Footwear",
    //   unitPrice: "₦85,000.00",
    //   inStock: 30,
    //   discount: "₦0.00",
    //   totalValue: "₦50,000.00",
    //   status: "Published",
    //   image: img2,
    //   // "https://www.example.com/nike-sneakers.jpg",
    //   productLink: "https://www.example.com/nike-sneakers",
    // },
    // {
    //   key: 5,
    //   productName: "Samsung Galaxy S21",
    //   category: "Gadgets",
    //   unitPrice: "₦1,000,000.00",
    //   inStock: 15,
    //   discount: "₦0.00",
    //   totalValue: "₦50,000.00",
    //   status: "Unpublished",
    //   image: img3,
    //     // "https://www.samsung.com/global/galaxy/galaxy-s21-5g/_images/overview/galaxy-s21-ultra-front-01.jpg",
    //   productLink: "https://www.samsung.com/galaxy-s21/",
    // },
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
          {/* <img
            src={record.image}
            alt={text}
            style={{ width: 30, height: 30, marginRight: 8 }}
          /> */}
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
            <Button icon={<FilterOutlined />} onClick={handleFilterOpen}>Filter</Button>
            <Button icon={<ShareAltOutlined />} onClick={handleShare}>Share</Button>
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
          rowKey="date"
        />
      </div>
    </div>
  );
};

export default ViewInventory;