import BaseLayout from "@/components/BaseLayout";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";

const Jurnal = () => {
const [dataSource, setDataSource] = useState([]);

  const handleDelete = (key) => {
    const dataSource = [... data];
    const filteredData = dataSource.filter((item) => item.key !== key);
    (filteredData);
  }

const columns = [
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
    align: "center",
    editTable: true,
  },
  {
    title: "No. Referensi",
    dataIndex: "noreferensi",
    key: "noreferensi",
    align: "center",
    editTable: true,
  },
  {
    title: "Deskripsi",
    dataIndex: "deskripsi",
    key: "deskripsi",
    align: "center",
    editTable: true,
  },
  {
    title: "Nilai",
    dataIndex: "nilai",
    key: "nilai",
    align: "center",
    editTable: true,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "center",
    render: (_, record) =>
    data.length >= 1 ? (
      <Popconfirm title="Are you sure want to delete ?"
      onConfirm={() => handleDelete(record.key)}
      >
        <Button danger type="primary">
          Delete
        </Button>
      </Popconfirm>
    ) : null,
  },
];

const data = [
  {
    key: "1",
    tanggal: "01/03/2023",
    noreferensi: "GK0001",
    deskripsi: "General Journal",
    nilai: "Rp 80.000.000,00",
  },
  {
    key: "2",
    tanggal: "02/03/2023",
    noreferensi: "GK0002",
    deskripsi: "General Journal",
    nilai: "Rp 90.000.000,00",
  },
  {
    key: "3",
    tanggal: "03/03/2023",
    noreferensi: "GK0003",
    deskripsi: "General Journal",
    nilai: "Rp 100.000.000,00",
  },
  {
    key: "4",
    tanggal: "04/03/2023",
    noreferensi: "GK0004",
    deskripsi: "General Journal",
    nilai: "Rp 200.000.000,00",
  },
  {
    key: "5",
    tanggal: "05/03/2023",
    noreferensi: "GK0005",
    deskripsi: "General Journal",
    nilai: "Rp 300.000.000,00",
  },
  {
    key: "6",
    tanggal: "06/03/2023",
    noreferensi: "GK0006",
    deskripsi: "General Journal",
    nilai: "Rp 400.000.000,00",
  },
  {
    key: "7",
    tanggal: "07/03/2023",
    noreferensi: "GK0007",
    deskripsi: "General Journal",
    nilai: "Rp 500.000.000,00",
  },
  {
    key: "8",
    tanggal: "08/03/2023",
    noreferensi: "GK0007",
    deskripsi: "General Journal",
    nilai: "Rp 600.000.000,00",
  },
  {
    key: "9",
    tanggal: "09/03/2023",
    noreferensi: "GK0007",
    deskripsi: "General Journal",
    nilai: "Rp 700.000.000,00",
  },
  {
    key: "10",
    tanggal: "10/03/2023",
    noreferensi: "GK0007",
    deskripsi: "General Journal",
    nilai: "Rp 800.000.000,00",
  },

];

  return (
    <BaseLayout>
      <div className="jurnal">
        <h1 className="titlejurnal">Jurnal</h1>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          style={{
            width: "90rem",
            backgroundColor: "#ffcf00",
          }}
        ></Table>
      </div>
    </BaseLayout>
  );
};

export default Jurnal;
