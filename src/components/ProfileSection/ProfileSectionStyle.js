import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";

export const SectionProfile = styled.section`
  background-color: ${colors.bgPrimary};
`;
export const SectionInnerProfile = styled.div`
  padding: 64px 24px;

  @media screen and(${breakpoints.tablet}) {
    padding: 72px 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 90px 0;
    max-width: 930px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
  }
`;
export const SectionTitleProfile = styled.h2`
  margin-left: 22px;
  margin-bottom: 32px;
  font-size: 28px;
  grid-row-start: 1;

  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 36px;
  }
`;
