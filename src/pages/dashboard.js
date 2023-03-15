import Image from "next/image";
import { Card, Space, Statistic, Col, Row, Typography } from "antd";
import { Paper } from "@mui/material";
import React from "react";
import { BsFillCreditCardFill, BsThreeDotsVertical } from "react-icons/bs";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import BaseLayout from "@/components/BaseLayout";
import Chart from "@/components/Chartlabarugi";
import Neraca from "@/components/Grafikneraca";
import Lajur from "@/components/NeracaLajur";
import Kas from "@/components/ArusKas";
import TableDA from "@/components/TableDataAkun";

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
                boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
              }}
            />
            <BsFillCreditCardFill
              style={{
                color: "orange",
                fontSize: "2.1rem",
                position: "absolute",
                top: "1.7rem",
                left: "1.7rem",
              }}
            />
            <p className="kas">KAS</p>
            <Statistic
              title="Total Saldo"
              value={"Rp. 6.000.000,00"}
              valueStyle={{ position: "absolute" }}
            />
            <Row gutter={1}>
              <Col span={1}>
                <Card
                  className="card_statistic"
                  style={{ boxShadow: "1px 1px 3px 1px #A9A9A9" }}
                >
                  <Statistic
                    value={1.5}
                    valueStyle={{
                      color: "#0c4900",
                      fontSize: "13px",
                      display: "flex",
                      position: "absolute",
                      top: "0px",
                      left: "0.2rem",
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
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
              style={{
                boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
              }}
            />
            <Statistic
              classname="title"
              title="Total Saldo"
              value={"Rp. 5.920.000,00"}
              valueStyle={{ position: "absolute" }}
            />
            <Row gutter={1}>
              <Col span={1}>
                <Card
                  className="card_statistic"
                  style={{ boxShadow: "1px 1px 3px 1px #A9A9A9" }}
                >
                  <Statistic
                    value={2.1}
                    valueStyle={{
                      color: "#0c4900",
                      fontSize: "13px",
                      display: "flex",
                      position: "absolute",
                      top: "0rem",
                      left: "0.2rem",
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
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
              style={{
                boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
              }}
            />
            <Statistic
              classname="title"
              title="Total Saldo"
              value={"Rp. 6.920.000,00"}
              valueStyle={{ position: "absolute" }}
            />
            <Row gutter={1}>
              <Col span={1}>
                <Card
                  className="card_statistic"
                  style={{ boxShadow: "1px 1px 3px 1px #A9A9A9" }}
                >
                  <Statistic
                    value={2.7}
                    valueStyle={{
                      color: "#0c4900",
                      fontSize: "13px",
                      display: "flex",
                      position: "absolute",
                      top: "0rem",
                      left: "0.2rem",
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Space>
        <Chart />
        <Neraca />
        <Lajur />
        <Kas />
        <TableDA />
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
