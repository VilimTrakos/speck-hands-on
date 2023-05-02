import Home from "./pages/Home"
import Courses from "./pages/Courses"
import SingleCourse from "./pages/SingleCourse"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="singleCourse/:courseId" element={<SingleCourse />} />

      </Routes>

    </>
  )
}

export default App
