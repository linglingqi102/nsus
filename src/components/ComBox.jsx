
import styles from './styles/ComBox.less';

export default function ComBox(props) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.msg}>
                <div className={styles.time}>来源：yanjiaqi&nbsp;&nbsp;&nbsp;&nbsp;发布时间：2018-07-23 14:11</div>
                <div className={styles.share}>
                    <span>分享到：</span>
                    <img className={styles.b_weixin} src={require('../assets/weixin.gif')} alt="分享到微信" />
                    <img className={styles.b_weixin} src={require('../assets/weixin.gif')} alt="分享到新浪微博" />
                    <img className={styles.b_weixin} src={require('../assets/weixin.gif')} alt="分享到Twitter" />
                    <img className={styles.b_weixin} src={require('../assets/weixin.gif')} alt="分享到Facebook" />
                    <img className={styles.b_weixin} src={require('../assets/weixin.gif')} alt="分享到更多" />
                    <span>54.8K</span>
                </div>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}
