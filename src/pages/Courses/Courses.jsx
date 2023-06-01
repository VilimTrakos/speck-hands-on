import React from "react";

import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { Button, Grid } from "../../utils/styles/generalStyles";
import Section from "../../components/Section/Section";
import Course from "../../components/Course/Course";

import { useEffect, useState } from "react";
import coursesMock from "../../utils/mock/courses";
import SearchBar from "../../components/SearchBar/SearchBar";
import { observer } from "mobx-react";
import coursesStore from "../../store/CoursesStore";
import LectureImg1 from "../../assets/images/lecture-1.jpg";

const Courses = () => {
  const { courses, coursesLength, setCourses, setCourse } = coursesStore;
  useEffect(() => {
    if (coursesLength === 0) {
      setTimeout(() => {
        setCourses(coursesMock);
      }, 1000);
    }
  }, []);

  const handleAddCourse = () => {
    const courseId = coursesLength + 1;

    setCourse({
      id: courseId,
      imgSrc: LectureImg1,
      imgAlt: `New course ${courseId}`,
      title: `${courseId}. New course`,
      subtitle: "Get to know us better...",
      time: "60min",
      content:
        "In this course, you'll get to know the instructor and their teaching style, as well as the objectives and expectations of the course. We'll also cover some basic information about web development and programming.",
    });
  };

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
        <Button onClick={handleAddCourse}>Add new course</Button>
        <div>courses count: {coursesLength}</div>
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
        ) : coursesLength ? (
          <Grid>
            {courses.slice(0, 20).map((course) => (
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

export default observer(Courses);
