import React from 'react';
import PropTypes from 'prop-types';
import {Course as CourseWrapper, CourseFigure,CourseImage,CourseTitle, CourseSubtitle, CourseTime} from "./CourseStyle"
import { Link } from 'react-router-dom';

const Course = ({ imgSrc, imgAlt, title, subtitle, time, id }) => {
    return (

        <CourseWrapper>
            <Link to={`/singleCourse/${id}`}>
                <CourseFigure>
                    <CourseImage src={imgSrc} alt={imgAlt}/>
                </CourseFigure>
                <CourseTitle>{title}</CourseTitle>
                <CourseSubtitle>{subtitle}</CourseSubtitle>
                <CourseTime>{time}</CourseTime>
            </Link>
        </CourseWrapper>
        
    )
}


Course.propTypes = {
    id:PropTypes.number,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    time: PropTypes.string

}

export default Course;