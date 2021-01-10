import styles from "../../styles/Remocon.module.scss";

interface Props {
  children: React.ReactNode;
}

const Remocon: React.FC<Props> = ({ children }) => {
  return <div className={styles.Remocon_wrap}>{children}</div>;
};

export default Remocon;
