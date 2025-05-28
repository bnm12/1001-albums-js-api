export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  uuid: string;
  artist: string;
  artistOrigin: string | null;
  images: Image[];
  genres: string[];
  subGenres: string[] | null; // project.history.album.subGenres is null
  name: string;
  slug: string;
  releaseDate: string;
  globalReviewsUrl: string | null;
  wikipediaUrl: string | null;
  spotifyId: string | null;
  appleMusicId: string | null;
  tidalId: number | string | null; // Seen as number in getGroup, string in getAlbumStats
  amazonMusicId: string | null;
  youtubeMusicId: string | null;
  qobuzId: string | null;
  deezerId: string | null;
}

export interface AlbumWithRating extends Album {
  votes: number;
  totalRating: number;
  averageRating: number;
  listenedAt: string; // Assuming ISO date string
}

export interface Member {
  id: string;
  name: string;
}

export interface FilteredSelection {
  selections: string[]; // Assuming string array, might need more specific type if structure is known
  genres: string[];
}

export interface GenreVote {
  numberOfAlbums: number;
  totalRating: number;
  votes: number;
  genre: string;
  rating: number;
  numberOfVotes: number;
}

export interface DecadeVote {
  totalRating: number;
  votes: number;
  numberOfAlbums: number;
  decade: string;
  rating: number;
}

export interface Group<T extends string | undefined = undefined> {
  name: string;
  slug: T extends string ? T : string;
  paused: boolean;
  members: Member[];
  updateFrequency: string; // Consider enum if possible values are known
  filteredSelection: FilteredSelection;
  currentAlbum: Album | null; // currentAlbum can be null
  latestAlbum: Album | null; // latestAlbum can be null
  highestRatedAlbums: AlbumWithRating[];
  lowestRatedAlbums: AlbumWithRating[];
  favoriteGenres: GenreVote[];
  worstGenres: GenreVote[];
  ratingByDecade: DecadeVote[];
  numberOfGeneratedAlbums: number;
  totalVotes: number;
  averageRating: number | null; // Can be null if totalVotes is 0
}

export interface AlbumReview {
  projectName: string;
  rating: number | null;
  review: string | null;
}

export interface AlbumInGroup<S extends string | undefined = undefined, U extends string | undefined = undefined> {
  albumName: S extends string ? S : string;
  albumArtist: U extends string ? U : string;
  reviews: AlbumReview[];
}

export interface ProjectHistoryAlbum extends Album {
  // No additional fields from history.album compared to base Album
  // but subGenres can be null
}

export interface ProjectHistoryEntry {
  album: ProjectHistoryAlbum;
  rating: number | string | null; // rating can be "did-not-listen" or number or null
  review?: string | null; // review can be missing or null
  revealedAlbum: boolean;
  generatedAt: string; // Assuming ISO date string
  globalRating: number | null; // Can be null
}

export interface Project<P extends string | undefined = undefined> {
  shareableUrl: string | null;
  currentAlbum: Album | null;
  currentAlbumNotes: string | null;
  updateFrequency: string; // Consider enum if possible values are known
  paused: boolean;
  history: ProjectHistoryEntry[];
  name: P extends string ? P : string;
}

export interface AlbumStatEntry {
  albumName: string;
  albumArtist: string;
  albumSlug: string;
  albumSpotifyId: string | null;
  albumCoverUrl: string | null;
  totalRating: number;
  totalVotes: number;
  averageRating: number;
  globalTotalRating: number;
  globalTotalVotes: number;
  globalAverageRating: number;
}

export interface AlbumStats {
  stats: AlbumStatEntry[];
}

export interface UserAlbumStatEntry {
  album: Album; // Uses the common Album structure
  rating: number | null;
  review: string | null;
  listenedAt: string; // Assuming ISO date string
}

export interface UserAlbumStats {
  name: string;
  stats: UserAlbumStatEntry[];
  totalVotes: number;
  averageRating: number | null; // Can be null if totalVotes is 0
}
