export interface Movie {
  id:       string;
  title:    string;
  year:     number;
  director: string;
  duration: number;
  poster:   string;
  genre:    string[];
  rate:     number;
}

export interface OnlyResponseMovie {
  message: string;
  movie?:   Movie;
}