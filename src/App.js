import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const ViewLogin = React.lazy(() => import('./views/user/login'));

const ViewUser = React.lazy(() =>
  import('./views/user')
);

function App() {
  return (
      <div className="App">
        <Suspense fallback={<div className='loading'/>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ViewLogin />} />
                    <Route path='/user/*' element={<ViewUser />} />
                    
                </Routes>
            </BrowserRouter>
        </Suspense>
      </div>
  );
}

export default App;