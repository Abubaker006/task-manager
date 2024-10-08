"use client";
import React from "react";
import Image from "next/image";
import LogoImage from "@/assets/Logo-Light-Mode.svg";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "@/schemas/index";
import { ClipLoader } from "react-spinners";
const onSubmit = async (values, actions) => {
    promiseTimeout(2000).then(() => {
        console.log("Email sent successfully")
    });
    console.log(values);
    actions.resetForm();
}
const ForgotPasswordPage = () => {

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
    } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: forgotPasswordSchema,
        onSubmit,
    });



    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#CAE1FF] to-white">
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
                        Enter your email to reset your password
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
                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1  ${errors.email && touched.email ? "focus:ring-red-500 border-red-400" : "focus:ring-blue-500 border-gray-300"}`}
                            placeholder="Enter your email address"
                            type="email"
                            required
                        />
                        {errors.email && touched.email && (<p className="text-[10px] text-red-600 mt-1 ml-2 normal-case">*{" "}{errors.email}</p>)}
                    </div>
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className={`w-full py-3 bg-[#0000ff] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? (<><ClipLoader size={15} color={"white"} /></>) : (<>Verify</>)}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;