import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";


function App() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link"> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link"> Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link"> Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
