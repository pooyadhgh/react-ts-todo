import ReactDOM from 'react-dom';
import { TodoContextProvider } from './context/todo-context';
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  document.getElementById('root')
);
