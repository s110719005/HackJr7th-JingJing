import { useContext,useState } from "react";
import { StoreContext } from "../../store"
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';
import { Link,useHistory  } from "react-router-dom";

export default function DonateCard(donatecard={category:"",brand:"",name:""}) {
    //const { dispatch } = useContext(StoreContext);
    const { state:{ userSignin: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);

    const [form] = Form.useForm();
    
    return (
        <div className="donatecard">
            <div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">商品分類</div>
                        <Form.Item
                            name={donatecard.category}
                            rules={[
                            {
                                required: true,
                                message: "Please input brand name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="category"
                            />
                        </Form.Item>
                </div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">品牌</div>
                        <Form.Item
                            name={donatecard.brand}
                            rules={[
                            {
                                required: true,
                                message: "Please input brand name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="brand name"
                            />
                        </Form.Item>
                </div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">品名</div>
                        <Form.Item
                            name={donatecard.name}
                            rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="product name"
                            />
                        </Form.Item>
                </div>
                <div className="donatecard-row-container">
                    <div className="donatecard-row-text">保存期限</div>
                        <Form.Item
                            name={donatecard.name}
                            rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <DatePicker/>
                        </Form.Item>
                </div>
            </div>
            <div>
                <img
                className="donatecard-count-logo"
                src="https://github.com/Singularity-v/7th-Hach/blob/main/DONATE&SUS/NUM.png?raw=true"
                alt="add button" 
                />
            </div>
            
        </div>
    );
}
