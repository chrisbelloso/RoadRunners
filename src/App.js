import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Checkout />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
