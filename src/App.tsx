import Input from './components/Input';
import Layout from './components/Layout';
import Todolist from './components/TodoList';

const App: React.FC = () => {
  return (
    <Layout>
      <Input />
      <Todolist />
    </Layout>
  );
};

export default App;
