import React from "react";
import PropTypes from "prop-types";
import {
  SectionProfile as SectionWrapperProfile,
  SectionInnerProfile,
  SectionTitleProfile,
} from "./ProfileSectionStyle";

const ProfileSection = ({ title, children }) => {
  return (
    <>
      <SectionWrapperProfile>
        <SectionInnerProfile>
          <SectionTitleProfile>{title}</SectionTitleProfile>

          {children}
        </SectionInnerProfile>
      </SectionWrapperProfile>
    </>
  );
};

ProfileSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileSection;
