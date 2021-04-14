
import styles from './meeting.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="会议日程">
      <div className={styles.news}>
        <p className={styles.titlename}><strong>会议总体日程</strong></p>
        <table className={styles.table} align="center" border="1" cellPadding="1" cellSpacing="1 ">
          <tbody>
            <tr>
              <td rowSpan="1">7月18日</td>
              <td>8:00 - 22:30</td>
              <td>全天报到</td>
            </tr>
            <tr>
              <td rowSpan="1">7月19日</td>
              <td>
                <p>8:30 - 12:00 </p>
                <p>14:30 - 18:00 </p>
                <p>18:10 - 19:30 </p>
              </td>
              <td>
                <p>开幕式、学术报告</p>
                <p>学术报告</p>
                <p>晚餐</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">7月20日</td>
              <td>
                <p>8:30 - 18:00 </p>
                <p>18:10 - 19:30 </p>
              </td>
              <td>
                <p>学术报告</p>
                <p>晚餐</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">7月21日</td>
              <td>
                <p>8:30 - 12:00 </p>
                <p>14:30 - 17:00 </p>
                <p>17:40 - 21:30 </p>
              </td>
              <td>
                <p>学术报告</p>
                <p>学术报告、闭幕式</p>
                <p>晚宴</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <a href="/meeting" target="_blank">
            <span>点击此处查看会议日程</span>
          </a>
        </p>
      </div>
    </ComBox>
  );
}
