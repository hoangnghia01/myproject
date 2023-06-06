import React, { useState } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

export default function Headers() {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {items.map((item) => {
        if (item.children) {
          return (
            <SubMenu key={item.key} title={item.label}>
              {item.children.map((child) => {
                if (child.type === 'group') {
                  return (
                    <Menu.ItemGroup key={child.label} title={child.label}>
                      {child.children.map((subChild) => (
                        <Menu.Item key={subChild.key}>{subChild.label}</Menu.Item>
                      ))}
                    </Menu.ItemGroup>
                  );
                }
                return <Menu.Item key={child.key}>{child.label}</Menu.Item>;
              })}
            </SubMenu>
          );
        }
        return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
      })}
    </Menu>
  );
}
