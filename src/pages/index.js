
import styles from './index.less';
import NavLink from 'umi/navlink';
import TitleBox from '../components/TitleBox';
export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        <TitleBox title="NSUS 2020" url="/" />
        <div className={styles.llist}>
          <ul className={styles.news}>
            <li><NavLink to="/">大会照片</NavLink></li>
            <li><NavLink to="/">组织机构</NavLink></li>
            <li><NavLink to="/">期刊支持</NavLink></li>
            <li><NavLink to="/">历届会议</NavLink></li>
            <li><NavLink to="/">联系我们</NavLink></li>
          </ul>
        </div>
        <TitleBox title="会议通知" url="/" />
        <div className={styles.llist}>
          <ul className={styles.msgs}>
            <li>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第四届全国超快光谱研讨会会议通知-通用版</a></p>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第四届全国超快光谱研讨会第一轮通知</a></p>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第四届全国超快光谱研讨会第一轮通知</a></p>
              <p><a href="http://www.htcis.net/CKUploads/files/2018/7/NSUS2018%e7%ac%ac%e4%b8%89%e8%bd%ae%e4%bc%9a%e8%ae%ae%e9%80%9a%e7%9f%a5-%e9%80%9a%e7%94%a8.pdf">第四届全国超快光谱研讨会第三轮通知-参会注意事项</a></p>
            </li>
          </ul>
        </div>
        <TitleBox title="赞助方案" url="/" />
        <div className={styles.llist}>
          <ul className={styles.news}>
            <li><NavLink to="/">NSUS 2020 赞助方案</NavLink></li>
          </ul>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.banner}>
        </div>
        <TitleBox title="会议简介" />
        <div className={styles.introduce}>
          <p>
            为促进国内超快光谱学研究的发展以及本领域科研人员之间的合作与交流，
            由华东师范大学精密光谱科学与技术国家重点实验室承办的“第四届全国超快光谱研讨会”，
            预定于 2018年7月15-18日期间在上海市召开。
          </p>
          <div><a href="/">点击此处查看会议日程</a></div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.button_box}>
          <div className={styles.button_item}>参会投稿</div>
          <div className={styles.button_item}>参会注册</div>
          <div className={styles.button_item}>酒店</div>
        </div>
        <TitleBox title="重要日期" url="/" />
        <div className={styles.timelist}>
          <ul className={styles.msgs}>
            <li>
              <div className={styles.font}>摘要投稿截止日期</div>
              <p className={styles.color}>2018年6月10日</p>
              <div className={styles.font}>优惠注册截止日期</div>
              <p className={styles.color}>2018年6月10日</p>
              <div className={styles.font}>在线缴费截止日期</div>
              <p className={styles.color}>2018年7月10日</p>
            </li>
          </ul>
        </div>
        <TitleBox title="承办单位" url="/" />
        <div className={styles.school}>
          <div>
            <a href="http://www.lps.ecnu.edu.cn/" target="_blank" rel="noopener noreferrer">
              <img src={require('root/assets/lps.jpg')} alt="lps" />
            </a>
          </div>
          <div><strong>华东师范大学</strong></div>
          <div><strong>精密光谱科学与技术国家重点实验室</strong></div>
          <div><strong>State Key Laboratory of Precision Spectroscopy</strong></div>
          <div><strong>East China Normal University</strong></div>
        </div>
      </div>
    </div>
  );
}
