import { usePageContent } from '../hooks/usePageContent';
const HomePage: React.FC = () => {
  const { pageData, loading } = usePageContent();

  if (loading || !pageData) return <p>Loading...</p>;
console.log("Page content:", pageData)
  return (
    <div>
      {pageData.all_page.items.map((item, idx) => {
        
        return (
          <div key={idx}>
            Hola this is the homePage
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
