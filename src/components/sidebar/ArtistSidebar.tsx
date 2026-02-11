import {
  FaRegCompass,
  FaMusic,
  FaCalendar,
  FaShoppingBag,
  FaMicrophone,
} from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";

import { useLocation, useNavigate } from "react-router-dom";

import "./ArtistSidebar.scss";

const sidebarbrowserdata = [
  {
    name: "Dashboard",
    icon: <FaRegCompass size={13} />,
    path: "/dashboard", // Landing/Home
  },
  {
    name: "Music",
    icon: <FaMusic size={12} />,
    path: "/music",
  },
  {
    name: "Merchandise",
    icon: <FaCalendar size={12} />,
    path: "/merchandise",
  },
  {
    name: "Earning",
    icon: <FaShoppingBag size={13} />,
    path: "/earning",
  },
  {
    name: "Analytics",
    icon: <FaMicrophone size={13} />,
    path: "/analytics",
  },
  {
    name: "Messages",
    icon: <MdOutlinePeopleOutline size={13} />,
    path: "/message",
  },
  {
    name: "Profile",
    icon: <MdOutlinePeopleOutline size={13} />,
    path: "/profile",
  },
];

const ArtistSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    navigate("/login");
    localStorage.clear();
  };

  return (
    <div className="artist-sidebar">
      <div className="artist-sidebar-logo">
        <img src="/logo.png" alt="" />
        <h3>Tune Stream</h3>
      </div>
      <hr />

      <div className="artist-sidebar-container">
        <div className="artist-sidebar-container-browse">
          <h3>Browse</h3>
          <ul className="artist-sidebar-container-browse-ul">
            {sidebarbrowserdata.map((data, index) => (
              <div
                className="artist-sidebar-container-browse-ul-list"
                key={index}
              >
                <li
                  onClick={() => navigate(data.path)}
                  className={`sidebar-browse-ul-list-item ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                >
                  <span>{data.icon}</span>
                  <span> {data.name}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <hr />
          <div className="artist-sidebar-container-profile">
            <span className="artist-sidebar-container-profile-img">s</span>
            <div className="artist-sidebar-container-profile-info">
              <h3>kabir</h3>
              <p>@kabirsha</p>
            </div>
          </div>
          <div
            className="artist-sidebar-container-profile-logout"
            onClick={handleLogout}
          >
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistSidebar;
