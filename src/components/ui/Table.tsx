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
          {data.map((artist, index) => (
            <tr key={index} className="artist-table-row">
              <td className="artist-table-row-info">
                <img src={artist.avatar} alt={artist.name} />
                <div>
                  <p className="artist-table-row-name">{artist.name}</p>
                  <span>{artist.email}</span>
                </div>
              </td>

              <td>{artist.genre}</td>
              <td>{artist.submitted}</td>

              <td>
                <span
                  className={`artist-table-row-status ${artist.status
                    .replace(" ", "")
                    .toLowerCase()}`}
                >
                  {artist.status}
                </span>
              </td>

              <td>{artist.followers}</td>

              <td className="artist-table-row-actions">
                <button className="approve">✔</button>
                <button className="reject">✘</button>
                <button className="info">ℹ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
