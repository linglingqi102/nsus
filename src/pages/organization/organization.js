
import styles from './organization.less';
import ComBox from '../../components/ComBox'
import Item from 'antd/lib/list/Item';

export default function () {
  return (
    <ComBox title="组织机构">
      <div className = {styles.news}>
        <p className = {styles.titlename}><strong>组织机构</strong></p>
        <p className = {styles.title}><strong>大会主席</strong></p>
        <div className = {styles.first}>
          <div className = {styles.item_first}>
            <img src={require('root/assets/lps.jpg')} alt="lps"></img>
            <p>龚旗煌</p>
            <p>北京大学</p>
          </div>
          <div className = {styles.item_first}>
            <img src={require('root/assets/lps.jpg')} alt="lps"></img>
            <p>龚旗煌</p>
            <p>北京大学</p>
          </div>
          <div className = {styles.item_first}>
            <img src={require('root/assets/lps.jpg')} alt="lps"></img>
            <p>龚旗煌</p>
            <p>北京大学</p>
          </div>
        </div>
        <p className = {styles.title}><strong>组织委员会主席</strong></p>
        <div className = {styles.first}>
          <div className = {styles.item_first}>
            <img src={require('root/assets/lps.jpg')} alt="lps"></img>
            <p>吴健</p>
            <p>华东师范大学</p>
          </div>
          <div className = {styles.item_first}>
            <img src={require('root/assets/lps.jpg')} alt="lps"></img>
            <p>翁羽翔</p>
            <p>中国科学院物理研究所</p>
          </div>
        </div>
        <p className = {styles.title}><strong>会议专业委员会</strong></p>
        <table className = {styles.table} align="center" border="0" cellPadding="3" cellSpacing="3">
          <tbody>
            <tr>
              <td>崔执凤</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td>龚旗煌</td>
            </tr>
            <tr>
              <td>崔执凤</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td>龚旗煌</td>
            </tr>
            <tr>
              <td>崔执凤</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td>龚旗煌</td>
            </tr>
            <tr>
              <td>崔执凤</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td>龚旗煌</td>
            </tr>
            <tr>
              <td>崔执凤</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td>龚旗煌</td>
            </tr>
            <tr>
              <td>崔执凤</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td>龚旗煌</td>
            </tr>
          </tbody>
        </table>
        <p className = {styles.title}><strong>组织委员会</strong></p>
        <table className = {styles.table} align="center" border="0" cellPadding="3" cellSpacing="3">
          <tbody>
            <tr>
              <td>程&nbsp;&nbsp;亚</td>
              <td>丁大军</td>
              <td>方维海</td>
              <td>高毅勤</td>
              <td className ={styles.tdwidth}>Konstantin&nbsp;E. Dorfman</td>
            </tr>
          </tbody>
        </table>
        <p className = {styles.title}><strong>承办单位</strong></p>
        <p className={styles.unitimg}>
          <img src={require('root/assets/lps.jpg')} alt="lps"></img>
        </p>
        <p className={styles.unit}>华东师范大学 精密光谱科学与技术国家重点实验室</p>
      </div>
    </ComBox>
  );
}
