import { useEffect } from "react";

const useToken = (email) => {
  const token =
    "8aeb084376733067a4a094721fded4be256c888fa1e17e198f4a926e0e2a1a424fffd125c835ccf9ef5f6e4e6fac9a1361d62d8d0b2878216b7e0ef4fed24535";
  console.log(email);
  useEffect(() => {
    localStorage.setItem("accessToken", token);
  }, [email]);

  return [token];
};

export default useToken;
