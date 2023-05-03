import HeroLandingPicture from "../../assets/images/landing.jpg";
import {Button as Button} from "../../utils/styles/generalStyles"
import {Hero as HeroWrapper, HeroFigure,HeroImg,HeroOverlay,HeroContent,HeroContentInner,HeroTextCard,HeroTitle,HeroSubtitle} from "./HeroStyle"

import { Link } from "react-router-dom";

const Hero = () => {

    return (

        <HeroWrapper>
            <HeroFigure>
                <HeroImg src={HeroLandingPicture} alt="speck_academy_hero_img"/>
            </HeroFigure>
            <HeroOverlay/>
            <HeroContent>
                <HeroContentInner>
                    <HeroTextCard>
                        <HeroTitle>Learn what matters with Speck and FOI</HeroTitle>
                        <HeroSubtitle>Make a turnaround in your career or upgrade your current skill
                            set with knowledge-based lessons from IT practice.</HeroSubtitle>
                            <Link to="/Courses">
                            <Button>
                                Explort courses
                            </Button>
                        </Link>
                    </HeroTextCard>
                </HeroContentInner>
            </HeroContent>

        </HeroWrapper>


    )

}
export default Hero;