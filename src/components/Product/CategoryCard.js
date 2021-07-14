import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";






export default function CategoryCard() {
    const [isCardSmall, setIsCardSmall] = useState("block");//卡有沒有打開
    const [isCardBig, setIsCardBig] = useState("none");//卡有沒有打開
    const [categoryGreen, setCategoryGreen] = useState("none");//卡有沒有打開
    const [giftGreen, setGiftGreen] = useState("none");//卡有沒有打開
    const [categoryYellow, setCategoryYellow] = useState("none");//卡有沒有打開
    const [giftYellow, setGiftYellow] = useState("none");//卡有沒有打開
    const [facialMakeup, setFacialMakeup] = useState("none");//卡有沒有打開
    
    
    //const handleCloseDrawer = () => setIsOnTouch(false);
    
    return (
        
        <div>
            {/* close */}
            <div
                style={{display:isCardSmall}}
            >
                <div className="category-title-row">
                <div className="category-title-container"
                onClick={() => {
                    setIsCardBig("flex");
                    setIsCardSmall("none");
                    setCategoryGreen("flex");
                    setCategoryYellow("none");
                    setGiftGreen("none");
                    setGiftYellow("flex");
                 }}
                
                >
                    <div className="category-title-text">
                        產品分類
                    </div>
                </div>
                <div className="category-title-container"
                onClick={() => {
                    setIsCardBig("flex");
                    setIsCardSmall("none");
                    setCategoryGreen("none");
                    setCategoryYellow("flex");
                    setGiftGreen("flex");
                    setGiftYellow("none");
                 }}
                >
                    <div className="category-title-text">
                        贈品區
                    </div>
                </div>
            </div>
            </div>
            
            {/* open */}
            <div className="category-open"
                style={{display:isCardBig}}
            >
                <div className="category-title-row">
                    <div className="category-title-container-open"
                    style={{display:categoryYellow}}
                    onClick={() => {
                        setIsCardBig("flex");
                        setIsCardSmall("none");
                        setCategoryGreen("flex");
                        setCategoryYellow("none");
                        setGiftGreen("none");
                        setGiftYellow("flex");
                     }}
                    >
                        <div className="category-title-text">
                            產品分類
                        </div>
                    </div>
                    <div className="category-title-container-open-active"
                    style={{display:categoryGreen}}
                    onClick={() => {
                        setIsCardBig("none");
                        setIsCardSmall("flex");
                        setCategoryGreen("none");
                        setCategoryYellow("flex");
                        setGiftGreen("flex");
                        setGiftYellow("none");
                     }}
                    >
                        <div className="category-title-text-active">
                            產品分類
                        </div>
                    </div>
                    <div className="category-title-container-open"
                    style={{display:giftYellow}}
                    onClick={() => {
                        setIsCardBig("flex");
                        setIsCardSmall("none");
                        setCategoryGreen("none");
                        setCategoryYellow("flex");
                        setGiftGreen("flex");
                        setGiftYellow("none");
                     }}
                    >
                        <div className="category-title-text">
                            贈品區
                        </div>
                    </div>
                    <div className="category-title-container-open-active"
                    style={{display:giftGreen}}
                    onClick={() => {
                        setIsCardBig("none");
                        setIsCardSmall("flex");
                        setCategoryGreen("none");
                        setCategoryYellow("flex");
                        setGiftGreen("flex");
                        setGiftYellow("none");
                     }}
                    >
                        <div className="category-title-text-active">
                            贈品區
                        </div>
                    </div>
                </div>
                <div className="category-detail-card"
                style={{display:categoryGreen}}
                >
                    <div className="category-column">
                        <div className="category-L">化妝品</div>
                        
                            <div className="category-M"
                            onClick={() => {
                                if (facialMakeup === "none"){
                                    setFacialMakeup("block");
                                }
                                else{
                                    setFacialMakeup("none");
                                }
                             }}
                            >臉部彩妝</div>
                        <div
                            style={{display:facialMakeup}}
                        >
                            <CategoryItem to="/Product/Sunscreen" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">防曬乳</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Primer" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">妝前乳/飾底乳</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Contouring" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">修容</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Foundation" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">粉底液</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Concealer" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">遮瑕</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/PressedPowder" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">氣墊粉餅</div>
                            </CategoryItem>
                        </div>
                        <CategoryItem to="/Product/LipBlush" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">唇頰彩妝</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Eyeshadow" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">眼部彩妝</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Else" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">其他</div>
                        </CategoryItem>
                    </div>
                    <div className="category-column">
                        <div className="category-L">保養品</div>
                        <CategoryItem to="/Product/Lotion" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">乳液</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/FacialMask" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">面膜</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Toner" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">化妝水</div>
                        </CategoryItem>
                    </div>
                    <div className="category-column">
                        <div className="category-L">香氛</div>
                        <CategoryItem to="/Product/Candle" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">蠟燭</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Perfume" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">香水</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/EssentialOil" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">精油</div>
                        </CategoryItem>
                    </div>
                </div>
                <div className="category-detail-card"
                style={{display:giftGreen}}
                >
                    <div className="category-column">
                        <div className="category-L">化妝品</div>
                        
                            <div className="category-M"
                            onClick={() => {
                                if (facialMakeup === "none"){
                                    setFacialMakeup("block");
                                }
                                else{
                                    setFacialMakeup("none");
                                }
                             }}
                            >臉部彩妝</div>
                        <div
                            style={{display:facialMakeup}}
                        >
                            <CategoryItem to="/Product/Sunscreen" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">防曬乳</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Primer" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">妝前乳/飾底乳</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Contouring" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">修容</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Foundation" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">粉底液</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/Concealer" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">遮瑕</div>
                            </CategoryItem>
                            <CategoryItem to="/Product/PressedPowder" className="category-select-inactive" activeClassName="category-select-active">
                                <div className="category-S">氣墊粉餅</div>
                            </CategoryItem>
                        </div>
                        <CategoryItem to="/Product/LipBlush" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">唇頰彩妝</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Eyeshadow" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">眼部彩妝</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Else" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">其他</div>
                        </CategoryItem>
                    </div>
                    <div className="category-column">
                        <div className="category-L">保養品</div>
                        <CategoryItem to="/Product/Lotion" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">乳液</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/FacialMask" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">面膜</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Toner" className="category-select-inactive" activeClassName="category-select-active">
                            <div className="category-M">化妝水</div>
                        </CategoryItem>
                    </div>
                    <div className="category-column">
                        <div className="category-L">香氛</div>
                        <CategoryItem to="/Product/Candle" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">蠟燭</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/Perfume" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">香水</div>
                        </CategoryItem>
                        <CategoryItem to="/Product/EssentialOil" className="category-select-inactive" activeClassName="category-select-active">
                        <div className="category-M">精油</div>
                        </CategoryItem>
                    </div>
                </div>
            </div>
            
            
            
        </div>

        
        
    );
}

