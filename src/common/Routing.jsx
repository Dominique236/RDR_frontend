import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from '../game/instructions'
import UserWelcome from '../profile/AboutUs'
import Board from '../game/Board'
import Login from '../profile/Login'
import Signup from '../profile/Signup'
import AdminCheck from '../protected/AdminCheck'
import UserCheck from '../protected/UserCheck'
import Wait from '../game/Wait'
import Choose from '../game/Choose'

function Routing() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/instructions'} element={<Instructions/>}/>
                <Route path={'/welcome'} element={<UserWelcome/>}/>
                <Route path={'/board'} element={<Board/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={"/signup"} element={<Signup />}/>
                <Route path={"/admincheck"} element={<AdminCheck />}/>
                <Route path={"/usercheck"} element={<UserCheck />}/>
                <Route path={"/wait"} element={<Wait />}/>
                <Route path={"/choose"} element={<Choose />}/>

            </Routes>  
        </BrowserRouter>
        </>
    )
}

export default Routing