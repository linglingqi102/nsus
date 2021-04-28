
import styles from './report.css';
import ComBox from '../../components/ComBox'
export default function() {
  return (
    <ComBox title="张贴报告">
      <p className={styles.message}>张贴报告需要参会代表自己使用背胶纸喷绘（彩色或黑白），大小统一为宽度90cm，高度120cm。张贴报告的页脚请务必标注联系人、联系电话、工作单位及E-mail信息。
      </p>
    </ComBox>
  );
}
