import React from "react";

import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { Grid } from "../../utils/styles/generalStyles";
import Section from "../../components/Section/Section";
import Course from "../../components/Course/Course";

import { useEffect, useState } from "react";
import coursesMock from "../../utils/mock/courses";
import SearchBar from "../../components/SearchBar/SearchBar";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(null);

  const handleSearch = (value) => {
    const searchTerm = value.toLowerCase();
    const filteredCourses = courses.filter((course) => {
      const title = course.title.toLowerCase();

      return title.includes(searchTerm);
    });
    console.log(filteredCourses);
    setFilteredCourses(filteredCourses);
  };

  return (
    <>
      <Section
        title="Browse our all courses"
        subtitle="We recommend that you choose one of the featured courses. If you
                    don't find anything for you here, search for courses in detail on
                    the courses page."
      >
        <SearchBar
          placeholder={"Search..."}
          disabled={courses ? false : true}
          onValueChange={handleSearch}
        ></SearchBar>
        {filteredCourses ? (
          <Grid>
            {filteredCourses.map((course) => (
              <Course
                key={course.id}
                id={course.id}
                imgSrc={course.imgSrc}
                imgAlt={course.imgAlt}
                title={course.title}
                subtitle={course.subtitle}
                time={course.time}
              />
            ))}
          </Grid>
        ) : courses ? (
          <Grid>
            {courses.slice(0, 8).map((course) => (
              <Course
                key={course.id}
                id={course.id}
                imgSrc={course.imgSrc}
                imgAlt={course.imgAlt}
                title={course.title}
                subtitle={course.subtitle}
                time={course.time}
              />
            ))}
          </Grid>
        ) : (
          <Loader />
        )}
      </Section>
    </>
  );
};

export default Courses;
