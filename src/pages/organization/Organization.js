import React from "react";
import { useParams } from "react-router-dom";

const Organization = () => {
  const { token } = useParams();

  return <div>{token}</div>;
};

export default Organization;
