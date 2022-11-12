import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./Pages/Home";
import ServiceAdd from "./Pages/ServiceAdd";
import Notfound from "./Pages/Notfound";
import Login from "./shared/Login";
import Signup from "./shared/Signup";
import ServiceDetail from "./Pages/ServiceDetail";
import AllServices from "./Pages/AllServices";
import Reviews from "./Pages/Reviews";
import EditReview from "./components/EditReview";
import Blogs from "./Pages/Blogs";

export const ThemeContext = React.createContext('theme')

function App() {
  const [dark, setDark] = useState(false)

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path='service/:id' element={<ServiceDetail />} />
          <Route path='/addservices' element={<ServiceAdd />} />
          <Route path='/blogs' element={<Blogs></Blogs>} />
          <Route path='/service' element={<AllServices />} />
          <Route path='/reviews' element={<Reviews></Reviews>} />
          <Route path='reviews/:id' element={<EditReview></EditReview>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path='*' element={<Notfound></Notfound>} />
        </Routes>
        <ToastContainer />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
