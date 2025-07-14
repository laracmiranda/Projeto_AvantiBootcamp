import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';

export const Router = () =>{
    return(
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    )
}