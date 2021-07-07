
import styles from './photo.less';
import ComBox from '../../components/ComBox'
export default function () {
  const IMGS = [
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/Logo-%E5%8C%97%E4%BA%AC%E9%A3%8E%E5%90%AF-%E6%A8%AA%E7%89%88.png',
      target: 'www.fingqi.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/Logo-%E6%98%8A%E9%87%8F%E5%85%89%E7%94%B5%402x.png',
      target: 'www.auniontech.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%206%402x.png',
      target: 'www.spectra-physics.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%207%402x.png',
      target: 'www.hamamatsu.com.cn',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/logo-%E5%A4%A9%E7%BE%8E%E4%BB%AA%E6%8B%93%402x.png',
      target: 'www.techcomp.cn',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/logo-%E6%AD%A6%E6%B1%89%E5%AE%89%E6%89%AC%E6%BF%80%E5%85%89-%E7%9F%A2%E9%87%8F%E5%9B%BE.png',
      target: 'www.yslphotonics.com',
      desc: '',
    },
    {
      url: 'http://nsus-static.oss-cn-beijing.aliyuncs.com/logo_%E5%8C%97%E4%BA%AC%E7%9B%B8%E5%B9%B2-1%402x.png',
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
          <p onClick={()=> window.open(`http://www.flucent.com`)}>
            <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%89%88%E7%BB%84%201%402x.png" alt="" />
          </p>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.sub_title}><h3>铜牌赞助：</h3></div>
        <div className={styles.sub_content}>
          <div className={styles.sub_content} style={{width: '80%'}}>
            {IMGS.map(({url, target}, index) => <p onClick={()=> window.open(`http://${target}`)}>
              <img src={url} alt="target"/>
            </p>
            )}
          </div>
          <p onClick={()=> window.open(`http://www.timetechspectra.com`)} style={{width: '2%', marginRight: 0, marginBottom: 30}}>
            <img style={{width: 90}}src="http://nsus-static.oss-cn-beijing.aliyuncs.com/LOGO%E5%A4%A7%E8%BF%9E%E5%88%9B%E9%94%90-%E6%BA%90%E6%96%87%E4%BB%B6.png" alt="" />
          </p>
        </div>
      </div>
    </ComBox>
  );
}
