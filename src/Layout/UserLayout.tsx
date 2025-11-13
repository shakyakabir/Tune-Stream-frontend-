import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../components/sidebar/UserSidebar";
import "./UserLayout.scss";
import MusicPlayer from "../components/Footer/MusicPlayer";

const UserLayout = () => {
  return (
    <div className="userLayout">
      <div className="userLayout-musicPlayer">
      <MusicPlayer music={"kk"}/>
      </div>
      <div className="userLayout-left">
        <UserSidebar />
      </div>
      <div className="userLayout-right">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
