import React from "react";
import { NavLink } from "react-router-dom"

import "./side_menu_system_sub_features.css";;

function SideMenuSystemSubFeatures({ subFeatures }) {

  const currentPath = window.location.pathname;
  console.log(currentPath);

  return (
    <div className="side_menu_system_sub_features">
      <li>
        <NavLink className={({isActive}) => {return isActive ? "side_menu_system_sub_features-details-active" : ""}} to={subFeatures.url}>
          {/* <div className={`side_menu_system_sub_features-details ${currentPath === subFeatures.url ? "active" : undefined}`}> */}
          <div className={`side_menu_system_sub_features-details`}>
            {subFeatures.name}
          </div>
        </NavLink>
      </li>
    </div>
  );
}

export default SideMenuSystemSubFeatures;
