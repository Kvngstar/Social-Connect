import { Route, Routes } from "react-router-dom";
import Login from "../src/routes/login/login";
import "./App.css";
import PrivateRoute from "./ProtectedRoute";
import ChatInterface from "./chat/chatInterface";
import JoinGroup from "./routes/invite/join/joinGroup";
import Register from "./routes/register/register";
import LoginToContinue from "./routes/loginToContinue/loginToContinue";
import VideoCall from "./chat/chat components/chatFrame/topBar.jsx/liveCall/video/video";

function App() {
	return (
		<Routes>
			<Route
				index
				element={<Login />}
			/>
			<Route
				path="register"
				element={<Register />}
			/>
			<Route
				path="chat"
				element={
					<PrivateRoute>
						<ChatInterface />
					</PrivateRoute>
				}
			/>
			<Route
				path="join"
				element={<JoinGroup />}
			/>
			<Route
				path="video"
				element={
					<PrivateRoute>
						{" "}
						<VideoCall />
					</PrivateRoute>
				}
			/>
			<Route
				path="continue"
				element={<LoginToContinue />}
			/>
			<Route
				path="*"
				element={<Login />}
			/>
		</Routes>
	);
}

export default App;
