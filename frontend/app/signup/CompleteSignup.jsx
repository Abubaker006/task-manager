import React, { useState } from "react";
import { CompleteSignupSchema } from "@/schemas";
import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { ClipLoader } from "react-spinners";
import Cookies from "js-cookie";
import { registerUser } from "../api/apiServices";
import { message } from "antd";
import { useRouter } from "next/navigation";


const CompleteSignup = () => {
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });
    
    const email = Cookies.get("email");
    const router = useRouter();
    const togglePasswordVisibility = (passwordInputType) => {
        if (passwordInputType === "password")
            setShowPassword({ ...showPassword, password: !showPassword.password });
        else {
            setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword });
        }
    };

    const onSubmit = async (values, actions) => {
        console.log("Submitting form with values", values);
        const { name, password } = values;
    
        try {
            if (name && password && email) {
                const response = await registerUser(name, email, password);
                if(response.success===true){
                    message.success("User registered successfully");
                    Cookies.set('token', response.token, { expires: 1 });
                    router.replace("/dashboard");
                }else{
                    message.error("User Not Registerd");
                }
            }else{
                throw new Error("Please fill all fields (email, name, password)");
            }
        } catch (error) {
            console.error("Error while registering user", error);
        }
    
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };
    
    
  
    
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            name: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: CompleteSignupSchema,
        onSubmit,
    });

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1  ${errors.name && touched.name
                        ? "focus:ring-red-500 border-red-400"
                        : "focus:ring-blue-500 border-gray-300 "
                        }`}
                    placeholder="Enter your name"
                    type="text"
                />
                {errors.email && touched.email && (
                    <p className="text-[10px] text-red-600 mt-1 ml-2">
                        * {errors.name}
                    </p>
                )}
            </div>
            <div className="relative">
                <input
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.password && touched.password
                        ? "focus:ring-red-500 border-red-400"
                        : "focus:ring-blue-500 border-gray-300"
                        }`}
                    placeholder="Enter your password"
                    type={showPassword.password ? "text" : "password"}
                    autoComplete="off"
                    autoCorrect="false"
                />
                {errors.password && touched.password && (
                    <p className="text-[10px] text-red-600 mt-1 ml-2">
                        * {errors.password}
                    </p>
                )}

                <button
                    type="button"
                    onClick={() => { togglePasswordVisibility("password") }}
                    className="absolute right-3 top-2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword.password ? <EyeOff size={18} color="black" /> : <Eye size={18} color="black" />}
                </button>
            </div>
            <div className="relative">
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.confirmPassword && touched.confirmPassword
                        ? "focus:ring-red-500 border-red-400"
                        : "focus:ring-blue-500 border-gray-300"
                        }`}
                    placeholder="Enter your password"
                    type={showPassword.confirmPassword ? "text" : "password"}
                    autoComplete="off"
                    autoCorrect="false"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-[10px] text-red-600 mt-1 ml-2">
                        * {errors.confirmPassword}
                    </p>
                )}

                <button
                    type="button"
                    onClick={() => { togglePasswordVisibility("confirmPassword") }}
                    className="absolute right-3 top-2 text-gray-600 hover:text-gray-800"
                >
                    {showPassword.confirmPassword ? <EyeOff size={18} color="black" /> : <Eye size={18} color="black" />}
                </button>
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
                    <>Sign Up</>
                )}
            </button>
        </form>
    );
};
export default CompleteSignup;