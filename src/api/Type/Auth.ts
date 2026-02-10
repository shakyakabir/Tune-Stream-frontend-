export type AuthRequest = {
  email: string;
  name?: string;
  contact?: string;
  userId?: string;
  password?: string;
  username?: string;
  role?: string;
};

export type AuthResponse = {
  userId: number;
  token: string;
  role: "USER" | "ARTIST" | "ADMIN";
  message: string;
};
