import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center my-5">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
