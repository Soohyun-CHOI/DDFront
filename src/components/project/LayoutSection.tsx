import styles from "./styles/LayoutSection.module.scss";
import Menu from "./Menu";
import Remocon from "./Remocon";
import { menuInfo } from "./Menulist";

interface Props {
  children: React.ReactNode;
}

const LayoutSection = ({ children }: Props) => {
  return (
    <>
      <div className={styles.section_wrap}>
        <div className={styles.section_left}>{children}</div>
        <div className={styles.section_right}>
          <Remocon>
            <Menu menuInfo={menuInfo[0]} />
            <Menu menuInfo={menuInfo[1]} />
            <Menu menuInfo={menuInfo[2]} />
            <Menu menuInfo={menuInfo[3]} />
            <Menu menuInfo={menuInfo[4]} />
            <Menu menuInfo={menuInfo[5]} />
            <Menu menuInfo={menuInfo[6]} />
          </Remocon>
        </div>
      </div>
    </>
  );
};

export default LayoutSection;
