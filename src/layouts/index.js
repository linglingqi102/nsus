import styles from './index.less';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Breakcrumbs from '../components/Breakcrumbs';
import NavLink from 'umi/navlink';
import { Menu } from 'antd';

const { Item } = Menu;

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Helmet>
        <title>第五届全国超快光谱研讨会</title>
      </Helmet>
      <figure className={styles.banner}>
        <div className={styles.introduce}>
          <p>第五届全国超快光谱研讨会</p>
          <p>2021.07.18-07.21</p>
          <p>山东 青岛</p>
        </div>
        <img
          className={styles.title}
          src={require('root/assets/banner.jpg')}
          alt="第五届全国超快光谱研讨会"
        />
      </figure>
      <Menu
        className={styles.headernav}
        selectedKeys={[props.location.pathname]}
        // theme="dark"
        mode="horizontal"
      >
        <Item key="/">
          <NavLink to="/">首页</NavLink>
        </Item>
        <Item key="/organization">
          <NavLink to="/organization">组织机构</NavLink>
        </Item>
        <Item key="/theme">
          <NavLink to="/theme">会议主题</NavLink>
        </Item>
        <Item key="/meeting">
          <NavLink to="/meeting">会议日程</NavLink>
        </Item>
        <Item key="/conference">
          <NavLink to="/conference">大会报告</NavLink>
        </Item>
        <Item key="/invitation">
          <NavLink to="/invitation">邀请报告</NavLink>
        </Item>
        <Item key="/report">
          <NavLink to="/report">张贴报告</NavLink>
        </Item>
        <Item key="/payinfo">
          <NavLink to="/payinfo">缴费信息</NavLink>
        </Item>
        <Item key="/message">
          <NavLink to="/message">投稿须知</NavLink>
        </Item>
        <Item key="/photo">
          <NavLink to="/photo">赞助信息</NavLink>
        </Item>
        <Item key="/contact">
          <NavLink to="/contact">联系我们</NavLink>
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
