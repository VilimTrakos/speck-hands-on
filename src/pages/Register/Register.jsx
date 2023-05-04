import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  Option,
  Select,
} from "../../utils/styles/generalStyles";

const Register = () => {
  return (
    <Section title="Register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordRepeat: "",
          githubUsername: "",
          zeplinUsername: "",
          activeFacultyYear: "",
          isAdmin: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),

          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
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
          githubUsername: Yup.string().required("Github username is required"),
          zeplinUsername: Yup.string().required("Zeplin username is required"),
          activeFacultyYear: Yup.string().required("Faculty year is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
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
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
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
                type="password"
                name="password"
                placeholder="Password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="password" />
            </FormRow>
            <FormRow>
              <Field
                type="password"
                name="passwordRepeat"
                placeholder="Password repeat..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="passwordRepeat" />
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
              <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Register"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Register;
