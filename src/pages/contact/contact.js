
import styles from './contact.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="联系我们">
      <div className={styles.sub}>
      <div className={styles.sub_title}><h4>通信地址：</h4></div>
      <div className={styles.sub_content}>
        <p>山东省青岛市即墨滨海路72号山东大学青岛校区  266237</p>
      </div>
    </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><h4>会务咨询（注册、投稿、酒店住宿、缴费及发票）：</h4></div>
        <div className={styles.sub_content}>
          <p>张洁：0532-58632168  18438570716</p>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><h4>赞助联系：</h4></div>
        <div className={styles.sub_content}>
          <p>金老师：13971603918   Email：jinbing@sdu.edu.cn</p>
          <p>郑老师：13478599264   Email：zhengdy@sdu.edu.cn</p>
          <p>张老师：17615041608   Email：rlzhang@sdu.edu.cn</p>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><h4>会场与墙报：</h4></div>
        <div className={styles.sub_content}>
            <p>郑老师：13478599264   Email：zhengdy@sdu.edu.cn</p>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><h4>班车与交通：</h4></div>
        <div className={styles.sub_content}>
          <p>张老师：17615041608   Email：rlzhang@sdu.edu.cn</p>
          <p>毛老师：17615040316   Email：maoxin@sdu.edu.cn</p>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><h4>会议邮箱：</h4></div>
        <div className={styles.sub_content}>
          <p><a href="/">nsus2020@sdu.edu.cn</a></p>
        </div>
      </div>
      <div className={styles.sub}>
      <div className={styles.sub_title}><h4>会议网站：</h4></div>
        <div className={styles.sub_content}>
            <p><a href="/">http://nsus2021.com</a></p>
        </div>
      </div>
    </ComBox>
  );
}