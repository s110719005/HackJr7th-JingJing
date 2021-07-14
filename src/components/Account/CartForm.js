import { Table, Switch, Space, InputNumber } from "antd";
import React, { useState, useCallback, useRef } from "react";
const columns = [
  {
    title: "商品名稱",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "優惠價格",
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: "數量",
    dataIndex: "address",
    width: "20%",
    key: "address",
    render: () => (
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    ),
  },
  {
    title: "小計",
    dataIndex: "tpirce",
    key: "tpirce",
    width: "20%",
  },
  {
    title: " ",
    key: "operation",
    fixed: "right",
    width: 130,
    render: () => <a className="text-ad">刪除</a>,
  },
];

const data = [
  {
    key: 1,
    name: "DIOR 指甲油108 Muguet",
    age: "$600",
    address: "Sidney No. 1 Lake Park",
    tpirce: "$600",
  },
  {
    key: 2,
    name: "BH Cosmetics 粉紅金點皮筒11件刷具組",
    age: "$600",
    address: "Sidney No. 1 Lake Park",
    tpirce: "$600",
  },
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

// input number
function onChange(value) {
  console.log("changed", value);
}

export default function BuyForm() {
  const [checkStrictly, setCheckStrictly] = React.useState(false);
  return (
    <div className="container-acc2">
      <div className="container-table">
        <div className="the-tittle2">出貨進度查詢</div>

        <Table
          columns={columns}
          rowSelection={{ ...rowSelection, checkStrictly }}
          dataSource={data}
          className="cart-form"
        />
      </div>
    </div>
  );
}
