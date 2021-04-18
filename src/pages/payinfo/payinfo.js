
import styles from './payinfo.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="缴费信息">
      <p><strong>会议采用在线注册方式，登录会议官方网站自行注册，并完善发票等相关信息。</strong></p>
      <h4>1. 会议注册费:</h4>
      <div>（1）2021年6月30日之前：</div>
      <div className={styles.content}>普通代表：2200元/位</div>
      <div className={styles.content}>学生代表：1200元/位</div>
      <div>（2）后期及现场注册：</div>
      <div className={styles.content}>普通代表：2400元/位</div>
      <div className={styles.content}>学生代表：1600元/位</div>
      <h4>2.注册费缴费方式：对公转账</h4>
      <h4>（1）银行转账</h4>
      <div className={styles.content}>单位名称：山东大学</div>
      <div className={styles.content}>开户银行：中国建设银行股份有限公司即墨蓝谷支行（联行号：105452100181）</div>
      <div className={styles.content}>银行账号：37150199766500000030-0002</div>
      <h4>（2）现场缴费：</h4>
      <div className={styles.content}>接受pos机刷卡，可扫支付宝或微信，不接受现金及其他方式。需留下发票信息和详细邮寄地址，方便会后邮寄发票。</div>
      <h4>注意：</h4>
      <div>（1）账号中的“-”为半角字符的减号，漏输或错输会导致转账失败。</div>
      <div>（2）转帐时务必在附件留言栏内标注“<a href="/">nsus2021+姓名+单位</a>”。</div>
      <div>（3）若一人为多个参会人员交纳注册费，要来信说明是为哪些人员交纳了注册费，是谁交纳的，开具发票时是在一起开还是一个一个开。（会议邮箱：<a href="/">nsus2020@sdu.edu.cn</a>）</div>
      <div>（4）6.30号之前缴费的代表可在报道当日领取会务发票。</div>
    </ComBox>
  );
}
