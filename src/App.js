import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from '../src/routes/login'
import Register from '../src/routes/register'
import Chat from '../src/routes/chat'
import ChatInterface from './routes/chatInterface'
import VideoCall from './calls/video';
function App() {
    
    return (
        <Routes>
            <Route index element={<Login />}/>
            <Route path="register" element={<Register />} />
            <Route path="chat" element={<ChatInterface />} />
            <Route path="video" element={<VideoCall/>} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default App
