import styled from 'styled-components'
import { breakpoints } from '../../utils/styles/theme';

export const SingleCourse = styled.article`

@media (${breakpoints.tablet}) {
        display: flex;
    }
`

export const SingleCourseFigure = styled.figure`

        width: 100%;
        height: 220px;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 32px;

        @media (${breakpoints.tabletSmall}) {
            height: 300px;
        }

        @media (${breakpoints.tablet}) {
            height: 350px;
            width: 350px;
            flex-shrink: 0;
            margin-right: 48px;
        }

        @media (${breakpoints.desktopLarge}) {

            height: 450px;
            width: 500px;
            margin-right: 90px;

        }

`
export const SingleCourseImage = styled.img`

        width: 100%;
        height: 100%;
        object-fit: cover;

`
export const SingleCourseContent = styled.p`

        line-height: 150%;
        font-size: 16px;

`