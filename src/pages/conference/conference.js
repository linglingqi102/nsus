import styles from './conference.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="邀请报告">
      <div className={styles.news}>
        <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E6%9C%AA%E6%A0%87%E9%A2%98-2-01.png" alt="邀约1" />
        <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E6%9C%AA%E6%A0%87%E9%A2%98-2-02.png" alt="邀约2" />
        <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E6%9C%AA%E6%A0%87%E9%A2%98-2-03.png" alt="邀约3" />
      </div>
    </ComBox>
  );
}