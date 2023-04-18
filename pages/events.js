import { getEvents } from '../lib/api';
import Layout from '../components/Layout';
import Events from '../components/Events';

export async function getStaticProps() {
  const events = await getEvents();
  return {
    props: { events },
    revalidate: 60,
  };
}

export default function EventsPage({ events }) {
  return (
    <Layout>
      <Events events={events} />
    </Layout>
  );
}
