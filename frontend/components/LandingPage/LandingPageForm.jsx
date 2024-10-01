"use client";
import React from "react";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import { emailVerificationSchema } from "@/schemas";
import { ClipLoader } from "react-spinners";
import { message } from "antd";
import { requestOtp } from "@/app/api/apiServices";

const LandingPageForm = () => {

    const onSubmit = async (values, actions) => {
        const email = values.email;
        if (!email) {
            console.error("Email is required");
            return;
        }

        const result = await requestOtp(email);
        if (result.success) {
            Cookies.set("email", email);
            message.success(result.message);
            Cookies.set("VerifyOtp", true, { expires: 5 / 1440 }); 
            actions.resetForm();
        } else if (result.message === "alreadySent") {
            message.error("OTP has already been sent to your email");
            Cookies.set("VerifyOtp", true, { expires: 5 / 1440 });
        } else {
            message.error(result.message);
        }
    };

    const { values, errors, touched, isSubmitting, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: emailVerificationSchema,
        onSubmit
    });

    return (
        <>
            <form className="flex flex-col sm:flex-row items-center mb-4" onSubmit={handleSubmit} >
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your work email"
                    className="w-full sm:w-auto flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className={`mt-4 sm:mt-0 sm:ml-4 px-6 py-3 bg-[#0000ff] text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <ClipLoader size={15} color={"white"} />
                    ) : (
                        <>Get Started</>
                    )}
                </button>
               
            </form>
            {errors.email && touched.email && (
                    <p className="text-[10px] text-red-600 mt-1 ml-2">* {errors.email}</p>
                )}
        </>
    );
};

export default LandingPageForm;
