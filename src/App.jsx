import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="singleCourse/:id" element={<SingleCourse />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
