
import styles from './meeting.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="会议日程">
      <div className={styles.news}>
        <table className={styles.table} align="center" border="1" cellPadding="1" cellSpacing="1 ">
          <tbody>
            <tr>
              <td>日期</td>
              <td>上午</td>
              <td>下午</td>
            </tr>
            <tr>
              <td rowSpan="1">7月18日</td>
              <td colSpan="2">全天报到（9：00-21：00）</td>
            </tr>
            <tr>
              <td rowSpan="1">7月19日</td>
              <td>开幕式、会议报告</td>
              <td>会议报告</td>
            </tr>
            <tr>
              <td rowSpan="1">7月20日</td>
              <td>会议报告</td>
              <td>会议报告</td>
            </tr>
            <tr>
              <td rowSpan="2">7月21日</td>
              <td>会议报告、闭幕式</td>
              <td>学术自由讨论</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ComBox>
  );
}
