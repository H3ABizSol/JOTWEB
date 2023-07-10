import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export const Privateroute = () => {
  const [ok, setOk] = useState(true);
  return <>{ok ? <Outlet /> : "loading"}</>;
};
