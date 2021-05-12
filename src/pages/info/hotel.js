
import styles from './hotel.less';
import ComBox from '../../components/ComBox'
const URI = [
  'http://nsus-static.oss-cn-beijing.aliyuncs.com/hotel1.png',
  'http://nsus-static.oss-cn-beijing.aliyuncs.com/hotel2.png',
  'http://nsus-static.oss-cn-beijing.aliyuncs.com/hotel3.png',
]
export default function () {
  return (
    <ComBox title="酒店信息">
      <div className={styles.content}>
        <p style={{marginBottom: 30}}>本次会议拟定于2021年7月18日-21日在“<span className={styles.textBlue}>青岛国际院士港大酒店</span>”举办。</p>
        <p>会务组已在下列酒店以优惠价格为参会代表预留一定数量的房间，请通过<a href="https://www.wjx.cn/vj/YHyjRrz.aspx" rel="noreferrer" target="_blank">https://www.wjx.cn/vj/YHyjRrz.aspx</a>链接进行酒店入住信息登记。</p>
        <p>1. 青岛国际院士港大酒店（青岛市李沧区金水路171号院）</p>
        <ul>
          <li>豪华双床/高级大床房：480元/间 含早</li>
          <li>雅致双床/大床房：430元/间 含早</li>
        </ul>
        <p>2. 青岛国际院士港信潮大酒店（青岛市崂山区松岭路395号）</p>
        <ul style={{marginBottom: 30}}>
          <li>雅致双床/大床房：400元/间 含早</li>
        </ul>
        <p>联系人：张洁  0532-58632168/13061370150</p>
        <p className={styles.textBlue}>注：会议住宿费由参会者自行与酒店结算。由于7月21日退房时间集中，请参会代表在当天尽量提前去酒店前台开具发票，避免耽误您的行程。</p>
        <div className={styles.imgBox}>
          <img src={URI[0]} alt="" />
          <img src={URI[1]} alt=""/>
          <img src={URI[2]} alt=""/>
        </div>
      </div>
    </ComBox>
  );
}
