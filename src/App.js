import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainView from './views/MainView';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainView />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
