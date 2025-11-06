import React from "react";
import "./ArtistPage.scss";
import Input from "../../components/ui/Input";

interface TrendingItem {
  title: string;
  genre: string;
  growth: string;
}

interface Artist {
  name: string;
}

const trendingData: TrendingItem[] = [
  { title: "Rising Star", genre: "Pop", growth: "+125% this week" },
  { title: "The Nexus", genre: "Rock", growth: "+98% this week" },
  { title: "Soul Drift", genre: "R&B", growth: "+87% this week" },
];

const featuredArtists: Artist[] = [
  { name: "Luna Wave" },
  { name: "Stellar Beats" },
  { name: "Echo Valley" },
  { name: "Luna Wave" },
  { name: "Stellar Beats" },
  { name: "Echo Valley" },
];

const ArtistPage: React.FC = () => {
  return (
    <div className="artist">
      <div className="artist-heading">
        {" "}
        <h1>Discover Artists</h1>
        <p>Explore your favorite artists and discover new talent</p>
        <Input
          type="search"
          placeholder="search for artits..."
          name={"search"}
          onchange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
        />
      </div>

      {/* Trending Now Section */}
      <section className="artist-trending">
        <h2>Trending Now</h2>
        <div className="artist-trending-cards">
          {trendingData.map((item, index) => (
            <div className="artist-trending-cards-card" key={index}>
              <div className="artist-trending-cards-card-info">
                <h3>{item.title}</h3>
                <p>{item.genre}</p>
                <span>{item.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="featured-artists">
        <h2>Featured Artists</h2>
        <div className="artist-cards">
          {featuredArtists.map((artist, index) => (
            <div className="artist-card" key={index}>
              <div className="artist-circle"></div>
              <p>
                {artist.name} <span className="verified">✔️</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistPage;
