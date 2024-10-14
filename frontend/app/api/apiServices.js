import axios from "axios";

const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const requestOtp = async (email, type) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/otp/request-otp`,
      { email, type },
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
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    return { success: false, message: error.response.data.message };
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
    if (response.status === 200) {
      return {
        success: true,
        message: "User registered successfully",
        token: response.data.token,
        userId: response.data.userId,
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
        userId: response.data.userId,
      };
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return { success: false, message: "Invalid email or password" };
    }
    return { success: false, message: "An unexpected error occurred" };
  }
};

export const resetPassword = async (email, password, confirmPassword) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/auth/reset-password`,
      {
        email,
        password,
        confirmPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return { success: true, message: "Password reset successfully" };
    }
  } catch (error) {
    return { success: false, message: "An unexpected error occurred" };
  }
};

export const fetchWorkspaces = async (userId, token) => {
  try {
    const response = await axios.post(
      `${backendBaseUrl}/dashboard/get-workspaces`,
      {
        userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    
    if (response.status === 200) {
      return {
        success: true,
        message: "Data fetched sucessfully",
        data: response.data,
      };
    }
  } catch (error) {
    return { sucess: false, message:  error.response.data.message };
  }
};

export const createWorkspace = async (name, description, token) => {
  try {
    if (!name || !token) {
      return { sucess: false, message: "Fill in all the required fields" };
    }
  } catch (error) {
    return { sucess: false, message: "An unexpected error occurred" };
  }
};
