import React from "react";
import { Outlet } from "react-router-dom";

import "./UserLayout.scss";
import ArtistSidebar from "../components/sidebar/ArtistSidebar";

const ArtistLayout = () => {
  return (
    <div className="userLayout">
      <div className="userLayout-left">
        <ArtistSidebar />
      </div>
      <div className="userLayout-right">
        <Outlet />
      </div>
    </div>
  );
};

export default ArtistLayout;
