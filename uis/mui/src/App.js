import logo from './logo.svg';
import './App.css';
import MuiInput from './pages/MuiInput';
import MuiButton from './pages/MuiButton';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/button' element={<MuiButton />} />
            <Route path='/input' element={<MuiInput />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
