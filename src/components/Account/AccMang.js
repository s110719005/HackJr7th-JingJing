import {
  Button,
  Radio,
  Form,
  Input,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
export default function Slider() {
  return (
    <div className="container-form">
      <div className="acc-form text-choco">
        <div className="the-tittle text-choco">帳號管理</div>
        <div className=" the-name text-choco">姓名:撿帽靈</div>

        <Form>
          <div className="first-line">
            <Form.Item label="電話號碼">
              <Input className="phone-number" />
            </Form.Item>
            <Form.Item label="生日">
              <DatePicker />
            </Form.Item>
          </div>
          <Form.Item label="電子郵件">
            <Input />
          </Form.Item>
          <Form.Item label="原始密碼">
            <Input />
          </Form.Item>
          <Form.Item label="確認密碼">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button className="save-button">更新</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
