
import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import { otpVerificationSchema } from "@/schemas/index";
import { message } from "antd";
import { verifyOtp } from "../app/api/apiServices";
import Cookies from "js-cookie";

const MAX_INPUT_OTP = 6;
const MAX_TIME = 300;
const MAX_ATTEMPTS = 3;

const OtpVerification = ({ goBackProp }) => {
    const [otp, setOtp] = useState(Array(MAX_INPUT_OTP).fill(""));
    const otpInputRef = useRef([]);
    const [attempts, setAttempts] = useState(0);
    const [timeLeft, setTimeLeft] = useState(MAX_TIME);
    const [isTokenExpired, setIsTokenExpired] = useState(false);
  

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsTokenExpired(true);
        }
    }, [timeLeft]);


    const otpVerificationFormik = useFormik({
        initialValues: { otp: "" },
        validationSchema: otpVerificationSchema,
        onSubmit: (values) => {
            if (attempts < MAX_ATTEMPTS) {
                handleVerifyOTP(values.otp);
            }
        },
        validateOnChange: true,
        validateOnBlur: false,
    });


    const handleOtpChange = (event, index) => {
        const value = event.target.value;
        if (/^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < MAX_INPUT_OTP - 1) {
                otpInputRef.current[index + 1]?.focus();
            }

            if (newOtp.every((digit) => digit !== "")) {
                const otpString = newOtp.join("");
                otpVerificationFormik.setFieldValue("otp", otpString);
                otpVerificationFormik.validateField("otp").then((error) => {
                    if (!error) {
                        otpVerificationFormik.submitForm();
                    } else {
                        console.log("Validation error:", error);
                    }
                });
            }
        } else if (value === "") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);

            if (index > 0) {
                otpInputRef.current[index - 1]?.focus();
            }
        }
    };
    const handleVerifyOTP = async (otp) => {
        if (!isTokenExpired) {
        //   const email = localStorage.getItem("email"); 
        const email = Cookies.get("email");
          if (!email) {
            console.log("Email not found in local storage");
            return;
          }
        
          const result = await verifyOtp(email, otp);
        
          if (result.success) {
            console.log("OTP Verified");
            setOtp(Array(MAX_INPUT_OTP).fill(""));
            otpVerificationFormik.resetForm();     
            message.success(result.message);
        
            setTimeout(() => {
              handleGoBackBtn(); 
            }, 2000);
        
          } else {
            setAttempts(attempts + 1); 
            if (attempts + 1 >= MAX_ATTEMPTS) {
              setTimeout(() => {
                handleGoBackBtn(); 
              }, 1000);
              message.error("Max limit reached!");
            } else {
              message.error(result.message);
              setOtp(Array(MAX_INPUT_OTP).fill("")); 
              otpVerificationFormik.resetForm();     
              otpInputRef.current[0]?.focus();       
            }
          }
        } else {
          message.error("Token expired");
        }
      };
    // const handleVerifyOTP = async (otp) => {
    //     if (!isTokenExpired) {
    //         const email = localStorage.getItem("email"); 
    //         if (!email) {
    //             console.log("Email not found in local storage");
    //             return;
    //         }
    
    //         try {
    //             const response = await axios.post(
    //                 `${backendBaseUrl}/api/verify-otp`,
    //                 {
    //                     email: email, 
    //                     otp: otp,     
    //                 },
    //                 {
    //                     headers: {
    //                         "Content-Type": "application/json" 
    //                     }
    //                 }
    //             );
    
                 
    //             if (response.status===200) {
    //                 console.log("OTP Verified");
    //                 setOtp(Array(MAX_INPUT_OTP).fill(""));
    //                 otpVerificationFormik.resetForm();     
    //                 message.success("OTP Verified");
    
      
    //                 setTimeout(() => {
    //                     handleGoBackBtn(); 
    //                 }, 2000);
    
    //             } else {
    //                 setAttempts(attempts + 1); 
    //                 if (attempts + 1 >= MAX_ATTEMPTS) {
    //                     setTimeout(() => {
    //                         handleGoBackBtn(); 
    //                     }, 1000);
    //                     message.error("Max limit reached!");
    //                 } else {
    //                     message.error("Invalid OTP.");
    //                     setOtp(Array(MAX_INPUT_OTP).fill("")); 
    //                     otpVerificationFormik.resetForm();     
    //                     otpInputRef.current[0]?.focus();       
    //                 }
    //             }
    //         } catch (error) {
    //             console.error("Error encountered in verifying OTP", error);
    //             message.error("Error in Verifying OTP. Please try again.");
    //         }
    //     } else {
    //         message.error("Token expired");
    //     }
    // };
    
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            handleOtpChange({ target: { value: "" } }, index);
        }
    };


    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData("Text");
    
        if (/^\d{6}$/.test(pasteData)) {
  
            setOtp(pasteData.split(""));
            e.preventDefault();
    
            otpVerificationFormik.setFieldValue("otp", pasteData); 
            otpVerificationFormik.validateField("otp").then((error) => {
                if (!error) {
                    otpVerificationFormik.submitForm(); 
                } else {
                    console.log("Validation error:", error);
                }
            });
        }
    };
    const handleGoBackBtn = () => {
        setTimeLeft(MAX_TIME);
        setAttempts(0);
        setIsTokenExpired(false);
        goBackProp(false);
    };


    return (
        <>
            <form
                className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
                autoComplete="off"
                noValidate
                onSubmit={otpVerificationFormik.handleSubmit}
            >
                <div className="text-center mb-6">
                    <h1 className="text-gray-900 text-2xl font-bold mb-2">Verify OTP</h1>
                    <p className="text-gray-500 mb-4">
                        Please enter the OTP sent to your email or phone.
                    </p>
                    <div className="text-red-500 mt-2">
                        {isTokenExpired
                            ? "OTP has expired. Please request a new one."
                            : `Time remaining: ${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
                    </div>
                    {!isTokenExpired && attempts < MAX_ATTEMPTS && (
                        <div className="text-red-500 mt-2">
                            Attempts Left: {attempts}/{MAX_ATTEMPTS}
                        </div>
                    )}
                </div>

                {otpVerificationFormik.errors.otp && otpVerificationFormik.touched.otp && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                        There was an error, please try again.
                    </div>
                )}

                <div className="flex justify-center mb-8">
                    <div className="flex space-x-2">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={value}
                                ref={(el) => (otpInputRef.current[index] = el)}
                                onChange={(e) => handleOtpChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={(e) => handlePaste(e)}
                                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                            />
                        ))}
                    </div>
                </div>

                {otpVerificationFormik.errors.otp && (
                    <div className="text-red-500 text-center mb-4">
                        {otpVerificationFormik.errors.otp}
                    </div>
                )}

                <div className="flex justify-between items-center space-x-4">
                    <button
                        type="button"
                        className={`w-full py-3 bg-[#0000ff] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ${otpVerificationFormik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleGoBackBtn}
                    >
                        Go Back
                    </button>

                    {isTokenExpired && (
                        <button
                            type="button"
                            className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                            onClick={handleResendCode}
                        >
                            Resend Code
                        </button>
                    )}
                </div>
            </form>

        </>
    );
};

export default OtpVerification