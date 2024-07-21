import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import AntButton from "./pages/AntButton"
import AntInput from "./pages/AntInput"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/button' element={<AntButton />} />
            <Route path='/input' element={<AntInput />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
