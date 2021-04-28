
import styles from './organization.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="组织机构">
      <div className={styles.news}>
        <p className={styles.title}><strong>会议名誉主席</strong></p>
        <div className={styles.first}>
          <div className={styles.item_first}>
            <p>杨学明</p>
          </div>
        </div>
        <p className={styles.title}><strong>大会主席</strong></p>
        <div className={styles.first}>
          <div className={styles.item_first}>
            <p>韩克利、翁羽翔、张东辉</p>
          </div>
        </div>
        <p className={styles.title}><strong>会议学术顾问</strong></p>
        <table className={styles.table} align="center" border="0" cellPadding="3" cellSpacing="3">
          <tbody>
            <tr>
              <td>崔执凤</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td>龚旗煌</td>
            </tr>
            <tr>
              <td>韩克利</td>
              <td>胡  钧</td>
              <td>赖天树</td>
              <td>李儒新</td>
              <td>李  嫕</td>
            </tr>
            <tr>
              <td>连天泉</td>
              <td>罗  毅</td>
              <td>孙真荣</td>
              <td>翁羽翔</td>
              <td>王海宇</td>
            </tr>
            <tr>
              <td>王鸿飞</td>
              <td>王建平</td>
              <td>王  鹏</td>
              <td>王学斌</td>
              <td>王朝晖</td>
            </tr>
            <tr>
              <td>夏安东</td>
              <td>许宜铭</td>
              <td>杨学明</td>
              <td>杨延强</td>
              <td>张  冰</td>
            </tr>
            <tr>
              <td>张建平</td>
              <td>郑俊荣</td>
              <td>郑旭明</td>
              <td>仲冬平</td>
              <td>庄  巍</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.title}><strong>组织委员会</strong></p>
        <table className={styles.table} align="center" border="0" cellPadding="3" cellSpacing="3">
          <tbody>
            <tr>
              <td>韩克利</td>
              <td>邓伟侨</td>
              <td>周潘旺</td>
              <td>楼张蓉</td>
              <td>郑道元</td>
              <td>张瑞玲</td>
              <td>张洁</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ComBox>
  );
}
