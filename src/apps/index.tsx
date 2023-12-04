import { ConfigProvider, Layout, theme } from 'antd';

import { Navigation } from '@/components/navigation';

import style from './index.module.css';

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
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
          <Sider className={style.main__sidebar}>Sidebar</Sider>
          <Content>Content App</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}
