import React from "react";

import "./Library.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";

const Library: React.FC = () => {
  return (
    <section className="library">
      <div className="library__header">
        <h2>Your Library</h2>
        <p>Your personal collection of playlists and music</p>
      </div>

      <div className="library__grid">
        {[1, 2, 3].map((_, i) => (
          <FeaturedCard
            key={i}
            type="playlist"
            title="New Playlist"
            subtitle="My awesome playlist"
            songsCount={24}
            duration="1h 32m"
            image="" // optional gradient fallback
            audioUrl="/audio/sample.mp3"
          />
        ))}
      </div>
    </section>
  );
};

export default Library;
