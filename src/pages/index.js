import Image from "next/image";
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
            style={{
              boxShadow: "2px 3px 15px 3px #A9A9A9",
              position: "relative",
            }}
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
                backgroundColor: "#fffff",
                width: "50px",
                height: "40px",
                borderRadius: "10%",
                position: "absolute",
                top: 24,
                left: 20,
              }}
            />
            <BsFillCreditCardFill
              style={{
                color: "orange",
                fontSize: "2.1rem",
                position: "absolute",
                top: "1.6rem",
                left: "1.7rem",
              }}
            />
            <p className="kas">KAS</p>
            <Statistic title="Total Saldo" value={"Rp. 6.000.000,00"} />
          </Card>
        </Space>

        <Space direction="horizontal">
          <Card
            className="card"
            style={{
              boxShadow: "2px 3px 15px 3px #A9A9A9",
              position: "relative",
            }}
          >
            <BsThreeDotsVertical
              style={{
                marginLeft: "16rem",
                fontSize: "1.5rem",
                position: "absolute",
              }}
            />
            <Image
              width={50}
              height={40}
              className="cardbri_logo"
              src="/BRI.jpg"
              alt="logo"
              position="absolute"
            />
            <Statistic
              classname="title"
              title="Total Saldo"
              value={"Rp. 5.920.000,00"}
            />
          </Card>
        </Space>
        <Space direction="horizontal">
          <Card
            className="card"
            style={{
              boxShadow: "2px 3px 15px 3px #A9A9A9",
              position: "relative",
            }}
          >
            <BsThreeDotsVertical
              style={{
                marginLeft: "16rem",
                fontSize: "1.5rem",
                position: "absolute",
              }}
            />
            <Image
              width={50}
              height={40}
              className="cardmandiri_logo"
              src="/mandiri.png"
              alt="logo"
              position="absolute"
            />
            <Statistic
              classname="title"
              title="Total Saldo"
              value={"Rp. 6.920.000,00"}
            />
          </Card>
        </Space>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
