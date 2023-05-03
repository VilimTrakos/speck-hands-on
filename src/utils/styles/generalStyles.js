import styled from "styled-components";
import { breakpoints, colors} from "./theme"

export const Button = styled.button`

    padding: 12px 20px;
    background-color: ${colors.primary};
    border-radius: 4px;
    color: ${colors.secondary};
    transition: background-color 0.3s ease-out;
    outline: none;
    border: none;

    &_secondary {
        padding: 16px 20px;
    }

    &:hover {
        background-color: ${colors.primaryDark};
    }

`
export const Grid = styled.div`

display: grid;
    gap: 32px;
    

    @media screen and (${breakpoints.tabletSmall}) {

        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (${breakpoints.tablet}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (${breakpoints.desktopLarge}) {
        grid-template-columns: repeat(4, 1fr);
    }

`