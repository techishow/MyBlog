import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { fetchAllPosts, Frontmatter } from "../utils/post-utils";

interface IndexProps {
  frontmatters: Frontmatter[];
}

const Index: NextPage<IndexProps> = ({ frontmatters }: IndexProps) => {
  return (
    <Layout>
      <Hero />
      <Posts frontmatters={frontmatters} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postFrontmatters = fetchAllPosts();

  return {
    props: {
      frontmatters: postFrontmatters,
    },
  };
};

export default Index;


<a title="Real Time Web Analytics" href="http://clicky.com/101347416"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
<script async src="//static.getclicky.com/101347416.js"></script>
<noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101347416ns.gif" /></p></noscript>
 </body>
</html>