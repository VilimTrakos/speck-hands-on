import React from 'react'
import PropTypes from 'prop-types'

import { SingleCourse as SingleCourseArticle, SingleCourseFigure, SingleCourseImage, SingleCourseContent } from './CourseArticleStyle'

const CourseArticle = ({ imgSrc, imgAlt, content }) => {
    return (

        <SingleCourseArticle>
            <SingleCourseFigure>
                <SingleCourseImage src={imgSrc} alt={imgAlt} />
            </SingleCourseFigure>
            <SingleCourseContent>{content}</SingleCourseContent>
        </SingleCourseArticle>

        
    )
}

CourseArticle.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    content: PropTypes.string
}

export default CourseArticle;
