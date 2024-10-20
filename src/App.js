import Archive from './pages/Archive/Archive';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Priority from './pages/Priority/Priority';
import Bin from './pages/Bin/Bin';


function App() {
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/important' element={<Priority/>}/>
      <Route path='/bin' element={<Bin/>} />
    </Routes>
    
  );
}

export default App;
