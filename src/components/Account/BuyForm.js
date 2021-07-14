import { Table } from "antd";
export default function BuyForm() {
  const columns = [
    {
      title: "編號",
      width: 80,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "是否為贈品",
      width: 100,
      dataIndex: "sale",
      key: "age",
      fixed: "left",
    },
    { title: "商品分類", dataIndex: "cata", key: "1" },
    { title: "品牌", dataIndex: "brand", key: "2" },
    { title: "保存期限", dataIndex: "exp", key: "3" },
    { title: "使用程度", dataIndex: "level", key: "4" },
    { title: "購買證明", dataIndex: "prof", key: "5" },
    { title: "預期價格", dataIndex: "price", key: "6" },

    {
      title: "處理進度",
      key: "operation",
      fixed: "right",
      width: 130,
      render: () => <p className="text-ad">物流中心 處理中</p>,
    },
  ];
  const data = [
    {
      key: "1",
      name: "1",
      sale: "是",
      cata: "唇部彩妝",
      brand: "RIMMEL",
      exp: "2022.06.22",
      level: "九成新",
      prof: "有",
      price: "NT$ 100",
    },
    {
      key: "2",
      name: "2",
      sale: "否",
      cata: "臉部彩妝",
      brand: "Za",
      exp: "2021.12.07",
      level: "全新",
      prof: "無",
      price: "NT$ 0",
    },
  ];
  return (
    <div className="container-acc2">
      <div className="container-table">
        <div className="the-tittle">出貨進度查詢</div>
        <Table columns={columns} dataSource={data} scroll={{ x: 1900 }} />
      </div>
    </div>
  );
}
