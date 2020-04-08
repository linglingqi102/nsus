import { useState } from 'react';
import styles from './index.less';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Breakcrumbs from '../components/Breakcrumbs';
import NavLink from 'umi/navlink';
import { Menu } from 'antd';

const { SubMenu, Item } = Menu;

function BasicLayout(props) {
  const [current, setCurrent] = useState('index')
  const handleClick = e => {
    setCurrent(e.key)
  };
  return (
    <div className={styles.normal}>
      <Helmet>
        <title>第五届全国超快光谱研讨会</title>
        <link rel="icon" href={require('root/assets/favicon.ico')} />
      </Helmet>
      <div className={styles.banner} >
        <img className={styles.title} src={require('root/assets/Banner/title.jpg')} alt="第五届全国超快光谱研讨会" />
      </div>
      <Menu onClick={handleClick} className={styles.headernav} selectedKeys={[current]} theme="dark" mode="horizontal">
        <Item key="index">
          <NavLink to="/">
            首页
            </NavLink>
        </Item>
        <Item key="index1">
          <NavLink to="/organization">
            组织机构
            </NavLink>
        </Item>
        <Item key="index2">
          <NavLink to="/meeting">
            会议日程
            </NavLink>
        </Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              会议报告
              </span>
          }
        >
          <Item key="index31">
            <NavLink to="/report/conference">
              大会报告
            </NavLink>
          </Item>
          <Item key="index32">
            <NavLink to="/report/invitation">
              邀请报告
            </NavLink>
          </Item>
          <Item key="index33">
            <NavLink to="/report/post">
              张贴报告
            </NavLink>
          </Item>
        </SubMenu>
        <Item key="index4">
          <NavLink to="/theme">
            会议主题
            </NavLink>
        </Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              酒店交通
              </span>
          }
        >
          <Item key="index51">
            <NavLink to="/info/hotel">
              酒店信息
            </NavLink>
          </Item>
          <Item key="index52">
            <NavLink to="/info/traffic">
              交通信息
            </NavLink>
          </Item>
        </SubMenu>
        <Item key="index6">
          <NavLink to="/previous">
            历届会议
            </NavLink>
        </Item>
        <Item key="index7">
          <NavLink to="/sponsorship">
            赞助信息
            </NavLink>
        </Item>
        <Item key="index8">
          <NavLink to="/contact">
            联系我们
            </NavLink>
        </Item>
        <Item key="index9">
          <NavLink to="/photo">
            大会照片
            </NavLink>
        </Item>
      </Menu>
      <div className={styles.content}>
        <Breakcrumbs />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default BasicLayout;
