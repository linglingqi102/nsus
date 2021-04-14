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
      <ol className={styles.sub_content}>
        <li>飞秒多维光谱理论与实验</li>
        <li>界面和频光谱</li>
        <li>飞秒时间分辨拉曼光谱</li>
        <li>半导体自旋电子学</li>
        <li>化学反应量子相干控制</li>
        <li>瞬态吸收与荧光光谱</li>
        <li>激发态理论</li>
        <li>飞秒生物学</li>
      </ol>
    </ComBox>
  );
}
