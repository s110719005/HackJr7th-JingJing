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
    <div className="container-acc">
      <div className="container-form">
        <div className="acc-form text-choco">
          <div className="the-tittle ">帳號管理</div>
          <div className=" the-name ">姓名:撿帽靈</div>

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
      <div className="ls-pic1">
        <img
          src="https://github.com/yuumaker/7th-hack/blob/main/member/lipstick_black.png?raw=true"
          alt="Cart"
        />
      </div>
      <div className="ls-pic2">
        <img
          src="https://github.com/yuumaker/7th-hack/blob/main/member/lipstick_yellow.png?raw=true"
          alt="Cart"
        />
      </div>
    </div>
  );
}
