import React, { useEffect, useState } from "react";

import { FiUser, FiDollarSign, FiHome, FiClipboard, FiLink, FiFileText, FiCheckSquare, FiMapPin, FiChevronDown } from "react-icons/fi";

import "./side_menu.css";

import Logo from "../assets/erp_log.png";
import ProfilePicture from "../assets/user.jpg";

import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

import SideMenuSystems from "../components/side_menu_systems/side_menu_systems";
import SystemList from "../utils/side_menu_data/side_menu_data";

function SideMenu() {
  const [collapse, setCollapse] = useState(true);
  const [sideMenuSystems, setSideMenuSystems] = useState(SystemList);


  useEffect(() => {
    if (collapse) {
      document
        .querySelectorAll(".side_menu_systems-system-features")
        .forEach((el) => {
          el.classList.remove("expand");
        });
    }
  }, [collapse]);

  return (
    <div className={`side_menu `}>
      <div className="side_menu-header">
        <img src={Logo} alt="System Logo" className="side_menu-header_logo" />
      </div>

      <div className="side_menu-user">
        <div className="side_menu-user-img-div">
          <img src={ProfilePicture} alt="Profile Picture" className="side_menu-user-img" />
        </div>

        <div className="side_menu-user-info">
          <p className="side_menu-user-info-name">User Name</p>
          <p className="side_menu-user-info-designation">Admin</p>
        </div>
        {/* <div
          className="side_menu-user_details-arrow"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          {collapse ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
        </div> */}
      </div>

      <div className="side_menu-systems">
        <ul>
        {/* <SideMenuSystems
              item={{
                _id: "1",
                name: "pOS",
                url: "/pos",
                icon: <FiUser />,
                expandIcon: <FiChevronDown />,
                // active: true,
                features: []
            }}
              onClick={() => {
                if (collapse) {
                  setCollapse(false);
                }
              }}
            /> */}
          {sideMenuSystems.map((item) => (
            <SideMenuSystems
              key={item._id}
              item={item}
              onClick={() => {
                if (collapse) {
                  setCollapse(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
