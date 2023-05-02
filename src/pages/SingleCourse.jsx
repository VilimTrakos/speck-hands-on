import React from 'react'
import PropTypes from 'prop-types'
import Section from '../components/Section/Section'
import Header from '../components/Header/Header'
import CourseArticle from '../components/CourseArticle/CourseArticle'
import LectureImg1 from "../assets/images/lecture-1.jpg"
import LectureImg2 from "../assets/images/lecture-2.jpg"
import LectureImg3 from "../assets/images/lecture-3.jpg"
import LectureImg4 from "../assets/images/lecture-4.jpg"
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const courses = [
  {
    id: 1,
    imgSrc: LectureImg1,
    imgAlt: 'lekcija1',
    title: 'Introduction1',
    subtitle: 'Get to know us better...',
    time: '60min',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    imgSrc: LectureImg2,
    imgAlt: 'lekcija1',
    title: 'Introduction2',
    subtitle: 'Get to know us better...',
    time: '60min',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    imgSrc: LectureImg3,
    imgAlt: 'lekcija1',
    title: 'Introduction3',
    subtitle: 'Get to know us better...',
    time: '60min',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    imgSrc: LectureImg4,
    imgAlt: 'lekcija1',
    title: 'Introduction4',
    subtitle: 'Get to know us better...',
    time: '60min',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const SingleCourse = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>

      <Header />
      <main>
        <Section title={data.title}>
          <CourseArticle imgSrc={data.imgSrc} imgAlt={data.imgAlt} content={data.content} />
        </Section>
      </main>
    </>
  )

}



export default SingleCourse;
