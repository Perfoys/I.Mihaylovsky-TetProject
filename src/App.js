import { Provider } from 'react-redux';
import './App.css';
import store from './store';

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        Test App
      </div>
    </Provider>
  );
}

export default App;
