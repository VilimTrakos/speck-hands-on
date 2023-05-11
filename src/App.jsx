import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { RotatingLines } from "react-loader-spinner";
import Profile from "./pages/Profile/Profile";

function App() {
  //probaj kontekst koristiti
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="singleCourse/:id" element={<SingleCourse />} />
          <Route
            path="sign-in"
            element={
              <SignIn setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
