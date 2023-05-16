import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt_token");
    const isAdminLocal = localStorage.getItem("is_admin");

    setIsAdmin(JSON.parse(isAdminLocal));
    setIsLoggedIn(jwtToken ? true : false);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header
        isAdmin={isAdmin}
        isLoggedIn={isLoggedIn}
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="singleCourse/:id" element={<SingleCourse />} />
          <Route
            element={
              <ProtectedRoute isAllowed={!isLoggedIn} redirectPath={"/"} />
            }
          >
            <Route
              path="sign-in"
              element={
                <SignIn setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            element={<ProtectedRoute isAllowed={isAdmin} redirectPath={"/"} />}
          >
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
