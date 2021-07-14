import { Steps } from "antd";

const { Step } = Steps;

export default function LinerSteps() {
  return (
    <div className="step-container">
      <div className="step-box">
        <Steps progressDot current={0}>
          <Step title="購物明細" />
          <Step title="付款與運送方式" />
          <Step title="完成訂購" />
        </Steps>
      </div>
    </div>
  );
}
