import { usePageContent } from '../hooks/usePageContent';
import HeroBanner from './heroBanner';
import Accordion from './accordion';
import { HeroBannerType, AccordionType, CarouselType } from '../utils/types';
import Carousel from './carousel';

const HomePage: React.FC = () => {
  const { pageData, loading } = usePageContent();

  if (loading || !pageData) return <p>Loading...</p>;

  console.log("Page content:", pageData);

  const blocks = pageData.all_page.items[0].referenceConnection.edges;


  return (
    <div className='bg-gray-100'>
      <div className="mx-auto max-w-7xl px-xl py-s text-gray-900">
        {blocks.map(({ node }, idx) => {
          const type = node.system.content_type_uid;
          switch (type) {
            case 'herobanner':
              return <HeroBanner key={idx} data={node as HeroBannerType} />;
            case 'carousel':
              return <Carousel key={idx} data={node as CarouselType} />;
            case 'accordion':
              return <Accordion key={idx} data={node as AccordionType} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default HomePage;

