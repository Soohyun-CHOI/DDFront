import "../styles/globals.scss";
import { AppProps } from "next/app";
import Layout from "../src/components/common/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>데이타덕</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
      </Head>
      {/* lol 프로젝트와 lol overview가 아닌 경우 양쪽 마진 컨테이너 적용안함 */}
      {router.pathname.includes("lol") || router.pathname === "/" ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
