import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainView from './views/MainView';
import ContactView from './views/ContactView';
import PayView from './views/PayView';
import BookingView from './views/BookingView';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/contact" element={<ContactView />} />
      <Route path="/payment" element={<PayView />} />
      <Route path="/booking" element={<BookingView />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
