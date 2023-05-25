import React from "react";
import coursesMock from "../../utils/mock/courses";
import Section from "../../components/Section/Section";

import CourseArticle from "../../components/CourseArticle/CourseArticle";

import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import coursesStore from "../../store/CoursesStore";
import { useEffect, useState } from "react";

const SingleCourse = () => {
  const { getCourseById, singleCourse, coursesLength, setCourses, courses } =
    coursesStore;
  const { id } = useParams();

  /*
  const [course, setCourse] = useState();

  useEffect(() => {
    setCourse(getCourseById(id));
  }, []);
*/
  //za singleCourse--
  useEffect(() => {
    if (coursesLength === 0) {
      setTimeout(() => {
        setCourses(coursesMock);
        getCourseById(id);
      }, 1000);
    }
  }, []);
  useEffect(() => {
    coursesLength && getCourseById(id);
  }, [coursesLength]);
  //----
  return (
    <>
      {singleCourse && ( // ili getCourseById(id) ili course iz state
        <Section title={singleCourse.title}>
          <CourseArticle
            imgSrc={singleCourse.imgSrc}
            imgAlt={singleCourse.imgAlt}
            content={singleCourse.content}
          />
        </Section>
      )}
    </>
  );
};

export default observer(SingleCourse);
