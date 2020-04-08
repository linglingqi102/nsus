
import styles from './theme.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="会议主题">
      <p className={styles.title}><strong>会议主题</strong></p>
      <p>本次学术研讨会将以超快光谱研究中的新技术、新应用与挑战为主题，
      主要涵盖飞秒多维光谱理论与实验、界面和频光谱、飞秒时间分辨拉曼光谱、
      半导体自旋电子学、化学反应量子相干控制、瞬态吸收与荧光光谱、激发态理论、
      飞秒生物学等研究方向。</p>
    </ComBox>
  );
}
