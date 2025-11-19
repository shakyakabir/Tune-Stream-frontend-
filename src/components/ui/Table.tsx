import React from "react";
import "./Table.scss";

export interface ArtistData {
  name: string;
  email: string;
  avatar: string;
  genre: string;
  submitted: string;
  status: "Pending" | "Approved" | "Under Review";
  followers: string;
}

interface ArtistTableProps {
  data: ArtistData[];
}

const Table: React.FC<ArtistTableProps> = ({ data }) => {
  return (
    <div className="artist-table">
      <table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Genre</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Followers</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {/* Only ONE dataset is loaded → no map */}
          {data[0] && (
            <tr className="artist-row">
              <td className="artist-row-info">
                <img src={data[0].avatar} alt={data[0].name} />
                <div>
                  <p className="artist-row-name">{data[0].name}</p>
                  <span>{data[0].email}</span>
                </div>
              </td>

              <td>{data[0].genre}</td>
              <td>{data[0].submitted}</td>

              <td>
                <span
                  className={`artist-row-status ${data[0].status
                    .replace(" ", "")
                    .toLowerCase()}`}
                >
                  {data[0].status}
                </span>
              </td>

              <td>{data[0].followers}</td>

              <td className="artist-row-actions">
                <button className="approve">✔</button>
                <button className="reject">✘</button>
                <button className="info">ℹ</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
};

export default Table;
