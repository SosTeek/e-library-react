import React, { Suspense } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

// const Login = React.lazy(() => {
//     import('./login')
// })
import Login from './login';

const User = () => {
    return (
        <Suspense fallback={<div className='loading'/>}>
            <Routes>
                <Route path='login' element={<Login/>} />
                <Route path = '/' element={ <Navigate replace to='login'/>} />
            </Routes>
        </Suspense>
    )
}

export default User;