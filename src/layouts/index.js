import styles from './index.less';
import Helmet from 'react-helmet';
import Footer from '../components/Footer'
import { Menu } from 'antd';

const { SubMenu, Item } = Menu;

function BasicLayout(props) {
  const state = {
    current: 'mail',
  };
  const handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  return (
    <div className={styles.normal}>
      <Helmet>
        <title>第五届全国超快光谱研讨会</title>
        <link rel="icon" href={require('root/assets/favicon.ico')} />
      </Helmet>
      <div className={styles.title} />
      <Menu onClick={handleClick} className={styles.headernav} selectedKeys={[state.current]} theme="dark" mode="horizontal">
          <Item key="index">
            <a href="https://ant.design" >
              首页
            </a>
          </Item>
          <Item key="index1">
            <a href="https://ant.design" >
              组织机构
            </a>
          </Item>
          <Item key="index2">
            <a href="https://ant.design" >
              会议日程
            </a>
          </Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                会议报告
              </span>
            }
          >
            <Item title="Item 1">
              大会报告
            </Item>
            <Item title="Item 2">
              邀请报告
            </Item>
            <Item title="Item 3">
              张贴报告
            </Item>
          </SubMenu>
          <Item key="index4">
            <a href="https://ant.design" >
              会议主题
            </a>
          </Item>
          <Item key="index5">
            <a href="https://ant.design" >
              期刊支持
            </a>
          </Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                酒店交通
              </span>
            }
          >
            <Item title="Item 5">
              酒店信息
            </Item>
            <Item title="Item 4">
              交通信息
            </Item>
          </SubMenu>
          <Item key="index6">
            <a href="https://ant.design">
              历届会议
            </a>
          </Item>
          <Item key="index7">
            <a href="https://ant.design">
              赞助信息
            </a>
          </Item>
          <Item key="index8">
            <a href="https://ant.design">
              联系我们
            </a>
          </Item>
          <Item key="alipay">
            <a href="https://ant.design">
              大会照片
            </a>
          </Item>
      </Menu>
      <div className={styles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default BasicLayout;
