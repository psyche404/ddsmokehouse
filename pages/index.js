import { getMenu } from '../lib/api';
import Layout from '../components/Layout';
import Menu from '../components/Menu';

export async function getStaticProps() {
  const menu = await getMenu();
  return {
    props: { menu },
    revalidate: 60,
  };
}

export default function Home({ menu }) {
  return (
    <Layout>
      <div className="home">
        {/* Your Home page content */}
      </div>
      <Menu menu={menu} />
    </Layout>
  );
}
