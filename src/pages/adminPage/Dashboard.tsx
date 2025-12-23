// import React from "react";

// import Table, { type ArtistData } from "../../components/ui/Table";

// const demoData: ArtistData[] = [
//   {
//     name: "Luna Rivers",
//     email: "luna.rivers@example.com",
//     avatar: "https://i.pravatar.cc/150?img=32",
//     genre: "Pop",
//     submitted: "2025-01-10",
//     status: "Pending",
//     followers: "12.4K",
//   },
//   {
//     name: "Jay Nightfall",
//     email: "jay.nightfall@example.com",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     genre: "Hip-Hop",
//     submitted: "2025-01-12",
//     status: "Approved",
//     followers: "28.9K",
//   },
//   {
//     name: "Mira Solis",
//     email: "mira.solis@example.com",
//     avatar: "https://i.pravatar.cc/150?img=45",
//     genre: "Indie",
//     submitted: "2025-01-15",
//     status: "Under Review",
//     followers: "9.8K",
//   },
// ];

// const AdminDashboard: React.FC = () => {
//   const data = demoData.map((item) => item);
//   return (
//     <div className="">
//       <Table data={data} />
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";
import Table, { type ArtistData } from "../../components/ui/Table";
import "./Dashboard.scss";

const demoData: ArtistData[] = [
  {
    name: "Luna Rivers",
    email: "luna.rivers@example.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    genre: "Pop",
    submitted: "2025-01-10",
    status: "Pending",
    followers: "12.4K",
  },
  {
    name: "Jay Nightfall",
    email: "jay.nightfall@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    genre: "Hip-Hop",
    submitted: "2025-01-12",
    status: "Approved",
    followers: "28.9K",
  },
  {
    name: "Mira Solis",
    email: "mira.solis@example.com",
    avatar: "https://i.pravatar.cc/150?img=45",
    genre: "Indie",
    submitted: "2025-01-15",
    status: "Under Review",
    followers: "9.8K",
  },
];

const AdminDashboard: React.FC = () => {
  const [search, setSearch] = useState("");

  const filterData = demoData.filter((artist) => {
    const matchName = artist.name.toLowerCase().includes(search.toLowerCase());

    return matchName;
  });
  return (
    <div className="admin-dashboard">
      {/* ------- TOP UI BAR ------- */}
      <div className="top-bar">
        {/* Left: Search + Dropdown */}
        <div className="left-controls">
          <input
            type="text"
            placeholder="Search artists..."
            className="search-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <select className="status-select">
            <option>All Statuses</option>
          </select>
        </div>

        {/* Right: Stats */}
        <div className="stats">
          <span className="total">Total Requests: 47</span>
          <span className="pending">Pending: 23</span>
        </div>
      </div>

      {/* Table */}
      <Table data={filterData} />
    </div>
  );
};

export default AdminDashboard;
