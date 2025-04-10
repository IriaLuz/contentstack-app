import { useEffect, useState } from 'react';
import { client } from '../lib/contentstackClient';
import { PAGE_QUERY } from '../graphql/queries';
import { PageContent } from '../utils/types';

export const usePageContent = () => {
  const [pageData, setPageData] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.request<PageContent>(PAGE_QUERY);
        setPageData(response); 
      } catch (error) {
        console.error('Failed to fetch page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, []);

  return { pageData, loading };
};


