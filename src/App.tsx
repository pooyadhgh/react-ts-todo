import Input from './components/Input';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Input onSubmit={data => console.log(data)} />
    </Layout>
  );
};

export default App;
