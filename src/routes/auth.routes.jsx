import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Destiny } from '../pages/Destiny'
import { Login } from '../pages/Login'

export function AuthRoutes() {
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destino" element={<Destiny />} />
        <Route path="/login" element={<Login />} />
    </Routes>
)
}