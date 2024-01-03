import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Profile from './pages/Profile'
import Login from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'


function App() {
    return (
        <Router>
            <AuthProvider>
            <Layout>
                <Routes>
                    <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Layout>
            </AuthProvider>
        </Router>
    )
}

export default App
