import { ConfigProvider, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import { Navigation } from '@/components/navigation';
import SidebarMenu from '@/components/sidebar-menu';

import style from './index.module.css';

const { Header, Sider, Content } = Layout;

export function AppLayout() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: 'Geist, system-ui, Avenir, Helvetica, Arial, sans-serif',
          fontSize: 14,
        },
      }}
    >
      <Layout className={style.main__layout}>
        <Header className={style.main__header}>
          <Navigation />
        </Header>
        <Layout className={style.main__content}>
          <Sider
            width={300}
            style={{ backgroundColor: 'inherit' }}
            className={style.main__sidebar}
          >
            <SidebarMenu />
          </Sider>
          <Content className={style.main__layout__content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
