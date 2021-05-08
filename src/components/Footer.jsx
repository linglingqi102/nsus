import React from 'react';
import styles from './styles/Footer.less';


const Footer = props => {
  return (
    <div className={styles.footer}>
      <p className={styles.bottom} >
        <a href="https://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备20008510号-3 &nbsp;&nbsp;</a>
      </p>
    </div>
  );
};
export default Footer;
