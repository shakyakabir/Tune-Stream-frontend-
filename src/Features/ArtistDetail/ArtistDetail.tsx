import { useParams } from "react-router-dom";
import Playlist from "../../components/PlayList/PlayList";
import { useEffect, useState } from "react";
import { GetArtistId } from "../../api/Service/Artist/GetArtist";

export interface Category {
  id: string;
  name: string;
}

export interface Artist {
  id: string;
  fullName: string;
  email: string;
  contactNo: string;
  password: string;
  stageName: string;
  shortBio: string;
  profileImage: string;
  role: "ARTIST" | "ADMIN" | "USER";
}

export interface Song {
  id: string;
  title: string;
  artistName: string;
  album: string;
  featuredArtists: string;
  audioPath: string;
  imagePath: string;
  releaseDate: [number, number, number]; // [year, month, day]
  category: Category;
  artist: Artist;
  visibility: "public" | "private";
  explicit: boolean;
}

const ArtistDetail = () => {
  const [artistData, setArtistData] = useState<Song[]>([]);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchArtist = async () => {
      const response = await GetArtistId(id);
      setArtistData(response);
    };

    fetchArtist();
  }, []);
  console.log(artistData, "artistDataartistData");
  const image = artistData[0]?.artist?.profileImage
    ? `http://localhost:8080/artist/profiles/${artistData[0]?.artist?.profileImage}`
    : undefined;
  return (
    <div>
      <Playlist
        name={artistData[0]?.artist?.stageName}
        bio={artistData[0]?.artist?.shortBio}
        data={artistData}
        image={image}
      />
    </div>
  );
};
export default ArtistDetail;
