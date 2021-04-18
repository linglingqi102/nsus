
import styles from './index.less';
import NavLink from 'umi/navlink';
import TitleBox from '../components/TitleBox';
import { Carousel } from 'antd';
import { Button } from 'antd';
export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        <TitleBox title="会议资讯" />
        <div className={styles.list}>
          <ul className={styles.msgs}>
            <li>
              <p><a href="/">会议通知（第一轮）</a></p>
              <p><a href="/">会议通知（第二轮）</a></p>
            </li>
          </ul>
        </div>
        <TitleBox title="承办单位" />
        <div className={styles.address}>
          <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E9%99%A2%E5%BE%BD.png" alt="" />
          <div>山东大学</div>
          <div>前沿交叉科学青岛研究院</div>
          <div>分子科学与工程研究院</div>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.banner}>
          <Carousel autoplay effect="fade">
            <img src={require('root/assets/banner_kk1.jpeg')} alt="山东大学" />
            <img src={require('root/assets/banner_kk2.jpeg')} alt="山东大学" />
            <img src={require('root/assets/banner_kk3.jpeg')} alt="山东大学" />
            <img src={require('root/assets/banner_kk4.jpeg')} alt="山东大学" />
          </Carousel>
        </div>
        <TitleBox title="会议简介" />
        <div className={styles.introduce}>
          <p>
            随着国内超快光谱学研究的蓬勃发展，为进一步促进本领域科研人员之间的合作与交流，由山东大学前
            沿交叉科学青岛研究院-分子科学与工程研究院承办、中国科学院大连化学物理研究所分子反应动力学国家
            重点实验室协办的“第五届全国超快光谱研讨会”，拟定于2021年7月18日至21日在山东青岛举行。
          </p>
          <p>
            山东大学是具有悠久历史的著名高校，山东大学青岛校区位于崂山脚下、鳌山湾畔， 地处青岛市“蓝色硅谷”核心
            区，热忱欢迎各位同仁莅临“第五届全国超快光谱研讨会”， 也热忱欢迎国内外各厂商赞助会议并展示产品。
            期待与您相约岛城，共创未来！
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.button_box}>
          <Button type="primary" size="large" className={styles.button_item}>
            <a href="https://www.wjx.top/jq/63301164.aspx" alt="参会注册" target="_blank" rel="noopener noreferrer">参会注册</a>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <NavLink to="/payinfo">缴费信息</NavLink>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <NavLink to="/message">投稿须知</NavLink>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <NavLink to="/info/traffic">酒店交通</NavLink>
          </Button>
        </div>
        <TitleBox title="重要日期" />
        <div className={styles.list}>
          <ul className={styles.time_list}>
            <li>
              <div className={styles.font}>摘要投稿截止日期</div>
              <p className={styles.color}>2021年6月10日</p>
              <div className={styles.font}>优惠注册截止日期</div>
              <p className={styles.color}>2021年6月20日</p>
              <div className={styles.font}>优惠缴费截止日期</div>
              <p className={styles.color}>2021年7月10日</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
