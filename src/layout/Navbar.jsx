import React from "react";
import { Layout, Dropdown, Avatar, Breadcrumb,Menu } from "antd";
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
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
    </Menu>
  );

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Header className="navbar">
      <div style={{ flexDirection: "column" }}>
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
        <span style={{ fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center" }}>
          Nanny's Shop <DownOutlined style={{ marginLeft: 5 }} />
        </span>
      </Dropdown>

      <Avatar src="https://www.freepik.com/free-vector/young-prince-royal-attire_386983822.htm#fromView=keyword&page=1&position=1&uuid=9e110158-9c85-4977-aee5-fad1b3943abc" />
    </div>
    </Header>
  );
};

export default Navbar;
