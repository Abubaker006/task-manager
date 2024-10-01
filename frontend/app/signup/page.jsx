"use client";
import React, { useEffect, useState } from "react";
import LogoImage from "@/assets/Logo-Light-Mode.svg";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import { emailVerificationSchema } from "@/schemas/index";
import { ClipLoader } from "react-spinners";
import OtpVerification from "@/components/OtpVerification";
import { message } from "antd";
import { requestOtp } from "../api/apiServices";
import Cookies from "js-cookie";


const SignupPage = () => {

  const [renderOtpVerification, setRenderOtpVerification] = useState(false);
  
  const onSubmit = async (values, actions) => {
    const { email } = values;
    if (!email) {
      console.error("Email is required");
      return;
    }
    
    const result = await requestOtp(email);
    console.log(result.message);
    if (result.success) {
      // localStorage.setItem("email", email);
      message.success(result.message);
      setRenderOtpVerification(true);
      Cookies.setItem("email", email,{expires: 5 / 1440});
    } else if(result.message==="alreadySent"){
      message.error("OTP has already been sent to your email");
      setTimeout(()=>{
        setRenderOtpVerification(true);
      },500);
    }else {
      message.error(result.message);
    }
  };

  const handleGoBackBtnClick = (boolean) => {
    setRenderOtpVerification(boolean);
  }

  const { values, errors, touched, isSubmitting, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: emailVerificationSchema,
    onSubmit
  });


  return <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#CAE1FF] to-white">
    {
      renderOtpVerification ? (
        <>
          <OtpVerification goBackProp={handleGoBackBtnClick} />
        </>)
        : (<>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-col items-center mb-6">
              <Image
                src={LogoImage.src}
                alt="Logo"
                width={100}
                height={100}
                priority
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Sign up to continue
              </h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1  ${errors.email && touched.email ? "focus:ring-red-500 border-red-400" : "focus:ring-blue-500 border-gray-300 "}`}
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
                {errors.email && touched.email && (<p className="text-[10px] text-red-600 mt-1 ml-2">*{" "}{errors.email}</p>)}
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full py-3 bg-[#0000ff] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (<><ClipLoader size={15} color={"white"} /></>) : (<>Sign Up</>)}
              </button>
            </form>
            <div className="mt-10">
              <button
                type="submit"
                className=" flex items-center justify-center w-full py-3 mt-4 border border-gray-500 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="mr-2">
                  <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                  <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                </svg>
                <span>Facebook</span>
              </button>

              <button
                type="submit"
                className="flex items-center justify-center w-full py-3 mt-4 border border-gray-500 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="mr-2">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <span>Google</span>
              </button>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/signIn"
                  className="text-blue-600 hover:underline"
                >
                  Sign in here.
                </Link>
              </p>
            </div>
          </div>
        </>)
    }
  </div>

};

export default SignupPage;