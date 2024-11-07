import React from "react";
import { Layout, Dropdown, Avatar, Breadcrumb } from "antd";
import { DownOutlined, HomeFilled } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import "./layout.css";

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();
  const breadcrumbNameMap = {
    "/": "Home",
    "/inventory": "Inventory",
    "/new-inventory-item": "Inventory  /  New Inventory",
    "/viewinventory": "Inventory /  View Inventory",
    "/gifts": "Gifts",
    "/support": "Support",
  };

  const menu = (
    <Dropdown.Menu>
      <Dropdown.Item key="">Option 1</Dropdown.Item>
      <Dropdown.Item key="">Option 2</Dropdown.Item>
    </Dropdown.Menu>
  );

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Header className="navbar">
      <div style={{flexDirection:'column'}}>
      <div className="header-left">
        <h2>Inventory</h2>
      </div>
      <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">
            <HomeFilled style={{ color: "blue" }} />
            &emsp;<span style={{ color: "blue" }}>Home</span>
          </Link>
        </Breadcrumb.Item>
        {pathnames.map((value, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Breadcrumb.Item key={path}>
              <Link to={path}>{breadcrumbNameMap[path]}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      </div>
      </div> 
      <div className="navbar-right">
        <Dropdown overlay={menu} trigger={["click"]}>
          <span style={{ fontWeight: "bold", cursor: "pointer" }}>
            Nanny's Shop <DownOutlined />
          </span>
        </Dropdown>
        <Avatar src="https://via.placeholder.com/32" />
      </div>
    </Header>
  );
};

export default Navbar;
