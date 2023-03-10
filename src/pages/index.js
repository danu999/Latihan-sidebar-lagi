import { Card, Space, Statistic, Typography } from "antd";
import BaseLayout from "../components/BaseLayout";
import React from "react";
import { BsFillCreditCardFill, BsThreeDotsVertical } from "react-icons/bs";

const Dashboard = () => {
  return (
    <BaseLayout>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Space direction="horizontal">
          <Card className="card">
            <BsFillCreditCardFill style={{ color: "orange" }} />
            <BsThreeDotsVertical style={{ marginLeft: "10rem"}}/>
            <Statistic title="Kas" value={"Rp.6.000.000,00"} />
          </Card>
        </Space>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
