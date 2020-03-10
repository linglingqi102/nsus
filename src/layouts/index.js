import styles from './index.css';
import Helmet from 'react-helmet';
import Footer from '../components/Footer'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Helmet>
        <title>第五届全国超快光谱研讨会</title>
        <link rel="icon" href={require('root/assets/favicon.ico')} />
      </Helmet>
      <div className={styles.title} />
      {props.children}
      <Footer />
    </div>
  );
}

export default BasicLayout;
