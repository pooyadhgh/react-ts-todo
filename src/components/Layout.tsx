import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-row items-start justify-center flex-wrap my-5 h-full">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
