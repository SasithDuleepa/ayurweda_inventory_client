import React, { useState , useEffect} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./side_menu_systems.css";
import SideMenuSystemFeatures from "../side_menu_system_features/side_menu_system_features";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function SideMenuSystems({ item, onClick }) {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  // Function to determine if the current location matches the given path
  const isActiveRoute = (path) => {
    const currentPath = location.pathname.split('/')[1]; // Get the first part of the path
    const targetPath = path.split('/')[1]; // Get the first part of the target path
    return currentPath === targetPath;
  };

  return (
    <div className="side_menu_systems">
      <div className="side_menu_systems-system">
        <li onClick={onClick}>
          <NavLink 
            className={isActiveRoute(item.url) ? "side_menu_systems-system-details-active" : ""}
            to={item.url} 
            onClick={() => {setExpand(!expand)}}
          >
            <div className={`side_menu_systems-system-details`} >
              <div className="side_menu_systems-system-details-nameIcon">
                <div className="side_menu_systems-system-details-nameIcon-icon">
                  {item.icon}
                </div>
                <div className="side_menu_systems-system-details-nameIcon-name">
                  {item.name}
                </div>
              </div>
              <div className="side_menu_systems-system-details-arrow">
                {expand ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
          </NavLink>

          <ul
            className={`side_menu_systems-system-features ${
              expand ? "expand" : undefined
            }`}
          >
            <div className="side_menu_systems-system-features-feature">
              {item.features.length>0 &&
                item.features.map((features) => (
                  <SideMenuSystemFeatures
                    key={features._id}
                    features={features}
                    isActive={features.active}
                  />
                ))}
            </div>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default SideMenuSystems;
