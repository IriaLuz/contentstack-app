import { useEffect } from 'react';
import { client } from './lib/contentstackClient';

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
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold">Hello from Contentstack 👋</h1>
    </div>
  );
}

export default App;

