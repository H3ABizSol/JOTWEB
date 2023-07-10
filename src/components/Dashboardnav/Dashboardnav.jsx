import React from "react";
import { NavLink } from "react-router-dom";

export const Dashboardnav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/admin/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/admin/order">Order</NavLink>
        </li>
      </ul>
    </div>
  );
};
