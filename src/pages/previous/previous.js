
import styles from './previous.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="历届会议">
      <p className={styles.title}><strong>会议主题</strong></p>
      <div>
        <div className={styles.sub_title}><h4>第三届全国超快光谱研讨会</h4></div>
        <div className={styles.sub_content}>
          <p>时间：2016年8月19 - 21日</p>
          <p>地点：安徽省合肥市</p>
          <p>承办单位：中国科学技术大学、合肥微尺度物质科学国家实验室</p>
        </div>
      </div>
      <div>
        <div className={styles.sub_title}><h4>第二届全国超快光谱研讨会</h4></div>
        <div className={styles.sub_content}>
          <p>时间：2014年7月18 - 20日</p>
          <p>地点：北京</p>
          <p>承办单位：中国科学院物理研究所</p>
        </div>
      </div>
      <div>
        <div className={styles.sub_title}><h4>第一届全国超快光谱研讨会</h4></div>
        <div className={styles.sub_content}>
          <p>时间：2013年</p>
          <p>地点：北京</p>
          <p>承办单位：中国人民大学</p>
        </div>
      </div>
    </ComBox>
  );
}
