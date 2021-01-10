import { useRouter } from "next/router";

const View: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug || [];
  return <h1>Slug: Url이 {slug} 페이지 입니다!</h1>;
};

export default View;
