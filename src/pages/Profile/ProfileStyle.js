import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { Button } from "../../utils/styles/generalStyles";

export const SectionGridContainer = styled.section`
  display: grid;
  grid-template-columns: 43% 43% 13%;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: 33% 33% 33%;
  }
  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

export const PasswordContainer = styled.div`
  grid-column-start: 2;
  border-radius: 10px;
  background-color: ${colors.bgSecondary};
  width: 100%;
  margin-left: 25px;
  height: 70%;
`;
export const EditProfileButton = styled(Button)`
  float: right;
  margin-top: -75px;
`;
export const ResetPasswordHeadline = styled.h3`
  margin-left: 25px;
  margin-top: 22px;
`;
export const ResetParagraph = styled.p`
  margin-left: 25px;
  margin-top: 22px;
  margin-right: 25px;
`;
