
import styles from './traffic.less';
import ComBox from '../../components/ComBox'
const URI = [
  'http://nsus-static.oss-cn-beijing.aliyuncs.com/map.png',
]
export default function () {
  return (
    <ComBox title="交通信息">
      <div className={styles.content}>
        <p style={{marginBottom: 30}}>本次会议拟定于2021年7月18日-21日在“<span className={styles.textBlue}>青岛国际院士港大酒店</span>”举办。</p>
        <p>1. 青岛北站</p>
        <p>方案一：在铁路北站东广场站乘坐387路公交车至李家上流小区站下车，再步行到达酒店，用时约1小时。</p>
        <p>方案二：在青岛北站地铁站乘坐3号线至李村站下车，再从夏庄路向阳路站乘坐128路公交车至李家上流小区站下车，后步行到达酒店，用时约1小时。</p>
        <p>方案三：出租车约30元，用时约25分钟，距离约12公里。</p>
        <p>2. 青岛流亭国际机场</p>
        <p>方案一：在流亭站乘坐地铁1号线至青岛北站，再换乘地铁3号线至李村站下车，然后从夏庄路向阳路站乘坐128路公交车至李家上流小区站，后步行到达酒店，用时约1小时30分钟。
        </p>
        <p>方案二：出租车约50元，用时约40分钟，距离约20公里。</p>
        <p>3. 青岛站</p>
        <p>方案一：在青岛站地铁站乘坐3号线至李村站下车，再从夏庄路向阳路站乘坐128路公交车至李家上流小区站下车，后步行到达酒店，用时约1小时30分钟。</p>
        <p>方案二：出租车约70元，用时约50分钟，距离约25公里。</p>
        <div className={styles.imgBox}>
          <img src={URI[0]} alt="" />
        </div>
      </div>
    </ComBox>
  );
}