import React from 'react';
import './index.css';
import AppRouter from './Components/AppRouter';
import {RoomContextProvider} from './Context/RoomContext';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RoomContextProvider>
      <AppRouter />
      </RoomContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
