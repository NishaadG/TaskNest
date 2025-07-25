// components/layouts/DashboardLayout.jsx

import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import SideMenu from "../../components/layouts/SideMenu";
import Navbar from "../../components/layouts/Navbar";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
