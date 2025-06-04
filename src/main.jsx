import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';


// Pages are imported here 
import App from './App.jsx';
import Login from './Pages/AuthPages/Login.jsx';
import Signup from './Pages/AuthPages/Signup.jsx';
import Profile from './Pages/UserPages/Profile.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-profile" element={<Profile />} />

    </Routes>
  </BrowserRouter>
)
