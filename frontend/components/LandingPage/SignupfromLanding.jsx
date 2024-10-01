"use client"
import React, { useEffect } from "react";
import OtpVerification from "../OtpVerification";
import { message } from "antd";

const SignupfromLanding = ({ email }) => {
   


    const handleGoBackBtnClick = (boolean) => {
        setRenderOtpVerification(boolean);
    }

    if (!setRenderOtpVerification) {
        return null;
    }

    return (
        <>
            {setRenderOtpVerification &&
                <OtpVerification goBackProp={handleGoBackBtnClick} />
            }
        </>
    );
};

export default SignupfromLanding;