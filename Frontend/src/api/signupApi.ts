import axios from "axios";
import type { AxiosResponse } from "axios";

const apiUrl = "http://localhost:3000/api/v1/signup"
interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface SignupResponse {
  status: number;
  message: string;
  token?: string;
}

export const signupUser = async (
  userData: SignupData
): Promise<SignupResponse> => {
  try {
    const resp: AxiosResponse<SignupResponse> = await axios.post(
      `${apiUrl}`,
      userData
    );
    return resp.data;
  } catch (error: any) {
    const message = error.response?.data?.message || "Signup failed";
    throw new Error(message);
  }
};
