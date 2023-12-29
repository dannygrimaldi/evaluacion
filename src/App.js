import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import Senior from './containers/pages/profileSenior';
import List from './components/list';
import List2 from './components/PRUEBAS';
//import Error404 from './containers/errors/error404';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/header'
import PrivateRoute from './utils/PrivateRoute'


function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
      <Routes>

      <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/profileSenior" element={<Senior/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/PRUEBAS" element={<List2/>}/>
      </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}



export default App;
