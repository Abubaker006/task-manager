import axios from "axios";

const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const requestOtp = async (email) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/otp/request-otp`,
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
      `${backendBaseUrl}/otp/verify-otp`,
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

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/auth/signup`,
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      return {
        success: true,
        message: "User registered successfully",
        token: response.data.token,
      };
    } else {
      return { success: false, message: "Error in registering user" };
    }
  } catch (error) {
    console.error("Error encountered in registering user", error);
    return { success: false, message: "Error in registering user" };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/auth/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "User logged in successfully",
        token: response.data.token,
      };
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return { success: false, message: "Invalid email or password" };
    }
    return { success: false, message: "An unexpected error occurred" };
  }
};
