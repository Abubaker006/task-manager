import { message } from "antd";
import axios from "axios";

const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const requestOtp = async (email) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/api/request-otp`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return { success: true, message: "OTP sent to your email" };
    } else if (response.status === 212) {
      return { success: false, message: "alreadySent" };
    } else {
      return { success: false, message: "Error in sending OTP" };
    }
  } catch (error) {
    console.error("Error encountered in requesting OTP", error);
    return { success: false, message: "Error in sending OTP" };
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/api/verify-otp`,
      { email, otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return { success: true, message: "OTP verified successfully" };
    } else {
      return { success: false, message: "Invalid OTP" };
    }
  } catch (error) {
    console.error("Error encountered in verifying OTP", error);
    return { success: false, message: "Error in verifying OTP" };
  }
};
