import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(email);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email === "admin@admin.com") {
      setIsAdmin(true);
      setIsAdminLoading(false);
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
