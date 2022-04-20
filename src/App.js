
import './App.css';

import { Route, Routes } from 'react-router-dom'

import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>


    </>
  );
}

export default App;
