
import styles from './meeting.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="会议日程">
      <div className = {styles.news}>
        <p className = {styles.titlename}><strong>会议总体日程</strong></p>
        <table className = {styles.table} align="center" border="1" cellPadding="1" cellSpacing="1 ">
          <tbody>
            <tr>
              <td rowSpan="2">7月31日</td>
              <td>12:00 - 22:00</td>
              <td>报到</td>
            </tr>
            <tr>
              <td>12:00 - 22:00</td>
              <td>全天注册</td>
            </tr>
            <tr>
              <td rowSpan="2">7月15日</td>
              <td>12:00 - 22:00</td>
              <td>报到</td>
            </tr>
            <tr>
              <td>12:00 - 22:00</td>
              <td>会议报告及海报展示</td>
            </tr>
          </tbody>
        </table>
        <p>
          <a href="#" target="_blank">
            <span>点击此处查看会议日程</span>
          </a>
        </p>
      </div>
    </ComBox>
  );
}
