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
        <div>帳號管理</div>
        <div>姓名：撿帽靈</div>

        <Form className="text-choco">
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
            <Button>儲存</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
