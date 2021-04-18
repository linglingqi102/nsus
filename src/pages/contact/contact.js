
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
        <div className={styles.sub_title}><h4>会务联系：</h4></div>
        <div className={styles.sub_content}>
          <p>张  洁：0532-58632168  13061370150</p>
          <p>郑道元：0532-58632168  13478599264</p>
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