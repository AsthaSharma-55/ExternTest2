import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DescriptionPage from './Components/DescriptionPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CartPage from './Components/CartPage';
import { Provider } from 'react-redux';
import store from './Components/features/store'


function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/description/:id' element={<DescriptionPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
