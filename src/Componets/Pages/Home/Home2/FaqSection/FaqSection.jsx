import React, { useState } from 'react';
import { Collapse } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const expandIcon = ({ isActive }) =>
    isActive ? (
      <UpOutlined className="bg-[#6165F3] p-3 text-white rounded-full flex justify-center items-center" />
    ) : (
      <DownOutlined className="bg-[#d9d9d9] p-3 text-white rounded-full flex justify-center items-center" />
    );
const FaqSection = () => {
    const [activeKey, setActiveKey] = useState(["5"]);

    const onChange = (key) => {
      console.log(key);
      setActiveKey([]);
      setActiveKey(key);
    };
    const { Panel } = Collapse;
    const text = `
    It is alomost completely automated as a system . You can schedule plan and create
    calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
    a smooth business plan for your and your teamateswith one click!
    `;

  const items = [
    {
      key: "1",
      label: "What is the purpose of this App?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
      // extra: genExtra(),
    },
    {
      key: "2",
      label: "How this app can help me get a Job?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "3",
      label: "Can I find Investors In this App?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "4",
      label: "Can I find Investors In this App?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "5",
      label: "Is this App free to use? ",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "6",
      label: "What kind of Videos I can Post?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "7",
      label: "Can I share my videos on other platforms?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
  ];

  return (
    <section className="faq-area py-16 px:16 font-serif">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-lg text-gray-500">Frequently Ask Question</h6>
          <h2 className="text-3xl font-bold">Have a Question?</h2>
        </div>
        <div>
          <div className="lg:w-[80%] w-[90%] mx-auto">
            <Collapse
              activeKey={activeKey}
              onChange={onChange}
              expandIcon={expandIcon}
              expandIconPosition="end"
            >
              {items.map((item) => (
                <Panel
                  header={item.label}
                  key={item.key}
                  extra={item.extra}
                  className="py-3 bg-white"
                >
                  {item.children}
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;