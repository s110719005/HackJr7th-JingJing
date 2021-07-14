import { useContext, useState } from "react";
import { Layout } from "antd";
import JJHeader from "../components/HeaderNew";
import JJSlider from "../components/Home/Slider";
import JJContnet from "../components/Home/HomeContent";
import JJFooter from "../components/Footer";

//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <JJHeader />
      <hr />
      <JJSlider />
      <JJContnet />
      <JJFooter />
    </Layout>
  );
}

export default Home;
