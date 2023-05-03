import React from 'react'
import coursesMock from "../utils/mock/courses"
import Section from '../components/Section/Section'
import Header from '../components/Header/Header'
import CourseArticle from '../components/CourseArticle/CourseArticle'

import { useParams } from 'react-router-dom'

import { useEffect, useState } from "react";

const SingleCourse = () => {

  const { id } = useParams();


  const [courses, setCourses] = useState(null);
  const [course, setCours] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  useEffect(() => {
    courses && setCours(courses.find((course) => course.id === parseInt(id)));
  }, [courses]);

 


  return (
    <>

      <Header />
      <main>
        {course &&
          <Section title={course.title}>
            <CourseArticle imgSrc={course.imgSrc} imgAlt={course.imgAlt} content={course.content} />
          </Section>
        }
      </main>

    </>
  )

}



export default SingleCourse;
