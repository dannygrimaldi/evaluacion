import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './containers/errors/error404';
import Home from './containers/pages/home';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Error404/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
