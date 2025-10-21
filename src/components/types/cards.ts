export type CardType = "playlist" | "event" | "product";

export interface FeaturedCard {
  type?: CardType;
  image?: string;
  title?: string;
  subtitle?: string;

  // Common
  rating?: number;
  reviews?: number;
  badge?: string;

  // Playlist
  songsCount?: number;
  duration?: string;

  // Event
  date?: string;
  location?: string;
  tags?: string[];
  priceRange?: string;

  // Product
  price?: string;
  oldPrice?: string;
  colors?: string[];
  buttonText?: string;

  onButtonClick?: () => void;
}
