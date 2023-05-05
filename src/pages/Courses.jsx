import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { Grid } from "../utils/styles/generalStyles";
import Section from "../components/Section/Section";
import Course from "../components/Course/Course";

import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";
import SearchBar from "../components/SearchBar/SearchBar";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header />

      <SearchBar
        placeholder={"Search..."}
        disabled={courses ? false : true}
        onValueChange={handleSearch}
      ></SearchBar>

      <main>
        <Section
          title="Browse our all courses"
          subtitle="We recommend that you choose one of the featured courses. If you
                    don't find anything for you here, search for courses in detail on
                    the courses page."
        >
          {courses ? (
            <Grid>
              {courses.map(
                (course, index) =>
                  index < 8 && (
                    <Course
                      key={course.id}
                      id={course.id}
                      imgSrc={course.imgSrc}
                      imgAlt={course.imgAlt}
                      title={course.title}
                      subtitle={course.subtitle}
                      time={course.time}
                    />
                  )
              )}
            </Grid>
          ) : (
            <Loader />
          )}
        </Section>
      </main>
    </>
  );
};

export default Courses;
