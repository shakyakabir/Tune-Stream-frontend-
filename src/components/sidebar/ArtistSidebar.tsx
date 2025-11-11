import {
  FaRegCompass,
  FaMusic,
  FaCalendar,
  FaShoppingBag,
  FaMicrophone,
} from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import "./UserSidebar.scss";
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
  const Navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="" />
        <h3>Tune Stream</h3>
      </div>

      <div className="sidebar-browse">
        <h3>Browse</h3>
        <ul>
          {sidebarbrowserdata.map((data, index) => (
            <div className="sidebar-browse-list" key={index}>
              <li onClick={() => Navigate(data.path)}>
                <span>{data.icon}</span>
                <span> {data.name}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistSidebar;
