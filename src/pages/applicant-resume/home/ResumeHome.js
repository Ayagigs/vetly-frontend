import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ResumeHome = () => {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const navigate = useNavigate();
  const routeToNextPage = () => {
    setIsOutletActive(true);
    navigate("/applicant/resume/build");
  };
  return (
    <>
      {!isOutletActive ? (
        <div>
          ResumeHome
          <br />
          <button onClick={routeToNextPage}>click</button>
          <br />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default ResumeHome;
