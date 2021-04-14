
import styles from './payinfo.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="缴费信息">
      <p>为便于我们预定酒店，会议采用网上注册方式、银行转账（会议网站：http://nsus2021.com/）。会议期间住宿费用自理。</p>
      <h4>
      1. 会议注册费: <span style={{color: 'red'}}>6.30号之前缴费的代表可在报道当日领取会务发票。</span>
      </h4>
      <table className={styles.table} align="center" border="1" cellPadding="1" cellSpacing="1 ">
          <tbody>
            <tr>
              <td></td>
              <td>优惠注册（6.30号之前）</td>
              <td>优惠注册（6.30号之前）</td>
            </tr>
            <tr>
              <td>教师及博士后代表</td>
              <td>2100</td>
              <td>2400</td>
          </tr>
          <tr>
              <td>研究生代表</td>
              <td>1200</td>
              <td>1600</td>
            </tr>
          </tbody>
      </table>
      <h4>2. 注册费缴费方式:</h4>
      <h5>（1）银行转账</h5>
      <p>单位名称：山东大学</p>
      <p>开户银行：中国建设银行股份有限公司即墨蓝谷支行（联行号：105452100181）</p>
      <p>银行账号：37150199766500000030-0002</p>
      <h5>注意：</h5>
      <p>1）账号中的“-”为半角字符的减号，漏输或错输会导致转账失败。</p>
      <p>2）转帐时务必在附件留言栏内标注“nsus2021+单位+姓名”。</p>
      <p>若一人为多个参会人员交纳注册费，要来信说明是为哪些人员交纳了注册费，是谁交纳的，开具发票时是在一起开还是一个一个开。</p>
      <h5>（2）现场缴费：</h5>
      <p>接受pos机刷卡，可扫支付宝或微信，不接受现金及其他方式。需留下发票信息和邮寄地址，方便后期邮寄发票。</p>
    </ComBox>
  );
}
