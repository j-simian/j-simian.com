import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { createHash } from "crypto";

function useAdmin() {
  const [admin, setAdmin] = useState<boolean | null>(null);
  useEffect(() => {
    let password = getCookie("jsimian_admin")?.toString()!;
    let hash = createHash("sha256");
    if (
      password
        ? hash.update(password).digest("hex") ==
          "303c706bf5145585f82737d068dba6248bbb514b7081c70896e8382320d43dd6"
        : false
    ) {
      console.log("Authenticated");
      setAdmin(true);
    }
  }, []);
  if (admin == null) return "Loading";
  else return admin;
}

export default useAdmin;
