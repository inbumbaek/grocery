import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import EditGrocery from './components/EditGrocery';
import GroceryBag from './views/GroceryBag';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/groceryBag' element={<GroceryBag/>}/>
          <Route path='/updateGrocery/:id' element={<EditGrocery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
