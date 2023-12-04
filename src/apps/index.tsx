import { ConfigProvider, Layout, theme } from 'antd';

import style from './index.module.css';

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout className={style.main__layout}>
        <Header className={style.main__header}>Header Nav</Header>
        <Layout>
          <Sider>Sidebar</Sider>
          <Content>Content App</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}
