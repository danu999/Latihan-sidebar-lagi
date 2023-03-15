import { Table, Typography } from "antd";

const columns = [
  {
    title: "TANGGAL",
    dataIndex: "tanggal",
    key: "tanggal",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "NO.REFERENSI",
    dataIndex: "noreferensi",
    key: "noreferensi",
  },
  {
    title: "DESKRIPSI",
    dataIndex: "deskripsi",
    key: "deskripsi",
  },
  {
    title: "NILAI",
    dataIndex: "nilai",
    key: "nilai",
  },
];
const data = [
  {
    key: "1",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 30.000.000,00",
  },
  {
    key: "2",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 40.000.000,00",
  },
  {
    key: "3",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 50.000.000,00",
  },
  {
    key: "4",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 60.000.000,00",
  },
  {
    key: "5",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 40.000.000,00",
  },
];

const App = () => (
  <div
    className="App"
    style={{
      width: "700px",
      height: "500px",
      paddingTop: "7rem",
    }}
  >
    <Typography style={{ fontSize: "1.7rem", marginBottom: "1rem" }}>
      Jurnal
    </Typography>
    <Table
      columns={columns}
      dataSource={data}
      style={{
        width: "43rem",
        backgroundColor: "#ffcf00"
      }}
    ></Table>
  </div>
);

export default App;
