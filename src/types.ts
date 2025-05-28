export interface Image {
  height: number;
  url: string;
  width: number;
}

export type ArtistOrigin = 'us' | 'uk' | 'other' | string;

export interface Album {
  uuid: string;
  artist: string;
  artistOrigin: ArtistOrigin | null;
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
  tidalId: string | null; // Corrected: Was number | string | null, now string | null
  amazonMusicId: string | null;
  youtubeMusicId: string | null;
  qobuzId: string | null;
  deezerId: string | null;
}

export interface AlbumWithRating extends Album {
  votes: number;
  totalRating: number; // Stays as number, 'did-not-listen' is not in getGroup for this
  averageRating: number; // Stays as number
  listenedAt: string; // Assuming ISO date string
}

export interface Member {
  id: string;
  name: string;
}

export interface FilteredSelection {
  selections: string[];
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
  /** Expected format e.g., "1970", "1980", "1990", "2010". Matches regex /(19|20)\d\d/ */
  decade: string;
  rating: number;
}

export type UpdateFrequencyType = 'dailyWithWeekends' | 'daily';

export interface Group<T extends string | undefined = undefined> {
  name: string;
  slug: T extends string ? T : string;
  paused: boolean;
  members: Member[];
  updateFrequency: UpdateFrequencyType;
  filteredSelection: FilteredSelection;
  currentAlbum: Album | null;
  latestAlbum: Album | null;
  highestRatedAlbums: AlbumWithRating[];
  lowestRatedAlbums: AlbumWithRating[];
  favoriteGenres: GenreVote[];
  worstGenres: GenreVote[];
  ratingByDecade: DecadeVote[];
  numberOfGeneratedAlbums: number;
  totalVotes: number;
  averageRating: number | null;
}

export interface AlbumReview {
  projectName: string;
  rating: number | null;
  review: string | null;
}

export interface AlbumInGroup { // Corrected: Removed generics S and U
  albumName: string;
  albumArtist: string;
  reviews: AlbumReview[];
}

export interface ProjectHistoryAlbum extends Album {
  // No additional fields from history.album compared to base Album
}

export type AlbumRating = 1 | 2 | 3 | 4 | 5 | 'did-not-listen' | null;

export interface ProjectHistoryEntry {
  album: ProjectHistoryAlbum;
  rating: AlbumRating; // Corrected: Uses the new AlbumRating type
  review?: string | null;
  revealedAlbum: boolean;
  generatedAt: string; // Assuming ISO date string
  globalRating: number | null;
}

export interface Project<P extends string | undefined = undefined> {
  shareableUrl: string | null;
  currentAlbum: Album | null;
  currentAlbumNotes: string | null;
  updateFrequency: UpdateFrequencyType;
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
  album: Album;
  rating: number | null; // This rating is distinct from ProjectHistoryEntry.rating
  review: string | null;
  listenedAt: string; // Assuming ISO date string
}

export interface UserAlbumStats {
  name: string;
  stats: UserAlbumStatEntry[];
  totalVotes: number;
  averageRating: number | null;
}
