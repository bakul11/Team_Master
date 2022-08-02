import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home/Home';
import HomeUI from './Componets/HomeUI/HomeUI';
import Login from './Componets/Login/Login'
import Register from './Componets/Register/Register';
import RequireAuth from './Componets/RequireAuth/RequireAuth';
import NOMatch from './Componets/Shared/NOMatch';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/home' element={
            <RequireAuth>
              <HomeUI />
            </RequireAuth>
          }></Route>
          <Route path='/login' element={ <Login /> }></Route>
          <Route path='/register' element={ <Register /> }></Route>
          <Route path='*' element={ <NOMatch /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;