import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <div>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Layout>
          <Header />
          <Layout style={{ flex: "1 0 auto" }}>
            <Content
              style={
                {
                  // marginLeft: "1rem",
                  // overflow: "scroll",
                }
              }
            >
              <Outlet />
            </Content>
          </Layout>
          <Footer />
        </Layout>
      </div>
    </div>
  );
};

export default DashboardLayout;
