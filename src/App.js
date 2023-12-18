import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './containers/errors/error404';
import Home from './containers/pages/home';
import Login from './containers/pages/login';
import Navegation from './containers/pages/Navegation';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Error404/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Navegation" element={<Navegation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
