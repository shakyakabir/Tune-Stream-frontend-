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
  img: string;
}

const trendingData: TrendingItem[] = [
  { title: "Rising Star", genre: "Pop", growth: "+125% this week" },
  { title: "The Nexus", genre: "Rock", growth: "+98% this week" },
  { title: "Soul Drift", genre: "R&B", growth: "+87% this week" },
];

const featuredArtists: Artist[] = [
  {
    name: "Luna Wave",
    img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/04/02/Pictures/salman-isabelle-jaane-recreated-bollywood-jaana-debut_eb5ae688-362a-11e8-8aa5-05fdb8d0ae52.jpg",
  },
  {
    name: "Stellar Beats",
    img: "https://c.ndtvimg.com/2019-07/m3t324h8_chaiyyan-chaiyyan-youtube_625x300_26_July_19.jpg",
  },
  {
    name: "Echo Valley",
    img: "https://media.licdn.com/dms/image/v2/D5622AQEEigtlZa9U1g/feedshare-shrink_800/B56ZsG1KIzIYAg-/0/1765346157267?e=2147483647&v=beta&t=rKMTtMPC85793H0n6WOxDGvFYEUbzx7vjQsNFaGmq6w",
  },
  {
    name: "Luna Wave",
    img: "https://media.licdn.com/dms/image/v2/D5622AQEEigtlZa9U1g/feedshare-shrink_800/B56ZsG1KIzIYAg-/0/1765346157267?e=2147483647&v=beta&t=rKMTtMPC85793H0n6WOxDGvFYEUbzx7vjQsNFaGmq6w",
  },
  {
    name: "Stellar Beats",
    img: "https://media.licdn.com/dms/image/v2/D5622AQEEigtlZa9U1g/feedshare-shrink_800/B56ZsG1KIzIYAg-/0/1765346157267?e=2147483647&v=beta&t=rKMTtMPC85793H0n6WOxDGvFYEUbzx7vjQsNFaGmq6w",
  },
  {
    name: "Echo Valley",
    img: "https://media.licdn.com/dms/image/v2/D5622AQEEigtlZa9U1g/feedshare-shrink_800/B56ZsG1KIzIYAg-/0/1765346157267?e=2147483647&v=beta&t=rKMTtMPC85793H0n6WOxDGvFYEUbzx7vjQsNFaGmq6w",
  },
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
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
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
              <div className="artist-circle">
                <img src={artist.img} />
              </div>
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
