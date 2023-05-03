import React from 'react'
import Header from "../components/Header/Header"
import { Link } from "react-router-dom";

//import Grid from "../components/Grid/Grid"
import { Grid } from "../utils/styles/generalStyles"
import Section from "../components/Section/Section"
import Course from "../components/Course/Course"

import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";


const Courses = () => {

    const [courses, setCourses] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
        }, 1000);
    }, []);

    return (
        <>
            <Header />
            <main>
                <Section title="Browse our all courses" subtitle="We recommend that you choose one of the featured courses. If you
                    don't find anything for you here, search for courses in detail on
                    the courses page.">

                    {courses &&
                        <Grid>
                            {courses.map((course, index) => index < 8 && (
                                <Link to={`/singleCourse/${course.title}`} key={course.id} state={course}>
                                    <Course
                                        imgSrc={course.imgSrc}
                                        imgAlt={course.imgAlt}
                                        title={course.title}
                                        subtitle={course.subtitle}
                                        time={course.time}
                                    />
                                </Link>
                            ))}
                        </Grid>}
                </Section>

            </main>

        </>
    );
}


export default Courses;
