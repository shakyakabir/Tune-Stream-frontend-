export type CardType = "playlist" | "event" | "product";

export interface FeaturedCard {
  id?: string | number;
  type?: CardType;
  image?: string;
  title?: string;
  subtitle?: string;
  size?: number;

  // Common
  rating?: number;
  reviews?: number;
  badge?: string;

  // Playlist
  songsCount?: number;
  duration?: string;
  audioUrl?: string;

  // Event
  date?: string;
  location?: string;
  tags?: string[];
  priceRange?: string;

  // Product
  price?: number | string;
  oldPrice?: string;
  colors?: string[];
  buttonText?: string;

  onButtonClick?: () => void;
  onImageClick?: () => void;
}
