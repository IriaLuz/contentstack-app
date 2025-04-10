import { usePageContent } from '../hooks/usePageContent';
import HeroBanner from './heroBanner';
import { HeroBannerType } from '../utils/types';

const HomePage: React.FC = () => {
  const { pageData, loading } = usePageContent();

  if (loading || !pageData) return <p>Loading...</p>;

  console.log("Page content:", pageData);

  const blocks = pageData.all_page.items[0].referenceConnection.edges;


  return (
    <div>
      {blocks.map(({ node }, idx) => {
        const type = node.system.content_type_uid;

        switch (type) {
          case 'herobanner':
            return <HeroBanner key={idx} data={node as HeroBannerType} />;
          case 'carousel':
            return <div key={idx}>Carousel goes here</div>;
          case 'accordion':
            return <div key={idx}>Accordion goes here</div>;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default HomePage;

