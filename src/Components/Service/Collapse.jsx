import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import {   ConfigProvider, theme , Collapse } from 'antd';

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

const getItems = (panelStyle) => [
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text1}</p>,
    style:panelStyle,
    showArrow: false,

  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text2}</p>,
    style: panelStyle,
    showArrow: false,

  },
  {
    key: '4',
    label: 'This is panel header 3',
    children: <p>{text3}</p>,
    style: panelStyle,
    showArrow: false,

  },
];
const CollapseService = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    margin : "0px",
   
 

  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: "red",
        marginLeft:"auto",
        marginRight:"20px",
        fontWeight: "bold",
        width:"45%",
        boxShadow:"10px"
        

      }}
      items={getItems(panelStyle)}
    />
  );
};
export default CollapseService;