import styles from './index.less';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Breakcrumbs from '../components/Breakcrumbs';
import NavLink from 'umi/navlink';
import { Menu } from 'antd';

const { SubMenu, Item } = Menu;

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Helmet>
        <title>第五届全国超快光谱研讨会</title>
        <link rel="icon" href={require('root/assets/favicon.ico')} />
      </Helmet>
      <div className={styles.banner} >
        <img className={styles.title} src="http://nsus-static.oss-cn-beijing.aliyuncs.com/banner.jpg" alt="第五届全国超快光谱研讨会" />
      </div>
      <Menu className={styles.headernav} selectedKeys={[props.location.pathname]} theme="dark" mode="horizontal">
        <Item key="/">
          <NavLink to="/">
            首页
            </NavLink>
        </Item>
        <Item key="/organization">
          <NavLink to="/organization">
            组织机构
            </NavLink>
        </Item>
        <Item key="/meeting">
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
          <Item key="/report/conference">
            <NavLink to="/report/conference">
              大会报告
            </NavLink>
          </Item>
          <Item key="/report/invitation">
            <NavLink to="/report/invitation">
              邀请报告
            </NavLink>
          </Item>
        </SubMenu>
        <Item key="/theme">
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
          <Item key="/info/hotel">
            <NavLink to="/info/hotel">
              酒店信息
            </NavLink>
          </Item>
          <Item key="/info/traffic">
            <NavLink to="/info/traffic">
              交通信息
            </NavLink>
          </Item>
        </SubMenu>
        <Item key="/previous">
          <NavLink to="/previous">
            历届会议
            </NavLink>
        </Item>
        <Item key="/payinfo">
          <NavLink to="/payinfo">
            缴费信息
            </NavLink>
        </Item>
        <Item key="/message">
          <NavLink to="/message">
            会议通知
            </NavLink>
        </Item>
        <Item key="/contact">
          <NavLink to="/contact">
            联系我们
            </NavLink>
        </Item>
        <Item key="/photo">
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
