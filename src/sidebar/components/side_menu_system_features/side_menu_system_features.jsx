import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./side_menu_system_features.css";
import SideMenuSystemSubFeatures from "../side_menu_system_sub_features/side_menu_system_sub_features";

import { FiChevronUp } from "react-icons/fi";

function SideMenuSystemFeatures({ features }) {
  const [expand, setExpand] = useState(false);

  const currentPath = window.location.pathname;
  console.log(currentPath);
  

  return (
    <div className="side_menu_system_features">
      <li key={features._id}>
        <NavLink className={({isActive}) => {return isActive ? "side_menu_system_features-details-active" : ""}} to={features.url} onClick={() => setExpand(!expand)}>
          {/* <div className={currentPath === features.url ?'side_menu_system_features-details-active' : `side_menu_system_features-details`} > */}
          {/* <div className={`side_menu_system_features-details ${currentPath === features.url ? "active": ""}`} > */}
          <div className={`side_menu_system_features-details`} >
            <div className="side_menu_system_features-details-name">
              {features.name}
            </div>
            <div className="side_menu_system_features-details-arrow">
              {features.subFeatures && features.subFeatures.length > 0 ? (
                expand ? (<FiChevronUp />) : ( features.expandIcon )
              ) : undefined}
            </div>
          </div>
          {/* Home */}
        </NavLink >
        <ul
          className={`side_menu_system_features-sub_features ${
            expand ? "expand" : undefined
          }`}
        >
          <div className="side_menu_system_features-sub_features-feature">
            {features.subFeatures &&
             features.subFeatures.map((subFeatures) => (
                <SideMenuSystemSubFeatures
                  key={subFeatures._id}
                  subFeatures={subFeatures}
                />
              ))}
          </div>
        </ul>
      </li>
    </div>
  );
}

export default SideMenuSystemFeatures;