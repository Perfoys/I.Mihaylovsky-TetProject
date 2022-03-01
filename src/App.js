import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import HomePage from './pages/HomePage';
import store from './store';

function App () {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
            <HomePage/>
          </div>
        </DndProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
