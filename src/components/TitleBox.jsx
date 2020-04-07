import React from 'react';
import NavLink from 'umi/navlink';
import styles from './styles/TitleBox.less';


const TitleBox = props => {
    return (
        <div className={styles.title_box}>
            <div className={styles.name}>
                <div className={styles.name_text}>{props.title}</div>
                {props.url ? <div className={styles.name_more}>
                    <NavLink to={props.url}>more»</NavLink>
                </div> : null}
            </div>
            <div className={styles.line}>
                <span className={styles.c1}></span>
                <span className={styles.c2}></span>
            </div>
        </div>
    );
};
export default TitleBox;
