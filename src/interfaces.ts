export interface Track {
  Number: string;
  Title: string;
  Length: string;
}

export interface Album {
  Album: string;
  Artist: string;
  Picked: string;
  Released: string;
  Day: string;
  Art: string;
  Embed: string;
  "Primary Genre": string;
  "Secondary Genre"?: string | null; // Optional property
  Listen: {
    Spotify: string;
    "YT Music": string;
    Deezer: string;
  };
  Tracklist: Track[];
  Writeup: string;
  Tags: string[];
}
