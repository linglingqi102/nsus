
import styles from './invitation.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="口头报告">
      <div className={styles.news}>
        <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E7%94%BB%E6%9D%BF%201%403x.png" alt="口头1" />
        <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E7%94%BB%E6%9D%BF%202%403x.png" alt="口头2" />
      </div>
    </ComBox>
  );
}