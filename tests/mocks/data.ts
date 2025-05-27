import { Album } from '../../src/interfaces';

export const mockRandomAlbum: Album = {
  Album: 'The Dark Side of the Moon',
  Artist: 'Pink Floyd',
  Picked: 'Essential',
  Released: '1973',
  Day: '100',
  Art: 'https://i.discogs.com/ScUoZ00R0tX0G2S0T0T0R0Q0P0O0N0M0L0K0J0H0G0F0E0D0C0B0A0Z0Y0X0W0V0U0T0S0R0Q0P0O0N0M0L0K0J0H0G0F0E0D0C0B0A0/R-463277-1483703634-7019.jpeg.jpg',
  Embed: 'https://www.youtube.com/embed/videoseries?list=PL3PhWT10BW3Urh8EXX6xVwkmf3JgCaRzC',
  "Primary Genre": 'Progressive Rock',
  "Secondary Genre": 'Art Rock',
  Listen: {
    Spotify: 'https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv',
    "YT Music": 'https://music.youtube.com/playlist?list=OLAK5uy_kXld3x_wwR0ns0VUDRnS3n7P5X9C8k0_I',
    Deezer: 'https://www.deezer.com/en/album/302133',
  },
  Tracklist: [
    { Number: '1', Title: 'Speak to Me / Breathe (In the Air)', Length: '3:57' },
    { Number: '2', Title: 'On the Run', Length: '3:36' },
    { Number: '3', Title: 'Time', Length: '7:01' },
    { Number: '4', Title: 'The Great Gig in the Sky', Length: '4:36' },
    { Number: '5', Title: 'Money', Length: '6:22' },
    { Number: '6', Title: 'Us and Them', Length: '7:46' },
    { Number: '7', Title: 'Any Colour You Like', Length: '3:25' },
    { Number: '8', Title: 'Brain Damage', Length: '3:48' },
    { Number: '9', Title: 'Eclipse', Length: '2:03' },
  ],
  Writeup: 'A timeless masterpiece exploring themes of conflict, greed, time, and mental illness, wrapped in a sonically rich and innovative soundscape.',
  Tags: ['Concept Album', 'Philosophical', 'Atmospheric'],
};

export const mockYearAlbums: Album[] = [
  mockRandomAlbum, // For simplicity, reusing the same album
  {
    Album: 'Led Zeppelin IV',
    Artist: 'Led Zeppelin',
    Picked: 'Essential',
    Released: '1971',
    Day: '101',
    Art: 'https://i.discogs.com/example/image2.jpg',
    Embed: 'https://www.youtube.com/embed/videoseries?list=PLExampleList2',
    "Primary Genre": 'Hard Rock',
    "Secondary Genre": 'Blues Rock',
    Listen: {
      Spotify: 'https://open.spotify.com/album/example2',
      "YT Music": 'https://music.youtube.com/playlist?list=ExampleList2',
      Deezer: 'https://www.deezer.com/en/album/example2',
    },
    Tracklist: [
      { Number: '1', Title: 'Black Dog', Length: '4:54' },
      { Number: '2', Title: 'Rock and Roll', Length: '3:40' },
    ],
    Writeup: 'A definitive hard rock album, known for its raw energy and iconic tracks.',
    Tags: ['Classic Rock', '70s'],
  },
];

export const mockGenreAlbums: Album[] = [
  {
    Album: 'Kind of Blue',
    Artist: 'Miles Davis',
    Picked: 'Essential',
    Released: '1959',
    Day: '102',
    Art: 'https://i.discogs.com/example/image3.jpg',
    Embed: 'https://www.youtube.com/embed/videoseries?list=PLExampleList3',
    "Primary Genre": 'Jazz',
    "Secondary Genre": 'Modal Jazz',
    Listen: {
      Spotify: 'https://open.spotify.com/album/example3',
      "YT Music": 'https://music.youtube.com/playlist?list=ExampleList3',
      Deezer: 'https://www.deezer.com/en/album/example3',
    },
    Tracklist: [
      { Number: '1', Title: 'So What', Length: '9:22' },
      { Number: '2', Title: 'Freddie Freeloader', Length: '9:46' },
    ],
    Writeup: 'A landmark album in jazz history, celebrated for its improvisational brilliance.',
    Tags: ['Modal', 'Cool Jazz'],
  },
  mockRandomAlbum, // Reusing for variety
];

export const mockSearchAlbums: Album[] = [
  mockRandomAlbum, // For simplicity, let's say a search for "Moon" returns this
];
