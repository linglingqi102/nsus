import styles from './index.css';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

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
      <div className={styles.title} />
      {/* {props.children} */}
      <div className={styles.headernav}>
        <Menu onClick={handleClick} selectedKeys={[state.current]} theme="dark" mode="horizontal">
          <Menu.Item key="index">
            <a href="https://ant.design" target="_blank">
            首页
            </a>
          </Menu.Item>
          <Menu.Item key="index1">
            <a href="https://ant.design" target="_blank">
            组织机构
            </a>
          </Menu.Item>
          <Menu.Item key="index2">
            <a href="https://ant.design" target="_blank">
            会议日程
            </a>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                会议报告
              </span>
            }
          >
            <Menu.Item title="Item 1">
              大会报告
            </Menu.Item>
            <Menu.Item title="Item 2">
              邀请报告
            </Menu.Item>
            <Menu.Item title="Item 3">
              张贴报告
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="index4">
            <a href="https://ant.design" target="_blank">
            会议主题
            </a>
          </Menu.Item>
          <Menu.Item key="index5">
            <a href="https://ant.design" target="_blank">
            期刊支持
            </a>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                酒店交通
              </span>
            }
          >
            <Menu.Item title="Item 5">
              酒店信息
            </Menu.Item>
            <Menu.Item title="Item 4">
              交通信息
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="index6">
            <a href="https://ant.design" target="_blank">
            历届会议
            </a>
          </Menu.Item>
          <Menu.Item key="index7">
            <a href="https://ant.design" target="_blank">
            赞助信息
            </a>
          </Menu.Item>
          <Menu.Item key="index8">
            <a href="https://ant.design" target="_blank">
            联系我们
            </a>
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank">
              大会照片
            </a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default BasicLayout;
