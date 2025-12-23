import {
  FaRegCompass,
  FaMusic,
  FaCalendar,
  FaShoppingBag,
  FaMicrophone,
} from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import "./AdminSidebar.scss";
import Button from "../ui/Button";
const sidebarbrowserdata = [
  {
    name: "AdminDashboard",
    icon: <FaRegCompass size={13} />,
    path: "/admin/dashboard", // Landing/Home
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
    path: "/admin/Analytic",
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
const AdminSidebar = () => {
  const Navigate = useNavigate();
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <img src="/logo.png" alt="" />
        <h3>Tune Stream</h3>
      </div>
      <hr />

      <div className="admin-sidebar-container">
        <div className="admin-sidebar-container-browse">
          <h3>Browse</h3>
          <ul className="admin-sidebar-container-browse-ul">
            {sidebarbrowserdata.map((data, index) => (
              <div
                className="admin-sidebar-container-browse-ul-list"
                key={index}
              >
                <li onClick={() => Navigate(data.path)}>
                  <span>{data.icon}</span>
                  <span> {data.name}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <hr />
          <Button
            text={"admin-sidebar-button"}
            onClick={() => Navigate("/upload-music")}
            varient={"gradient"}
            type={"button"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
