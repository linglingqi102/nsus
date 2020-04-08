
import styles from './contact.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="联系我们">
      <p className={styles.title}><strong>赞助商</strong></p>
      <div>
        <div className={styles.sub_title}><h4>会议联系人ssss：</h4></div>
        <div className={styles.sub_content}>
          <p>稍后更新...</p>
        </div>
      </div>
      <div>
        <div className={styles.sub_title}><h4>会议官方邮箱：</h4></div>
        <div className={styles.sub_content}>
          <p>nsus2020@sdu.edu.cn</p>
        </div>
      </div>
      <div>
        <div className={styles.sub_title}><h4>通信地址：</h4></div>
        <div className={styles.sub_content}>
          <p>山东省青岛市即墨区滨海路72号 山东大学青岛校区 266237</p>
        </div>
      </div>
      <div>
        <div className={styles.sub_title}><h4>会议网站：</h4></div>
        <div className={styles.sub_content}>
          <p><a href="http://nsus5-2020.com/" alt="http://nsus5-2020.com/" title="http://nsus5-2020.com/">nsus5-2020.com</a></p>
        </div>
      </div>
    </ComBox>
  );
}