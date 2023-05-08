import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  Select,
  Option,
} from "../../utils/styles/generalStyles";

import {
  PasswordContainer,
  SectionGridContainer,
  EditProfileButton,
  ResetPasswordHeadline,
  ResetParagraph,
} from "./ProfileStyle";

function Profile() {
  return (
    <>
      <ProfileSection title={"Profile"}>
        <EditProfileButton isOutline type="submit" disabled={false}>
          Edit
        </EditProfileButton>
        <SectionGridContainer>
          <Formik>
            {(formik) => (
              <Form>
                <FormRow>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                <FormRow>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                <FormRow>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                <FormRow>
                  <Field
                    type="text"
                    name="githubUsername"
                    placeholder="Github username..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="githubUsername" />
                </FormRow>
                <FormRow>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    placeholder="Zeplin username..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="zeplinUsername" />
                </FormRow>

                <FormRow>
                  <Select
                    id="activeFacultyYear"
                    disabled={formik.isSubmitting}
                    {...formik.getFieldProps("activeFacultyYear")}
                  >
                    <Option value="" disabled hidden>
                      Choose an Active faculty year
                    </Option>
                    <Option value="0">Not a student</Option>
                    <Option value="1">1st faculty year</Option>
                    <Option value="2">2nd faculty year</Option>
                    <Option value="3">3rd faculty year</Option>
                    <Option value="4">4th faculty year</Option>
                    <Option value="5">5th faculty year</Option>
                  </Select>
                  <ErrorMessage component={"div"} name="activeFacultyYear" />
                </FormRow>
                <FormRow>
                  <Button
                    isSecondary
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    Update user data
                  </Button>
                </FormRow>
              </Form>
            )}
          </Formik>
          <PasswordContainer>
            <ResetPasswordHeadline>Reset password</ResetPasswordHeadline>
            <ResetParagraph>
              In order to reset password click "Edit" button
            </ResetParagraph>
            <Formik>
              {(formik) => (
                <Form>
                  <FormRow isProfile>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Old password"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>
                  <FormRow isProfile>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="New password"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>
                  <FormRow isProfile>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Repeat new password"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>
                  <FormRow>
                    <Button
                      isUpdate
                      isSecondary
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      Update password
                    </Button>
                  </FormRow>
                </Form>
              )}
            </Formik>
          </PasswordContainer>
        </SectionGridContainer>
      </ProfileSection>
    </>
  );
}

export default Profile;
