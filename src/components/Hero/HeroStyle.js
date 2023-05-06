import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { Button } from "../../utils/styles/generalStyles";

export const Hero = styled.section`
  height: 570px;
  position: relative;
`;
export const HeroFigure = styled.figure`
  width: 100%;
  height: 100%;
`;
export const HeroImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
`;
export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const HeroContentInner = styled.div`
  margin-left: 28px;
  @media (${breakpoints.tablet}) {
    margin-left: 32px;
  }
  @media (${breakpoints.desktop}) {
    margin-left: 48px;
  }
`;
export const HeroTextCard = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const HeroTitle = styled.h1`
  color: ${colors.secondary};
  font-weight: 700;
  font-size: 38px;
  line-height: 130%;
  letter-spacing: 1px;
  max-width: 450px;
  margin-bottom: 24px;
`;
export const HeroSubtitle = styled.p`
  color: ${colors.secondary};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.4px;
  max-width: 550px;
  margin-bottom: 32px;
`;
