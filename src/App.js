import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './containers/errors/error404';
import Home from './containers/pages/home';
import Login from './containers/pages/LoginPage';
import Senior from './containers/pages/profileSenior';
import List from './components/list';
import List2 from './components/PRUEBAS';
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'



function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profileSenior" element={<Senior />} />
          <Route path="/list" element={<List />} />
          <Route path="/PRUEBAS" element={<List2 />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}



export default App;
