
import styles from './meeting.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="会议日程">
      <div className={styles.news}>
        <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E6%97%A5%E7%A8%8B.png" alt="日程" />
      </div>
    </ComBox>
  );
}
