
import styles from './photo.less';
import ComBox from '../../components/ComBox'
export default function () {
  const IMGS = [
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%203%402x.png',
      target: 'www.fingqi.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%206%402x.png',
      target: 'www.spectra-physics.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%209%402x.png',
      target: 'www.timetechspectra.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%204%402x.png',
      target: 'www.auniontech.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%207%402x.png',
      target: 'www.hamamatsu.com.cn',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%2010%402x.png',
      target: 'www.techcomp.cn',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%205%402x.png',
      target: 'www.yslphotonics.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%208%402x.png',
      target: 'www.coherent.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%2011%402x.png',
      target: 'www.gen-opt.com',
      desc: '',
    },
  ]
  return (
    <ComBox title="赞助信息">
      <div className={styles.sub}>
        <div className={styles.sub_title}><h3>银牌赞助：</h3></div>
        <div className={styles.sub_content}>
          <p>
            <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%201%402x.png" alt="" />
            <a href={`http://www.flucent.com`} target="_blank" rel="noopener noreferrer">www.flucent.com</a>
          </p>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><h3>铜牌赞助：</h3></div>
        <div className={styles.sub_content}>
          {IMGS.map(({url, target}, index) => <p>
            <img src={url} alt="target" style={{height: index === 2 ? '60px' : ''}}/>
            <a href={`http://${target}`} target="_blank" rel="noopener noreferrer">{target}</a>
          </p>
          )}
        </div>
      </div>
    </ComBox>
  );
}
