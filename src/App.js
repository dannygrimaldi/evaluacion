import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './containers/errors/error404';
import Home from './containers/pages/home';
import Login from './containers/pages/login';
import Senior from './containers/pages/profileSenior';
import List from './components/list';
import List2 from './components/PRUEBAS';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Error404/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profileSenior" element={<Senior/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/PRUEBAS" element={<List2/>}/>
      </Routes>
    </Router>
  );
}



export default App;
