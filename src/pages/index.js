
import styles from './index.less';
import NavLink from 'umi/navlink';
import TitleBox from '../components/TitleBox';
import { Carousel } from 'antd';
import { Button } from 'antd';
export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        {/*<TitleBox title="NSUS 2020" url="/" />
        <div className={styles.llist}>
          <ul className={styles.news}>
            <li><NavLink to="/photo">大会照片</NavLink></li>
            <li><NavLink to="/organization">组织机构</NavLink></li>
            <li><NavLink to="/theme">会议主题</NavLink></li>
            <li><NavLink to="/previous">历届会议</NavLink></li>
            <li><NavLink to="/contact">联系我们</NavLink></li>
          </ul>
        </div>*/}
        <TitleBox title="会议通知" url="/" />
        <div className={styles.llist}>
          <ul className={styles.msgs}>
            <li>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第五届全国超快光谱研讨会会议通知-通用版</a></p>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第五届全国超快光谱研讨会第一轮通知</a></p>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第五届全国超快光谱研讨会第一轮通知</a></p>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第五届全国超快光谱研讨会第三轮通知-参会注意事项</a></p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.banner}>
          <Carousel autoplay effect="fade">
            <img src={require('root/assets/zhanshi1.jpeg')} alt="山东大学" />
            <img src={require('root/assets/zhanshi2.jpeg')} alt="山东大学" />
            <img src={require('root/assets/zhanshi3.jpeg')} alt="山东大学" />
            <img src={require('root/assets/zhanshi4.jpeg')} alt="山东大学" />
          </Carousel>
        </div>
        <TitleBox title="会议简介" />
        <div className={styles.introduce}>
          <p>
            随着国内超快光谱学研究的蓬勃发展，为进一步促进本领域科研人员之间的合作与交流，
            由山东大学分子科学与工程研究院承办、中国科学院大连化学物理研究所分子反应动力学国家重
            点实验室协办的“第五届全国超快光谱研讨会”，预定于2020年7月31日-8月3日期间在山东青岛召开。
          </p>
          <p>
            山东大学是具有悠久历史的著名高校，山东大学青岛校区位于崂山脚下、鳌山湾畔，
            地处青岛市“蓝色硅谷”核心区，热忱欢迎各位同仁莅临“第五届全国超快光谱研讨会”，
            也热忱欢迎国内外各厂商赞助会议并展示产品。相约岛城，共创未来！
          </p>
          <div><a href="/">点击此处查看会议日程</a></div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.button_box}>
          <Button type="primary" size="large" className={styles.button_item} disabled>
            <NavLink to="/info/hotel">参会投稿</NavLink>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <a href="https://www.wjx.top/jq/63301164.aspx" alt="参会注册" target="_blank" rel="noopener noreferrer">参会注册</a>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <NavLink to="/info/hotel">酒店</NavLink>
          </Button>
        </div>
        <TitleBox title="重要日期" url="/" />
        <div className={styles.timelist}>
          <ul className={styles.msgs}>
            <li>
              <div className={styles.font}>摘要投稿截止日期</div>
              <p className={styles.color}>2020年6月10日</p>
              <div className={styles.font}>优惠注册截止日期</div>
              <p className={styles.color}>2020年6月10日</p>
              <div className={styles.font}>在线缴费截止日期</div>
              <p className={styles.color}>2020年7月10日</p>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
}
