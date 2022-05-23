import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainView from './views/MainView';
import BookingView from './views/BookingView';
import PayView from './views/PayView';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/booking" element={<BookingView />} />
      <Route path="/payment" element={<PayView />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
