import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import JobList from './Component/Joblist';
import Profile from './Component/Profile';
import About from './Component/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="main-content">
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/home" element={<JobList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Route>

            <Route path="/logout" element={<h1>Log out From Page</h1>} />
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
