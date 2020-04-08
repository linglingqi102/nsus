
import styles from './sponsorship.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="赞助信息">
      <p className={styles.title}><strong>赞助商</strong></p>
      <div className={styles.sub}>
        <div className={styles.sub_title}><p>金牌赞助</p></div>
        <div className={styles.sub_content}>
          <a href="http://www.flucent.com/" alt="flucent" >
            <img src={require('../../assets/flucent.jpg')} alt="flucent" title="flucent" />
          </a>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><p>银牌赞助</p></div>
        <div className={styles.sub_content}>
          <a href="http://www.flucent.com/" alt="flucent" >
            <img src={require('../../assets/flucent.jpg')} alt="flucent" title="flucent" />
          </a>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><p>铜牌赞助</p></div>
        <div className={styles.sub_content}>
          <a href="http://www.flucent.com/" alt="flucent" >
            <img src={require('../../assets/flucent.jpg')} alt="flucent" title="flucent" />
          </a>
        </div>
      </div>
    </ComBox>
  );
}