import { useEffect } from 'react';
import { client } from './lib/contentstackClient';
import HomePage from './components/homePage';

const QUERY = `
  query {
    all_page {
      items {
        title
      }
    }
  }
`;

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.request(QUERY);
        console.log('Contentstack Data:', data);
      } catch (error) {
        console.error('GraphQL error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomePage />
  );
}

export default App;

