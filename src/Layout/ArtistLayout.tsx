
import { Outlet } from "react-router-dom";

import "./ArtistLayout.scss";
import ArtistSidebar from "../components/sidebar/ArtistSidebar";

const ArtistLayout = () => {
  return (
    <div className="artistLayout">
      <div className="artistLayout-left">
      <div className="artistLayout-left-line"></div>
        <ArtistSidebar />
      </div>
      <div className="artistLayout-right">
        <Outlet />
      </div>
    </div>
  );
};

export default ArtistLayout;
