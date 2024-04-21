import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import {   ConfigProvider, theme , Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
<ConfigProvider

theme={{
  components: {
    Collapse: {
      
      
    },
  },
}}
>
  
</ConfigProvider>

const text = `

text0
`;
const text1 = `

text1
`;
const text2 = `

text2
`;
const text3 = `

text3
`;

const CollapseService = () => {
  const {t} = useTranslation();
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    margin : "0px",
  };
  const getItems = (panelStyle) => [
    {
      key: '1',
      label: <p className="d-flex justify-content-between">{t("OurService.Collapse.Q1")}<i class="fa-solid fa-plus"></i></p>,
      children: <p>{t("OurService.Collapse.P1")}</p>,
      style:panelStyle,
      showArrow: false,
  
    },
    {
      key: '3',
      label: <p className="d-flex justify-content-between">{t("OurService.Collapse.Q2")}<i class="fa-solid fa-plus"></i></p>,
      children: <p>{t("OurService.Collapse.P2")}</p>,
      style: panelStyle,
      showArrow: false,
  
    },
    {
      key: '4',
      label: <p className="d-flex justify-content-between">{t("OurService.Collapse.Q3")}<i class="fa-solid fa-plus"></i></p>,
      children: <p>{t("OurService.Collapse.P3")}</p>,
      style: panelStyle,
      showArrow: false,
  
    },
  ];
  return (
    <Collapse
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        marginLeft:"auto",
        marginRight:"20px",
        fontWeight: "bold",
        width:"100%",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 (0, 0, 0, 0.19)",  
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default CollapseService;