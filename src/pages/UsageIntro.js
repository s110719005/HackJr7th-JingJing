import { useContext, useState } from "react";
import { Layout, Button } from "antd";
import { Form,Input,DatePicker } from 'antd';
import JJHeader from "../components/HeaderNew";
import JJFooter from "../components/Footer";
import JJTopButton from "../components/Account/TopButton";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { logoutFromFirebase } from "../actions";

import { StoreContext } from "../store";

import { Select } from 'antd';
import { Table } from 'antd';
const { Option } = Select;

const { Header, Content, Footer } = Layout;


function UsageIntro() {
  const history = useHistory();
  const onClick = async (values) => {
    history.goBack();
  };
  const columns = [
    {
      title: '狀態',
      dataIndex: 'status',
    },
    {
      title: '外觀',
      dataIndex: 'appearence',
    },
    {
      title: '使用',
      dataIndex: 'usage',
    },
    {
      title: '保存期限',
      dataIndex: 'dueDate',
    },
    {
      title: '補充',
      dataIndex: 'more',
    },
  ];
  const data = [
    {
      key: '1',
      status:'全新',
      appearence:"・包裝沒拆\n・無瑕疵",
      usage:"無",
      dueDate:"距離商品製造日期低於一年",
      more:"口紅、粉餅只收全新"
    },
    {
      key: '2',
      status:'9成新',
      appearence:"・無瑕疵",
      usage:"・只是色或使用1~2次\n・使用痕跡不明顯",
      dueDate:"距離商品製造日期低於一年",
      more:"無"
    },
    {
      key: '3',
      status:'7成新',
      appearence:"・輕微摩擦、刮痕",
      usage:"・使用不超過5次\n・些微使用痕跡",
      dueDate:"距離商品製造日期低於一年半",
      more:"無"
    },
    {
      key: '4',
      status:'5成新',
      appearence:"・磨損較嚴重",
      usage:"・內容物殘量剩40%\n・使用痕跡明顯",
      dueDate:"距離商品製造日期低於一年半",
      more:"無"
    },
    {
      key: '5',
      status:'5成以下\n(不含)',
      appearence:"・外觀磨損嚴重",
      usage:"・內容物殘量小於40%\n・使用痕跡明顯",
      dueDate:"距離商品製造日期低於一年半",
      more:"回收或處理後捐贈"
    },
    {
      key: '6',
      status:'7成新以下\n即期品',
      appearence:"無",
      usage:"・使用不超過5次\n・可有些為使用痕跡",
      dueDate:"距離商品製造日期不到一年",
      more:"直接捐贈"
    },
    
    
  ];
  return (
    <div>
        <JJHeader />
            <div className="mainarea usageIntro">
                <div className="usageIntro-title-container">
                    <div className="usageIntro-title">程度劃分說明</div>
                </div>
                <div className="usageIntro-goback-btn"
                onClick={onClick}
                >
                    返回
                </div>
                <div>
                    <Table style={{ whiteSpace: 'pre'}} columns={columns} dataSource={data} pagination={false} bordered/>
                </div>
            </div>
        <JJFooter />
    </div>
  );
}

export default UsageIntro;
