import { useParams } from "react-router-dom";
import Playlist from "../../components/PlayList/PlayList";

const tracks = [
  {
    recommendId: "1",
    songs: [
      {
        id: "1",
        title: "Neon Nights",
        artist: "Cyber Echo",
        album: "Digital Dreams",
        plays: "2.1M",
        duration: "3:42",
        cover: "/artist-1.jpg",
      },
      {
        id: "2",
        title: "Starlight",
        artist: "Aurora Wave",
        album: "Cosmic",
        plays: "1.8M",
        duration: "4:15",
        cover: "/artist-1.jpg",
      },
      {
        id: "3",
        title: "Digital Love",
        artist: "Synth Master",
        album: "Electric",
        plays: "1.6M",
        duration: "3:28",
        cover: "/artist-1.jpg",
      },
    ],
  },
  {
    recommendId: "2",
    songs: [
      {
        id: "4",
        title: "Future Bass",
        artist: "Beat Drift",
        album: "Wave",
        plays: "1.5M",
        duration: "4:02",
        cover: "/artist-1.jpg",
      },
      {
        id: "5",
        title: "Unknown Track",
        artist: "Unknown Artist",
        album: "Mystery",
        plays: "1.1M",
        duration: "3:55",
        cover: "/artist-1.jpg",
      },
      {
        id: "6",
        title: "Midnight Dreams",
        artist: "Luna Rose",
        album: "Nocturne",
        plays: "900K",
        duration: "3:33",
        cover: "/artist-1.jpg",
      },
    ],
  },
];

const RecommendedDetail = () => {
  const { id } = useParams<{ id: string }>();

  const PlayData = tracks.find((item) => item.recommendId === id);

  return (
    <div>
      <Playlist data={PlayData?.songs} />
    </div>
  );
};
export default RecommendedDetail;
