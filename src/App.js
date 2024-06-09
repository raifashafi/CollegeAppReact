import logo from './logo.svg';
import './App.css';
import { Add } from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/Delete' element={<Delete/>}/>
    <Route path='/View' element={<View/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
