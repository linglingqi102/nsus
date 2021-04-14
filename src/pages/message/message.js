
import styles from './message.less';
import ComBox from '../../components/ComBox'

export default function () {
  return (
    <ComBox title="投稿须知">
      <h1 style={{textAlign: 'center'}}>论文摘要撰写说明及模板</h1>
      <div className={styles.content}>
        <p>1. 论文摘要为中文或英文，包括题目（中、英文均可）、作者姓名及工作单位（通讯作者以右上角标记星号）、邮编及通讯作者的E-mail地址。</p>
        <p>2. 中文500字左右，英文300词左右，根据需要可附图，摘要整体篇幅不超过A4纸一个页面。</p>
        <p>3. 页面设置为A4，页边距为“适中”，上下边距为2.54 cm，左右侧页边距为1.91 cm；</p>
        <p>4. 请使用摘要模板，在相应位置填写摘要内容，并删除提示内容；</p>
        <p>5. 论文撰写完成后，保存为Word文档以邮件形式提交。（会议邮箱：nsus2021@sdu.edu.cn）</p>
        <a href="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E9%99%84%E4%BB%B61.%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E8%B6%85%E5%BF%AB%E5%85%89%E8%B0%B1%E7%A0%94%E8%AE%A8%E4%BC%9A%EF%BC%88%E6%91%98%E8%A6%81%EF%BC%89%E6%A8%A1%E6%9D%BF.doc">附件1.第五届全国超快光谱研讨会（摘要）模板</a>
      </div>
    </ComBox>
  );
}
