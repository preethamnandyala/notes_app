import React from "react";
import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) => {
  return `flex items-center gap-1 px-3 py-2 rounded-r-full transition-colors ${
    isActive ? "bg-emerald-600 text-white" : "hover:bg-emerald-100"
  }`;
};
const NavItem = ({to, icon: Icon, label}) => {
  return(
    <NavLink to={to} className={getNavLinkClass}>
      <Icon/>
      {label}
    </NavLink>
  )

}
export default NavItem;