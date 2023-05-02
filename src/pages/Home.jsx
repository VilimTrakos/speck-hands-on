import React from "react";
import Grid from "../components/Grid/Grid"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Section from "../components/Section/Section"
import Course from "../components/Course/Course"
import LectureImg1 from "../assets/images/lecture-1.jpg"
import LectureImg2 from "../assets/images/lecture-2.jpg"
import LectureImg3 from "../assets/images/lecture-3.jpg"
import LectureImg4 from "../assets/images/lecture-4.jpg"
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    imgSrc: LectureImg1,
    imgAlt: "lekcija1",
    title: "Introduction",
    subtitle: "Get to know us better...",
    time: "60min",
    content: "In this course, you'll get to know the instructor and their teaching style, as well as the objectives and expectations of the course. We'll also cover some basic information about web development and programming."
  },
  {
    id: 2,
    imgSrc: LectureImg2,
    imgAlt: "lekcija2",
    title: "HTML & CSS",
    subtitle: "Learn HTML & CSS basics...",
    time: "100min",
    content: "In this course, you'll learn the basics of HTML and CSS, including how to structure and style web pages. Topics covered include HTML tags, CSS selectors, box model, and layout techniques."
  },
  {
    id: 3,
    imgSrc: LectureImg3,
    imgAlt: "lekcija3",
    title: "Version Control Systems",
    subtitle: "Learn GIT and Gitflow basics...",
    time: "90min",
    content: "In this course, you'll learn about version control systems and how to use Git and Gitflow for managing your codebase. Topics covered include creating and merging branches, resolving conflicts, and using repositories for collaboration."
  },
  {
    id: 4,
    imgSrc: LectureImg4,
    imgAlt: "lekcija4",
    title: "Advanced CSS",
    subtitle: "BEM methodology, grid, flex...",
    time: "120min",
    content: "In this course, you'll learn more advanced CSS techniques, including the BEM methodology for writing scalable and maintainable code, using grid and flex layouts for responsive design, and other tips and tricks for improving your CSS skills."
  },

]

const Home = () => {

  return (
    <>
      <Header />
      <main>

        <Hero />
        <Section title="Open your new possibilities" subtitle="We recommend that you choose one of the featured courses. If you
                    don't find anything for you here, search for courses in detail on
                    the courses page.">

          <Grid>
            {courses.map((course) => (
              <Link to={`/singleCourse/${course.id}`} key={course.id} state={course}>
                <Course
                  imgSrc={course.imgSrc}
                  imgAlt={course.imgAlt}
                  title={course.title}
                  subtitle={course.subtitle}
                  time={course.time}
                />
              </Link>
            ))}
          </Grid>
        </Section>
      </main>
    </>
  );
}

export default Home;