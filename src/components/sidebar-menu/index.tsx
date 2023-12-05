import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<Link to={'/'}>Dashboard</Link>, 'sub1', null),
  getItem('Report', 'sub2', null, [
    getItem(
      <Link to={'/report/fuel-transaction-history'}>
        Fuel Transaction History
      </Link>,
      '5'
    ),
    getItem(<Link to={'/report/machine-usage'}>Machine Usage</Link>, '6'),
    getItem(
      <Link to={'/report/manpower-usage'}>Manpower Usage</Link>,
      'sub3',
      null
    ),
  ]),
  getItem('History', 'sub3', null),
  getItem('Management', 'sub4', null),
  getItem('Profile', 'sub5', null),
];

const SidebarMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      // defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      style={{ height: '100%', borderRight: 0, backgroundColor: 'inherit' }}
    />
  );
};

export default SidebarMenu;
