import * as React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles/App.css';
import HomePage from './pages/HomePage';
import store from './redux/store';
import LanguageProvider from './providers/LanguageProvider';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <React.Suspense fallback={<h1>Loading page...</h1>}>
            <LanguageProvider>
              <div className="App">
                <HomePage/>
              </div>
            </LanguageProvider>
          </React.Suspense>
        </DndProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
