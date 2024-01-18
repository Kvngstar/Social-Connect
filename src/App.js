import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from '../src/routes/login'
import Register from '../src/routes/register'
import Chat from '../src/routes/chat'
import ChatInterface from './routes/chatInterface'
function App() {
    
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="chat" element={<Chat />} />
            <Route index element={<ChatInterface />} />
        </Routes>
    )
}

export default App
