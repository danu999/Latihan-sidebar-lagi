import { Card, Space, Statistic, Typography } from "antd";
import { Paper } from "@mui/material";
import BaseLayout from "../components/BaseLayout";
import React from "react";
import { BsFillCreditCardFill, BsThreeDotsVertical } from "react-icons/bs";

const Dashboard = () => {
  return (
    <BaseLayout>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Space direction="horizontal">
          <Card
            className="card"
            style={{ boxShadow: "5px 8px 24px 5px #A9A9A9" }}
          >
            <BsThreeDotsVertical
              style={{
                marginLeft: "16rem",
                fontSize: "1.5rem",
                position: "absolute",
              }}
            />
            <Paper
              style={{
                backgroundColor: "#fff579",
                width: "39px",
                height: "39px",
                position: "absolute",
                borderRadius: "80%"
              }}
            />
            <BsFillCreditCardFill
              style={{
                color: "orange",
                fontSize: "2.2rem",
                position: "absolute",
              }}
            />
            <p className="kas">KAS</p>
            <Statistic title="Total Saldo" value={"Rp.6.000.000,00"} />
          </Card>
        </Space>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
