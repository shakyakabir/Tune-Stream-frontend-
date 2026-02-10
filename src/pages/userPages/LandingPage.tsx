import "./LandingPage.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";
import {
  playlistData,
  playlistDatas,
} from "../../components/mock/PlaylistData";
import Trending from "../../components/cards/Trending";
import { RecentData, TrendingData } from "../../components/mock/TrendingData";
import RecentCard from "../../components/cards/RecentCard";
import HeroComponent from "../../components/HeroSection/HeroComponent";
import GenresCard, { type Genre } from "../../components/Carousel/GenresCard";
import { GenresData } from "../../components/mock/CategoryData";
import { FiPlay } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCategories } from "../../api/Service/Categories/Categories";
import type { Artist } from "../../api/Type/Artisit/Music";
import { GetAllArtist } from "../../api/Service/Artist/GetArtist";

const LandingPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCategories();
      setCategories(res);
    };
    fetchData();
  }, []);

  const [artistData, setArtistData] = useState<Artist[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await GetAllArtist();
      setArtistData(data);
    };
    fetch();
  }, []);

  console.log(categories, "categories");
  const handleNaviage = (id: string) => {
    navigate(`/RecommendedDetail/${id}`);
  };
  return (
    <div className="landing">
      {/* {hero section} */}
      <HeroComponent
        heading={"Welcome to Tunespot"}
        subHeading={"Discover new music, book events, and shop exclusive merch"}
        buttonName1={"Sign In to Listen"}
        icon1={<FiPlay />}
        buttonName2={"Browse Playlists"}
        image="/artist-1.jpg"
      />
      {/* <GenresCard data={categories} /> */}

      {/* {Trending Song} */}

      <div className="landing-trending">
        <div className="landing-trending-header">
          <h3>Trending Song</h3>
          <p>View all</p>{" "}
        </div>

        <div className="landing-trending-card">
          {playlistData.map((data) => (
            <div>
              <FeaturedCard
                onImageClick={() => handleNaviage(data.id)}
                type="playlist"
                title={data.title}
                subtitle="kabir"
                audioUrl={data.audioUrl}
                image={data.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* {Featured Playlist} */}

      <div className="landing-artist">
        <div className="landing-artist-header">
          <h3>Popular Artist</h3>
          <p>View all</p>{" "}
        </div>

        <div className="landing-artist-container">
          {artistData.map((artist, index) => (
            <div className="landing-artist-container-card" key={index}>
              <div className="landing-artist-container-card-circle">
                <img src={artist.profileImage} />
              </div>
              <p>{artist.username}</p>
              <span className="verified">Artist</span>
            </div>
          ))}
        </div>
      </div>

      <div className="landing-playlist">
        <div className="landing-playlist-header">
          <h3>Song Playlist</h3>
        </div>

        <div className="landing-playlist-card">
          {playlistDatas.map((data) => (
            <FeaturedCard
              type="playlist"
              title={data.title}
              songsCount={data.songsCount}
              duration={data.duration}
              image={data.image}
            />
          ))}
        </div>
      </div>

      <div className="landing-player-layout">
        {/* {Trending Now} */}
        <div className="landing-player-layout-recommended">
          <h3>Recommended Playlist</h3>
          <div className="landing-player-layout-recommended-content">
            {TrendingData.map((data) => (
              <>
                <FeaturedCard
                  type="playlist"
                  title={data.title}
                  // songsCount={data.songsCount}
                  duration={data.duration}
                  image={data.image}
                />
              </>
            ))}
          </div>
        </div>
        {/* {Recently Played} */}
        <div className="landing-player-layout-recent">
          <h3>Recent Played</h3>
          <div className="landing-player-layout-recent-content">
            {RecentData.map((data) => (
              <RecentCard
                name={data.title}
                artist={data.artist}
                duration={data.duration}
                image={data.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
