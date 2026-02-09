export interface Artist {
  id?: number;
  email?: string;
  username?: string;
  contact?: string;
  password?: string;
  role?: string;
}

// export type MusicData = {
//   id?: number;
//   title: string;
//   artist_name: string;
//   album: string;
//   categoryId: any;
//   file: string;
//   image: string;
// };
export interface Category {
  id: number;
  name: string;
}

export interface MusicData {
  id: number;
  title: string;
  artistName: string;
  album: string;
  audioPath: string;
  imagePath: string;
  category?: Category;
  artist?: Artist;
}
