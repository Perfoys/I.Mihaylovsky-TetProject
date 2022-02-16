import { Provider } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';
import store from './store';

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage/>
      </div>
    </Provider>
  );
}

export default App;
