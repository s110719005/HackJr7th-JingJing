import { useContext,useState } from "react";
import { Layout } from 'antd';
import JJHeader from "../components/Header";
//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <div className="main-area">
        <JJHeader/>
            Home 
      </div>
      
    </Layout>
  );
}

export default Home;
