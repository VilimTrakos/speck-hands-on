import React from 'react'
import PropTypes from 'prop-types'
import "./CourseArticle.scss"

const CourseArticle = ({ imgSrc, imgAlt, content }) => {
    return (
        <article className="SingleCourse">
            <figure className="SingleCourse-Figure">
                <img src={imgSrc} alt={imgAlt} className="SingleCourse-Image" />
            </figure>
            <p className="SingleCourse-Content">
                {content}
            </p>
        </article>
    )
}

CourseArticle.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    content: PropTypes.string
}

export default CourseArticle;
