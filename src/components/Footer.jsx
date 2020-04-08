import React from 'react';
import styles from './styles/Footer.less';


const Footer = props => {
  return (
    <div className={styles.footer}>
      <p className={styles.all}>©版权归中国激光杂志社所有</p>
      <p className={styles.bottom} >
        <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备20008510号 &nbsp;&nbsp;</a>
        <img src={require('root/assets/Footer/police.png')} className={styles.image} alt="公安" />
        <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
          京公网安备 31011402005521号
        </a>
      </p>
    </div>
  );
};
export default Footer;
