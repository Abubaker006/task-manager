import * as Yup from 'yup';

export const emailVerificationSchema= Yup.object().shape({
    email:Yup.string().email("Please enter a valid email address").required("Email is required")
});

export const loginSchema=Yup.object().shape({
    email:Yup.string().email("Please enter a valid email address").required("Email is required"),
    password:Yup.string().required("Password is required")
});

export const otpVerificationSchema = Yup.object().shape({
    otp: Yup.string()
      .length(6, "OTP must be exactly 6 digits")
      .required("Otp required."),
  });