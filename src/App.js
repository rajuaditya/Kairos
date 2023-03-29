import './App.css';
import Kairo from './Data.js/Kairo';
import Navbar from './Navbar.js'
import { Route,Routes } from 'react-router-dom';
import SingleProduct from './Data.js/SingleProduct';
function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <Routes>
      <Route path='/' element={<Kairo/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
    </Routes>

    </div>
  );
}

export default App;
