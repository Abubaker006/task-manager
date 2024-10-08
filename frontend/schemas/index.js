import * as Yup from "yup";

const passwordRegex = /(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/;
const spaceRegex = /^(?!.*\s).+$/;

export const emailVerificationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const otpVerificationSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be exactly 6 digits")
    .required("Otp required."),
});

export const CompleteSignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at leat 8 character Long")
    .matches(
      passwordRegex,
      "Password must contain at least one uppercase letter, one number and one special character(@,#,$,%,^,&,+)"
    )
    .matches(spaceRegex, "Password must not contain any space"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});
