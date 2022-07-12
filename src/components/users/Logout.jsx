import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    navigate("/");
  });

  return <></>;
};

export default Logout;
