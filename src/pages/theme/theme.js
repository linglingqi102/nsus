import styles from './theme.less';
import ComBox from '../../components/ComBox';

export default function() {
  return (
    <ComBox title="会议主题">
      <p className={styles.title}>
        <strong>会议主题</strong>
      </p>
      <p className={styles.content}>
        本次研讨会将以超快光谱研究中的新技术、新应用与挑战为主题，主要涵盖8个研究方向：
      </p>
      <table className={styles.table} align="center" border="1" cellPadding="1" cellSpacing="1 ">
        <tbody>
          <tr>
            <td rowSpan="1" className={styles.width}>1</td>
            <td>飞秒多维光谱理论与实验</td>
          </tr>
          <tr>
            <td rowSpan="1" className={styles.width}>2</td>
            <td>界面和频光谱</td>
          </tr>
          <tr>
            <td rowSpan="1" className={styles.width}>3</td>
            <td>飞秒时间分辨拉曼光谱</td>
          </tr>
          <tr>
            <td rowSpan="1" className={styles.width}>4</td>
            <td>半导体自旋电子学</td>
          </tr>
          <tr>
            <td rowSpan="1" className={styles.width}>5</td>
            <td>化学反应量子相干控制</td>
          </tr>
          <tr>
            <td rowSpan="1" className={styles.width}>6</td>
            <td>瞬态吸收与荧光光谱</td>
          </tr>
          <tr>
            <td rowSpan="1" className={styles.width}>7</td>
            <td>激发态理论</td>
          </tr>
          <tr>
            <td rowSpan="1" className={styles.width}>8</td>
            <td>飞秒生物学</td>
          </tr>
        </tbody>
      </table>
    </ComBox>
  );
}
