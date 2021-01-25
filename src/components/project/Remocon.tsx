import styles from "./styles/Remocon.module.scss";

interface Props {
  children: React.ReactNode;
}

const Remocon = ({ children }: Props) => {
  return <div className={styles.Remocon_wrap}>{children}</div>;
};

export default Remocon;
