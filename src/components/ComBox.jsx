
import styles from './styles/ComBox.less';

export default function ComBox(props) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}
