import { useContext, useState } from "react";
import { Layout } from "antd";
import JJHeader from "../components/HeaderNew";

import JJAbCon from "../components/About/AbCon";
import JJFooter from "../components/Footer";

// eslint-disable-line react-hooks/exhaustive-deps

function About() {
  return (
    <Layout>
      <JJHeader />
      <JJAbCon />
      <JJFooter />
    </Layout>
  );
}

export default About;
