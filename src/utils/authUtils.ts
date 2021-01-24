// import {get_header} from "../services/config";
import { api } from "../services/api";
import { useRouter } from "next/router";

export const getBasicInformation = async () => {
  try {
    const token = localStorage.getItem("DD_access");
    const response = await api.post(
      "api/v1/users/my_basic_information/",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch {
    return false;
  }
};

// export const logout = () => {
//   console.log("실행됨");
//   const router = useRouter();
//   localStorage.removeItem("DD_access");
//   router.reload();
// };
