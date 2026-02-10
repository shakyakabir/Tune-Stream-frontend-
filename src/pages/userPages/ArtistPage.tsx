import React, { useEffect, useState } from "react";
import "./ArtistPage.scss";
import Input from "../../components/ui/Input";
import { GetAllArtist } from "../../api/Service/Artist/GetArtist";
import { useNavigate } from "react-router-dom";

interface TrendingItem {
  title: string;
  genre: string;
  growth: string;
}

interface Artist {
  id: string;
  username: string;
  profileImage: string;
}

const trendingData: TrendingItem[] = [
  { title: "Rising Star", genre: "Pop", growth: "+125% this week" },
  { title: "The Nexus", genre: "Rock", growth: "+98% this week" },
  { title: "Soul Drift", genre: "R&B", growth: "+87% this week" },
];

const ArtistPage: React.FC = () => {
  const [artistData, setArtistData] = useState<Artist[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await GetAllArtist();
      setArtistData(data);
    };
    fetch();
  }, []);

  const navigate = useNavigate();
  const handleArtistDetail = (id: string) => {
    navigate(`/artist/detail/${id}`);
  };

  return (
    <div className="artisst">
      <div className="artisst-heading">
        {" "}
        <h1>Discover Artists</h1>
        <p>Explore your favorite artists and discover new talent</p>
        <Input
          type="search"
          placeholder="search for artits..."
          name={"search"}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
        />
      </div>

      {/* Trending Now Section */}
      {/* <section className="artisst-trending">
        <h2>Trending Now</h2>
        <div className="artisst-trending-cards">
          {trendingData.map((item, index) => (
            <div className="artisst-trending-cards-card" key={index}>
              <div className="artisst-trending-cards-card-info">
                <h3>{item.title}</h3>
                <p>{item.genre}</p>
                <span>{item.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Featured Artists Section */}

      <div className="artisst-container">
        {artistData.map((artist, index) => (
          <div
            className="artisst-container-card"
            onClick={() => handleArtistDetail(artist.id)}
            key={index}
          >
            <div className="artisst-container-card-circle">
              <img src={artist.profileImage} />
            </div>
            <p>{artist.username}</p>
            <span className="verified">Artist</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
