import {
  FaRegCompass,
  FaMusic,
  FaCalendar,
  FaShoppingBag,
  FaMicrophone,
} from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import Button from "../ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import FeaturedCard from "../cards/FeaturedCard";
import "./UserSidebar.scss";
const sidebarbrowserdata = [
  {
    name: "Discover",
    icon: <FaRegCompass size={15} />,
    path: "/", // Landing/Home
  },
  {
    name: "Library",
    icon: <FaMusic size={15} />,
    path: "/library",
  },
  {
    name: "Events",
    icon: <FaCalendar size={15} />,
    path: "/events",
  },
  {
    name: "Merch",
    icon: <FaShoppingBag size={15} />,
    path: "/merch",
  },
  {
    name: "Artists",
    icon: <FaMicrophone size={15} />,
    path: "/artists",
  },
  {
    name: "Artist Hub",
    icon: <MdOutlinePeopleOutline size={15} />,
    path: "/ArtistRegister",
  },
];
const UserSidebar = () => {
  const Navigate = useNavigate();

  const location = useLocation();

  const token = localStorage.getItem("token");

  const handleNavigation = () => {
    Navigate("premium");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="" />
        <h3>Tune Stream</h3>
      </div>

      <div className="sidebar-browse">
        <h3>Browse</h3>
        <ul className="sidebar-browse-ul">
          {sidebarbrowserdata.map((data, index) => (
            <div className="sidebar-browse-ul-list" key={index}>
              <li
                onClick={() => Navigate(data.path)}
                className={
                  location.pathname === data.path
                    ? "sidebar-browse-ul-list-active"
                    : ""
                }
              >
                <span>{data.icon}</span>
                <span> {data.name}</span>
              </li>
            </div>
          ))}
        </ul>
        <Button
          text={"Get Premium"}
          varient={"gradient"}
          onClick={handleNavigation}
          type={"submit"}
        />
        {token ? (
          <Button
            text={"Logout"}
            varient={"border"}
            type={"submit"}
            onClick={handleLogout}
          />
        ) : (
          <Button
            text={"Sign In"}
            varient={"border"}
            type={"submit"}
            onClick={() => {
              Navigate("/login");
            }}
          />
        )}
      </div>
      <div className="sidebar-upcomming">
        <h1>Upcomming Event </h1>
        <FeaturedCard
          type="event"
          date="jul 15"
          priceRange="$100"
          subtitle={"Summer Beats Festival"}
        />
      </div>
      <div className="sidebar-artist">
        <h1>Artist Spotlight </h1>
        <FeaturedCard
          type="playlist"
          image="jul 15"
          priceRange="$100"
          subtitle={"Luna"}
        />
      </div>
      <div className="sidebar-merch">
        <h1>Featured Merch </h1>
        <FeaturedCard
          type="event"
          date="jul 15"
          priceRange="$100"
          subtitle={"Summer Beats Festival"}
        />
      </div>
    </div>
  );
};

export default UserSidebar;
