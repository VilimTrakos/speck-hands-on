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
import { useEffect, useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // update data to be displayed
  };

  return (
    <>
      <ProfileSection title={"Profile"}>
        <EditProfileButton
          isOutline={!isEditing}
          type="submit"
          disabled={false}
          onClick={isEditing ? handleSave : handleEdit}
        >
          {isEditing ? "Cancle" : "Edit"}
        </EditProfileButton>
        <SectionGridContainer>
          <Formik
            initialValues={{
              firstName: "Vilim",
              lastName: "Trakoštanec",
              email: "vilimtrakostanec@gmail.com",
              githubUsername: "VilimTrakos",
              zeplinUsername: "VilimTrakos",
              activeFacultyYear: "2",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              githubUsername: Yup.string().required(
                "Github username is required"
              ),
              zeplinUsername: Yup.string().required(
                "Zeplin username is required"
              ),
              activeFacultyYear: Yup.string().required(
                "Faculty year is required"
              ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const data = {
                  first_name: values.firstName,
                  last_name: values.lastName,
                  email: values.email,
                  password: values.password,
                  github_username: values.githubUsername,
                  zeplin_username: values.zeplinUsername,
                  active_faculty_year:
                    parseInt(values.activeFacultyYear) === 0
                      ? null
                      : parseInt(values.activeFacultyYear),
                  is_admin: false,
                };
                alert(JSON.stringify(data, null, 2));
                handleSave();
                setSubmitting(false);
              }, 1000);
            }}
          >
            {(formik) => (
              <Form>
                {isEditing ? "First name" : ""}
                <FormRow>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name..."
                    disabled={!isEditing}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                {isEditing ? "Last name" : ""}
                <FormRow>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name..."
                    disabled={!isEditing}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                {isEditing ? "Email" : ""}
                <FormRow>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email..."
                    disabled={!isEditing}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                {isEditing ? "Github username" : ""}
                <FormRow>
                  <Field
                    type="text"
                    name="githubUsername"
                    placeholder="Github username..."
                    disabled={!isEditing}
                  />
                  <ErrorMessage component={"div"} name="githubUsername" />
                </FormRow>
                {isEditing ? "Zeplin username" : ""}
                <FormRow>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    placeholder="Zeplin username..."
                    disabled={!isEditing}
                  />
                  <ErrorMessage component={"div"} name="zeplinUsername" />
                </FormRow>
                {isEditing ? "Active faculty year" : ""}
                <FormRow>
                  <Select
                    id="activeFacultyYear"
                    disabled={!isEditing}
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
                  {isEditing ? (
                    <Button
                      isSecondary
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting
                        ? "Processing..."
                        : "Update user data"}
                    </Button>
                  ) : (
                    ""
                  )}
                </FormRow>
              </Form>
            )}
          </Formik>
          <PasswordContainer isEditingMode={isEditing}>
            <ResetPasswordHeadline>Reset password</ResetPasswordHeadline>
            <ResetParagraph>
              In order to reset password click "Edit" button
            </ResetParagraph>
            {isEditing ? (
              <Formik
                initialValues={{
                  oldPassword: "",
                  password: "",
                  passwordRepeat: "",
                }}
                validationSchema={Yup.object({
                  oldPassword: Yup.string()
                    .min(8, "Old password must be at least 8 characters long!")
                    .required("Old password is required"),
                  password: Yup.string()
                    .min(8, "Password must be at least 8 characters long!")
                    .required("Password is required"),
                  passwordRepeat: Yup.string().test(
                    "passwords-match",
                    "Passwords must match",
                    function (value) {
                      return this.parent.password === value;
                    }
                  ),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    const data = {
                      oldPassword: values.oldPassword,
                      password: values.password,
                    };
                    alert(JSON.stringify(data, null, 2));
                    handleSave();
                    setSubmitting(false);
                  }, 1000);
                }}
              >
                {(formik) => (
                  <Form>
                    <FormRow isProfile>
                      <Field
                        type="password"
                        name="oldPassword"
                        placeholder="Old password"
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="oldPassword" />
                    </FormRow>

                    <FormRow isProfile>
                      <Field
                        type="password"
                        name="password"
                        placeholder="New password"
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="password" />
                    </FormRow>

                    <FormRow isProfile>
                      <Field
                        type="password"
                        name="passwordRepeat"
                        placeholder="Repeat new password"
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="passwordRepeat" />
                    </FormRow>

                    <FormRow isProfile>
                      {isEditing ? (
                        <Button
                          isSecondary
                          type="submit"
                          disabled={formik.isSubmitting}
                        >
                          {formik.isSubmitting
                            ? "Processing..."
                            : "Update password"}
                        </Button>
                      ) : (
                        ""
                      )}
                    </FormRow>
                  </Form>
                )}
              </Formik>
            ) : (
              ""
            )}
          </PasswordContainer>
        </SectionGridContainer>
      </ProfileSection>
    </>
  );
};

export default Profile;
