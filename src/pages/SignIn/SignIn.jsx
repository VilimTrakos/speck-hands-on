import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  FormSuccessMessage,
} from "../../utils/styles/generalStyles";
import { getAllUsers, loginUser } from "../../API/users";

const SignIn = ({ setIsAdmin, setIsLoggedIn }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <Section title="Sign in">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long!")
            .required("Password is required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await loginUser(values);

            const users = await getAllUsers(response.access_token);

            const user = users.data.find((user) => user.email == values.email);
            setSuccessMessage({
              error: false,
              message: `User ${user.first_name} is loged in!`,
            });
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);

            localStorage.setItem("jwt_token", response.access_token);
            localStorage.setItem("is_admin", user.is_admin);

            setIsAdmin(user.is_admin);
            setIsLoggedIn(response.access_token ? true : false);

            resetForm();
            window.location.href = "/"; //Znam da nije najbolje rješenje, ali history hook ne radi iz nekog razloga :/
          } catch (error) {
            setSuccessMessage({
              error: true,
              message: "There was an error...",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form>
            {successMessage && (
              <FormRow>
                <FormSuccessMessage isError={successMessage.error}>
                  {successMessage.message}
                </FormSuccessMessage>
              </FormRow>
            )}
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
              <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Sign in"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;
