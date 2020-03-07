import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.title} />
      {props.children}
    </div>
  );
}

export default BasicLayout;
