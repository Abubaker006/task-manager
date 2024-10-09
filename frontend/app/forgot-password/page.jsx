"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "@/assets/Logo-Light-Mode.svg";
import { useFormik } from "formik";
import {
    forgotPasswordSchema,
    resetForgotPasswordSchema,
} from "@/schemas/index";
import { ClipLoader } from "react-spinners";
import { requestOtp, resetPassword } from "../api/apiServices";
import { message } from "antd";
import OtpVerification from "@/components/OtpVerification";
import Cookies from "js-cookie";
import { Modal } from "antd";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const setEmail = (email) => {
    Cookies.set("email", email, { expires: 1 });
};

const ForgotPasswordPage = () => {
    const [renderOtpVerification, setRenderOtpVerification] = useState(false);
    const [renderResetPassword, setRenderResetPassword] = useState(false);
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });
    const router=useRouter();

    const togglePasswordVisibility = (passwordInputType) => {
        if (passwordInputType === "password")
            setShowPassword({ ...showPassword, password: !showPassword.password });
        else {
            setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword });
        }
    };

    const handleGoBackBtnClick = (boolean) => {
        setRenderOtpVerification(boolean);
    };

    const handleVerificationProp = (booleanValue) => {
        setRenderResetPassword(booleanValue);
        setRenderOtpVerification(false);
    };

    const handleCancelButton = () => {
        setRenderResetPassword(false);
        setRenderOtpVerification(false);
        formikValidationForResetingPassword.resetForm();
    };

    const handleSubmitPasswordReset = async (values, actions) => {
        const { password, confirmPassword } = values;
        const email = Cookies.get("email") || "";
        if (!email || !password || !confirmPassword) {
            message.error("Please fill all fields");
            return;
        }
        if (password !== confirmPassword) {
            message.error("Passwords do not match");
        }
        const result = await resetPassword(email, password, confirmPassword);

        if (result.success) {
            message.success(result.message);
            setTimeout(() => {
                setRenderResetPassword(false);
                router.push("/signIn");
            }, 1000);

        } else {
            message.error(result.message);
        }
        actions.resetForm();
    };

    const formikValidationForResetingPassword = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: resetForgotPasswordSchema,
        onSubmit: handleSubmitPasswordReset,
    });

    const onSubmit = async (values, actions) => {
        const { email } = values;
        if (!email) {
            message.error("Please enter your email address");
            return;
        }

        const response = await requestOtp(email, "forgot-password");

        if (response.success) {
            message.success(response.message);
            setEmail(email);
            setRenderOtpVerification(true);
            actions.resetForm();
        } else if (response.message === "alreadySent") {
            message.error("OTP has already been sent to your email");
            setRenderOtpVerification(true);
            setRenderResetPassword(false);
            actions.resetForm();
        } else {
            message.error(result.message);
        }
    };
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
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#CAE1FF] to-white">
                {renderOtpVerification ? (
                    <>
                        <OtpVerification
                            goBackProp={handleGoBackBtnClick}
                            verifyOtpProp={handleVerificationProp}
                        />
                    </>
                ) : (
                    <>
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
                                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1  ${errors.email && touched.email
                                            ? "focus:ring-red-500 border-red-400"
                                            : "focus:ring-blue-500 border-gray-300"
                                            }`}
                                        placeholder="Enter your email address"
                                        type="email"
                                        required
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-[10px] text-red-600 mt-1 ml-2 normal-case">
                                            * {errors.email}
                                        </p>
                                    )}
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={`w-full py-3 bg-[#0000ff] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <ClipLoader size={15} color={"white"} />
                                        </>
                                    ) : (
                                        <>Verify</>
                                    )}
                                </button>
                            </form>
                            <div className="mb-4 mt-4 text-center">
                                <Link
                                    href="/signIn"
                                    className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
                                >
                                    Go back to Sign In
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Modal
                title={<h2 className="text-xl font-semibold text-gray-800">Reset Your Password</h2>}
                open={renderResetPassword}
                onCancel={handleCancelButton}
                className="rounded-lg p-2"
                centered={true}
                footer={null}
            >
                <div className="mb-4">
                    <p className="text-[10px] text-gray-600">
                        Please enter a new password and confirm it below to reset your account password.
                    </p>
                </div>
                <form
                    className="space-y-4 mb-4"
                    onSubmit={formikValidationForResetingPassword.handleSubmit}
                >
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            value={formikValidationForResetingPassword.values.password}
                            onChange={formikValidationForResetingPassword.handleChange}
                            onBlur={formikValidationForResetingPassword.handleBlur}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${formikValidationForResetingPassword.errors.password &&
                                formikValidationForResetingPassword.touched.password
                                ? "focus:ring-red-500 border-red-400"
                                : "focus:ring-blue-500 border-gray-300"
                                }`}
                            placeholder="Enter your password"
                            type={showPassword.password ? "text" : "password"}
                            autoComplete="off"
                            autoCorrect="false"
                        />
                        {formikValidationForResetingPassword.errors.password &&
                            formikValidationForResetingPassword.touched.password && (
                                <p className="text-[10px] text-red-600 mt-1 ml-2">
                                    * {formikValidationForResetingPassword.errors.password}
                                </p>
                            )}

                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility("password")}
                            className="absolute right-3 top-2 text-gray-600 hover:text-gray-800"
                        >
                            {showPassword.password ? (
                                <EyeOff size={18} color="black" />
                            ) : (
                                <Eye size={18} color="black" />
                            )}
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formikValidationForResetingPassword.values.confirmPassword}
                            onChange={formikValidationForResetingPassword.handleChange}
                            onBlur={formikValidationForResetingPassword.handleBlur}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${formikValidationForResetingPassword.errors.confirmPassword &&
                                formikValidationForResetingPassword.touched.confirmPassword
                                ? "focus:ring-red-500 border-red-400"
                                : "focus:ring-blue-500 border-gray-300"
                                }`}
                            placeholder="Confirm your password"
                            type={showPassword.confirmPassword ? "text" : "password"}
                            autoComplete="off"
                            autoCorrect="false"
                        />
                        {formikValidationForResetingPassword.errors.confirmPassword &&
                            formikValidationForResetingPassword.touched.confirmPassword && (
                                <p className="text-[10px] text-red-600 mt-1 ml-2">
                                    * {formikValidationForResetingPassword.errors.confirmPassword}
                                </p>
                            )}

                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility("confirmPassword")}
                            className="absolute right-3 top-2 text-gray-600 hover:text-gray-800"
                        >
                            {showPassword.confirmPassword ? (
                                <EyeOff size={18} color="black" />
                            ) : (
                                <Eye size={18} color="black" />
                            )}
                        </button>
                    </div>

                    <button
                        disabled={formikValidationForResetingPassword.isSubmitting}
                        type="submit"
                        className={`w-full py-3 bg-[#0000ff] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ${formikValidationForResetingPassword.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {formikValidationForResetingPassword.isSubmitting ? (
                            <>
                                <ClipLoader size={15} color={"white"} />
                            </>
                        ) : (
                            <>Reset!</>
                        )}
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default ForgotPasswordPage;
