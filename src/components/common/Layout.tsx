import Navbar from "./Navbar";
import styles from "./styles/Layout.module.scss";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Nextbutton from "../project/Nextbutton";
import { ProjectList } from "../common/ProjectList";
import CommentWrap from "../project/CommentWrap";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { asPath } = router;
  let slug = router.query.slug || [];
  let project =
    ProjectList.filter((project) => asPath.includes(project))[0] || null;

  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      {/* 프로젝트 메인(overview) 페이지나 마지막 메뉴(plus)가 아닌경우에만 CommentWrap,Nextbutton 컴포넌트 리턴 */}
      {slug.length > 0 && !slug.includes("plus") && (
        <Nextbutton project={project} />
      )}
      {/* {slug.length > 0 && !slug.includes("plus") && <CommentWrap />} */}
      <Footer />
    </div>
  );
};

export default Layout;
