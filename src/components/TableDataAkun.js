import { BgColorsOutlined } from "@ant-design/icons";
import { Table, Typography } from "antd";

const columns = [
  {
    title: "Nama Akun",
    dataIndex: "namaakun",
    key: "nameakun",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Bulan ini",
    dataIndex: "bulanini",
    key: "bulanini",
  },
  {
    title: "Tahun ini",
    dataIndex: "tahunini",
    key: "tahunini",
  },
];
const data = [
  {
    key: "1",
    namaakun: "KAS",
    bulanini: "Rp 50.000.000,00",
    tahunini: "Rp 80.000.000,00",
  },
  {
    key: "2",
    namaakun: "BANK BRI",
    bulanini: "Rp 200.000.000,00",
    tahunini: "Rp 300.000.000,00",
  },
  {
    key: "3",
    namaakun: "BANK MANDIRI",
    bulanini: "Rp 150.000.000,00",
    tahunini: "Rp 300.000.000,00",
  },
  {
    key: "4",
    namaakun: "UANG MUKA KERJA",
    bulanini: "Rp 100.000.000,00",
    tahunini: "Rp 500.000.000,00",
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
      Daftar Akun
    </Typography>
    <Table
      columns={columns}
      dataSource={data}
      style={{
        width: "43rem",
        backgroundColor: "#ffcf00",
      }}
    ></Table>
  </div>
);

export default App;
