import axios from 'axios';
import { AlbumsGeneratorClient } from '../src/client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockGroupData = {
  "name": "Test",
  "slug": "test",
  "paused": true,
  "members": [
    { "id": "5f4f251f5d1f74670a2c482d", "name": "6" },
    { "id": "5f8b57d27f98111d5afe4e31", "name": "grouptestone" },
    { "id": "5f8b57d87f98111d5afe4e32", "name": "grouptesttwo" },
    { "id": "6032b5e14abd4a1b84f28efc", "name": "6652jdjjd" },
    { "id": "6057c65ee118c567788d7f90", "name": "dfjfdjdf434343" },
    { "id": "61031ed0e276435e78c9438f", "name": "test03443j34j" },
    { "id": "61377b147403793f25547f00", "name": "ffcnnnnccd-gh" },
    { "id": "614cbe76766fcc03a00490e7", "name": "test223" },
    { "id": "61ba1749b8f71e721f40b3d6", "name": "dkdk02793" },
    { "id": "61c0fb6bdaa1df5bdfb4a87a", "name": "heheh2442" },
    { "id": "6234fb4e53bdca2791d80480", "name": "jatestarju" },
    { "id": "6248aeb0e969bf1ea44c98f6", "name": "cool290d" },
    { "id": "62b17022b4bf513bad399766", "name": "fdkfdjfdkj2" },
    { "id": "62b1704fb4bf513bad399890", "name": "fjdkfjfdfd" },
    { "id": "62b17060b4bf513bad3999c8", "name": "fdkjfdkfdj333" },
    { "id": "62b171c4ab1d215d8b149c76", "name": "dfhjfdjh222" },
    { "id": "62c78d3cc8f97a728892e799", "name": "test123cm" },
    { "id": "630486b50fad86251224e44c", "name": "oh-my-god-cool-4" },
    { "id": "63048e53b09d896f1f2a6a2f", "name": "fdjkfdjfdk22322" },
    { "id": "63092a1854f30e77d06914a3", "name": "haha-hej-nice" },
    { "id": "63111b13ff9d3f5e78644c40", "name": "jahaopp" },
    { "id": "635ada7817075d0a5519af92", "name": "testgrupp4" },
    { "id": "6587d27d13766a58f7904774", "name": "rot" },
    { "id": "66846dc8bbb9cc7139bd53db", "name": "this-is-my-test-account-called" },
    { "id": "675f273f8c01ce73bd546196", "name": "jhtrjh3331-3" },
    { "id": "67b9eaf7243fcf33d28561ea", "name": "jjjjjjjjj9999999" }
  ],
  "updateFrequency": "dailyWithWeekends",
  "filteredSelection": { "selections": [], "genres": [] },
  "currentAlbum": {
    "uuid": "5f34ee8bf0857e55ed2ebcb2", "artist": "Frank Ocean", "artistOrigin": "us",
    "images": [
      { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b273f11f1c4ad183b7fa625f8534", "width": 640 },
      { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e02f11f1c4ad183b7fa625f8534", "width": 300 },
      { "height": 64, "url": "https://i.scdn.co/image/ab67616d00004851f11f1c4ad183b7fa625f8534", "width": 64 }
    ],
    "genres": ["hip-hop", "soul", "pop"],
    "subGenres": ["alternative-r&b", "hip-hop", "lgbtq+-hip-hop", "neo-soul", "pop"],
    "name": "Channel Orange", "slug": "channel-orange", "releaseDate": "2012",
    "globalReviewsUrl": "https://1001albumsgenerator.com/albums/623Ef2ZEB3Njklix4PC0Rs/channel-orange",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Channel_Orange",
    "spotifyId": "623Ef2ZEB3Njklix4PC0Rs", "appleMusicId": "1440765580", "tidalId": 35181031,
    "amazonMusicId": "B07GJ9XQH9", "youtubeMusicId": "OLAK5uy_ltvAnceM9UdipqjI7-fJpcE5nZmvlZT9s",
    "qobuzId": "v0kr9kd1oh9cc", "deezerId": "9908666"
  },
  "latestAlbum": {
    "uuid": "5f34ee8bf0857e55ed5ebdeb", "artist": "Slipknot", "artistOrigin": "us",
    "images": [
      { "height": 640, "url": "https://i.scdn.co/image/a7049dcc2f66fe38a36fec7b51633f4512345927", "width": 640 },
      { "height": 300, "url": "https://i.scdn.co/image/71678257b3f85b915d932500ec897d3c0d0ab02d", "width": 300 },
      { "height": 64, "url": "https://i.scdn.co/image/e3d73856d862886a1409b45f0549532d8f6a4dbf", "width": 64 }
    ],
    "genres": ["metal"], "subGenres": ["alternative-metal", "nu-metal", "rap-metal"],
    "name": "All Hope Is Gone", "slug": "all-hope-is-gone", "releaseDate": "2008",
    "globalReviewsUrl": "https://1001albumsgenerator.com/albums/0hFWapnP7orzXCMwNU5DuA/all-hope-is-gone",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/All_Hope_is_Gone_(album)",
    "spotifyId": "0hFWapnP7orzXCMwNU5DuA", "appleMusicId": "926187664", "tidalId": 1885614,
    "amazonMusicId": "B001EZBC5W", "youtubeMusicId": "OLAK5uy_ksue0rcdafJYkwV03lscaFej7XEu_X-ZU",
    "qobuzId": "0016861793890", "deezerId": "127402"
  },
  "highestRatedAlbums": [
    {
      "uuid": "5f34ee8bf0857e55ed5ebebb", "artist": "Pixies", "artistOrigin": "us",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b2731a3903c1aa8122f7720f5d71", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e021a3903c1aa8122f7720f5d71", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/ab67616d000048511a3903c1aa8122f7720f5d71", "width": 64 }
      ],
      "genres": ["rock", "indie"], "subGenres": ["alternative-rock", "boston-rock", "modern-rock", "permanent-wave", "rock"],
      "name": "Surfer Rosa", "slug": "surfer-rosa", "releaseDate": "1988",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/2l7RPWC3E6eStJJLBsUeCI/surfer-rosa",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Surfer_Rosa",
      "spotifyId": "2l7RPWC3E6eStJJLBsUeCI", "appleMusicId": "1027465077", "tidalId": 49794922,
      "amazonMusicId": "B013HPFFYU", "youtubeMusicId": "OLAK5uy_m6ar2VP39LMXkXYWkizxXD23XR_RJBaos",
      "qobuzId": "0652637080308", "deezerId": "10966644",
      "votes": 1, "totalRating": 5, "averageRating": 5, "listenedAt": "2020-11-06T04:00:29.565Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5ebded", "artist": "Suicide", "artistOrigin": "us",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b2732754b1ed5801f3479178ca59", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e022754b1ed5801f3479178ca59", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/ab67616d000048512754b1ed5801f3479178ca59", "width": 64 }
      ],
      "genres": ["rock", "punk", "electronica", "post-punk"],
      "subGenres": ["alternative-rock", "art-rock", "experimental", "experimental-rock", "industrial", "new-wave", "no-wave", "synth-punk"],
      "name": "Suicide", "slug": "suicide", "releaseDate": "1977",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/0wKU4153oTf5Ne3Wbbcykd/suicide",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Suicide_(1977_album)",
      "spotifyId": "0wKU4153oTf5Ne3Wbbcykd", "appleMusicId": "1466863885", "tidalId": 111122819,
      "amazonMusicId": "B07SPW16YM", "youtubeMusicId": "OLAK5uy_nFO4Xk8qM0y1ZUwoyZnmWgW894G_uZ7qg",
      "qobuzId": "uuhhd5vp4fylc", "deezerId": "102958792",
      "votes": 1, "totalRating": 4, "averageRating": 4, "listenedAt": "2022-01-30T04:15:00.337Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5ebefe", "artist": "Oasis", "artistOrigin": "uk",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/49ff564a0d849ae0e0ce7197a7470a8a07978bc4", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/539889ac8b17001d002e8fb4b112821568edd520", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/565a350486fce298d47568ce279c338bb0e063c8", "width": 64 }
      ],
      "genres": ["rock", "britpop", "indie"],
      "subGenres": ["beatlesque", "britpop", "madchester", "permanent-wave", "rock"],
      "name": "Definitely Maybe", "slug": "definitely-maybe", "releaseDate": "1994",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/3F7qb5AiQdWxuMgSyQ9zyg/definitely-maybe",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Definitely_Maybe_(album)",
      "spotifyId": "3LzKUdUTdJb6P7xGN6SotC", "appleMusicId": "1517506402", "tidalId": 144505620,
      "amazonMusicId": "B089W518MK", "youtubeMusicId": "OLAK5uy_m--RCG58SjXLvgRiw0pASnMY6YjE8q3NU",
      "qobuzId": "mjcpkdobz22tc", "deezerId": "153450592",
      "votes": 1, "totalRating": 4, "averageRating": 4, "listenedAt": "2022-01-31T04:15:00.312Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5ebefa", "artist": "Ramones", "artistOrigin": "us",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b2730d7c0a6fdfce64964d26eda2", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e020d7c0a6fdfce64964d26eda2", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/ab67616d000048510d7c0a6fdfce64964d26eda2", "width": 64 }
      ],
      "genres": ["punk"],
      "subGenres": ["classic-rock", "early-us-punk", "permanent-wave", "punk", "rock", "skate-punk"],
      "name": "Ramones", "slug": "ramones", "releaseDate": "1976",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/3B3czVD9TsLfd5mfq4kqRS/ramones",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Ramones_(album)",
      "spotifyId": "3ToX9inehiXTv17hpaOyie", "appleMusicId": "847972873", "tidalId": 68697204,
      "amazonMusicId": "B07VXMLV4R", "youtubeMusicId": "OLAK5uy_lbp-A5S0NszcJ-lXiTsvfESsTKB6QVGEk",
      "qobuzId": "0603497903962", "deezerId": "13995252",
      "votes": 1, "totalRating": 3, "averageRating": 3, "listenedAt": "2020-12-29T04:00:20.606Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5ebf60", "artist": "Jane's Addiction", "artistOrigin": "us",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/8823160af512086291eaa83a37a666f052dbc18b", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/158b643557a379384a16279838b40ec1bd666efd", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/173aaf56b47f54800453804fc2d2be4e116b4cd5", "width": 64 }
      ],
      "genres": ["hard-rock"],
      "subGenres": ["alternative-metal", "alternative-rock", "blues-rock", "funk-metal", "funk-rock", "grunge", "hard-rock", "permanent-wave", "pop-rock", "rap-rock", "rock"],
      "name": "Nothing's Shocking", "slug": "nothings-shocking", "releaseDate": "1988",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/4DVBJPJyizvHfJQt5pYaCa/nothings-shocking",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Nothing%27s_Shocking",
      "spotifyId": "4DVBJPJyizvHfJQt5pYaCa", "appleMusicId": "1018518208", "tidalId": 5392091,
      "amazonMusicId": "B004H1EAJA", "youtubeMusicId": "OLAK5uy_kzeFzqprHkQM8-VhF8ZfdnXbXa90yoyvM",
      "qobuzId": "0603497944408", "deezerId": "754229",
      "votes": 1, "totalRating": 3, "averageRating": 3, "listenedAt": "2021-04-07T03:00:01.184Z"
    }
  ],
  "lowestRatedAlbums": [
    {
      "uuid": "5f34ee8bf0857e55ed5ec005", "artist": "The Modern Lovers", "artistOrigin": "us",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b273b456b52a87902c83da4cc347", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e02b456b52a87902c83da4cc347", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/ab67616d00004851b456b52a87902c83da4cc347", "width": 64 }
      ],
      "genres": ["rock", "psychedelic-rock", "punk"],
      "subGenres": ["alternative-rock", "anti-folk", "art-rock", "boston-rock", "indie-rock", "psychedelic-rock", "punk"],
      "name": "The Modern Lovers", "slug": "the-modern-lovers", "releaseDate": "1976",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/5BPCP7WSGBG4br2o4WRmd8/the-modern-lovers",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/The_Modern_Lovers_(album)",
      "spotifyId": "5BPCP7WSGBG4br2o4WRmd8", "appleMusicId": "1143260720", "tidalId": 63889055,
      "amazonMusicId": "B000RGD2PC", "youtubeMusicId": "OLAK5uy_mqrHTLbuxvsVJ_ATyiUvO-xF9A5yU51rg",
      "qobuzId": "5414939481475", "deezerId": "13944004",
      "votes": 1, "totalRating": 1, "averageRating": 1, "listenedAt": "2022-02-12T04:15:00.440Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5eadd4", "artist": "Adele", "artistOrigin": "uk",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b273fb7eedd9877b0c60597ef3e5", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e02fb7eedd9877b0c60597ef3e5", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/ab67616d00004851fb7eedd9877b0c60597ef3e5", "width": 64 }
      ],
      "genres": ["pop"], "subGenres": ["british-soul", "pop", "pop-soul", "uk-pop"],
      "name": "21", "slug": "21", "releaseDate": "2011",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/5duyQokC4FMcWPYTV9Gpf9/21",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/21_(Adele_album)",
      "spotifyId": "5duyQokC4FMcWPYTV9Gpf9", "appleMusicId": "1544491232", "tidalId": 165813921,
      "amazonMusicId": "B08QDQMVJ1", "youtubeMusicId": "OLAK5uy_lT9WWb7WZ6MOzwNkItv6Azu835h17W_L0",
      "qobuzId": "0634904052065", "deezerId": "746059",
      "votes": 1, "totalRating": 3, "averageRating": 3, "listenedAt": "2022-11-07T04:15:00.437Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5ebdbc", "artist": "Kraftwerk", "artistOrigin": "other",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/961a19794fcb452928010195273079dfbdcb5217", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/8c7dd60a81f387d0e3a3d80f2d64b23a2908d8dc", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/709115a56441fc5e0d1f05385703638a5be0d753", "width": 64 }
      ],
      "genres": ["electronica"],
      "subGenres": ["dusseldorf-electronic", "early-synthpop", "electro", "krautrock", "new-romantic", "new-wave", "proto-techno", "synthpop"],
      "name": "Trans Europe Express", "slug": "trans-europe-express", "releaseDate": "1977",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/0HHRIVjvBcnTepfeRVgS2f/trans-europe-express",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Trans-Europe_Express_(album)",
      "spotifyId": "0HHRIVjvBcnTepfeRVgS2f", "appleMusicId": "726144557", "tidalId": 3131362,
      "amazonMusicId": "B002PXFMUI", "youtubeMusicId": "OLAK5uy_no9jBxH2IPgpFiJZHzrM2Zl6j4MtG8CpU",
      "qobuzId": "5099996602058",
      "votes": 1, "totalRating": 3, "averageRating": 3, "listenedAt": "2022-02-01T04:15:00.327Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5ebf60", "artist": "Jane's Addiction", "artistOrigin": "us",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/8823160af512086291eaa83a37a666f052dbc18b", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/158b643557a379384a16279838b40ec1bd666efd", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/173aaf56b47f54800453804fc2d2be4e116b4cd5", "width": 64 }
      ],
      "genres": ["hard-rock"],
      "subGenres": ["alternative-metal", "alternative-rock", "blues-rock", "funk-metal", "funk-rock", "grunge", "hard-rock", "permanent-wave", "pop-rock", "rap-rock", "rock"],
      "name": "Nothing's Shocking", "slug": "nothings-shocking", "releaseDate": "1988",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/4DVBJPJyizvHfJQt5pYaCa/nothings-shocking",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Nothing%27s_Shocking",
      "spotifyId": "4DVBJPJyizvHfJQt5pYaCa", "appleMusicId": "1018518208", "tidalId": 5392091,
      "amazonMusicId": "B004H1EAJA", "youtubeMusicId": "OLAK5uy_kzeFzqprHkQM8-VhF8ZfdnXbXa90yoyvM",
      "qobuzId": "0603497944408", "deezerId": "754229",
      "votes": 1, "totalRating": 3, "averageRating": 3, "listenedAt": "2021-04-07T03:00:01.184Z"
    },
    {
      "uuid": "5f34ee8bf0857e55ed5ebefa", "artist": "Ramones", "artistOrigin": "us",
      "images": [
        { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b2730d7c0a6fdfce64964d26eda2", "width": 640 },
        { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e020d7c0a6fdfce64964d26eda2", "width": 300 },
        { "height": 64, "url": "https://i.scdn.co/image/ab67616d000048510d7c0a6fdfce64964d26eda2", "width": 64 }
      ],
      "genres": ["punk"],
      "subGenres": ["classic-rock", "early-us-punk", "permanent-wave", "punk", "rock", "skate-punk"],
      "name": "Ramones", "slug": "ramones", "releaseDate": "1976",
      "globalReviewsUrl": "https://1001albumsgenerator.com/albums/3B3czVD9TsLfd5mfq4kqRS/ramones",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Ramones_(album)",
      "spotifyId": "3ToX9inehiXTv17hpaOyie", "appleMusicId": "847972873", "tidalId": 68697204,
      "amazonMusicId": "B07VXMLV4R", "youtubeMusicId": "OLAK5uy_lbp-A5S0NszcJ-lXiTsvfESsTKB6QVGEk",
      "qobuzId": "0603497903962", "deezerId": "13995252",
      "votes": 1, "totalRating": 3, "averageRating": 3, "listenedAt": "2020-12-29T04:00:20.606Z"
    }
  ],
  "favoriteGenres": [
    { "numberOfAlbums": 2, "totalRating": 9, "votes": 2, "genre": "indie", "rating": 4.5, "numberOfVotes": 2 },
    { "totalRating": 4, "votes": 1, "numberOfAlbums": 1, "genre": "post-punk", "rating": 4, "numberOfVotes": 1 },
    { "totalRating": 4, "votes": 1, "numberOfAlbums": 1, "genre": "britpop", "rating": 4, "numberOfVotes": 1 }
  ],
  "worstGenres": [
    { "totalRating": 1, "votes": 1, "numberOfAlbums": 1, "genre": "psychedelic-rock", "rating": 1, "numberOfVotes": 1 },
    { "numberOfAlbums": 3, "totalRating": 8, "votes": 3, "genre": "punk", "rating": 2.67, "numberOfVotes": 3 },
    { "totalRating": 3, "votes": 1, "numberOfAlbums": 1, "genre": "pop", "rating": 3, "numberOfVotes": 1 }
  ],
  "ratingByDecade": [
    { "totalRating": 8, "votes": 2, "numberOfAlbums": 2, "decade": "1980", "rating": 4 },
    { "totalRating": 4, "votes": 1, "numberOfAlbums": 1, "decade": "1990", "rating": 4 },
    { "totalRating": 3, "votes": 1, "numberOfAlbums": 1, "decade": "2010", "rating": 3 },
    { "totalRating": 11, "votes": 4, "numberOfAlbums": 4, "decade": "1970", "rating": 2.75 }
  ],
  "numberOfGeneratedAlbums": 312,
  "totalVotes": 8,
  "averageRating": 3.25
};


describe('AlbumsGeneratorClient', () => {
  let client: AlbumsGeneratorClient;
  let mockAxiosInstance: { get: jest.Mock };

  beforeEach(() => {
    // Reset mocks before each test
    mockAxiosInstance = {
      get: jest.fn(),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedAxios.create.mockReturnValue(mockAxiosInstance as any); // Type assertion
    client = new AlbumsGeneratorClient();
  });

  describe('getGroup', () => {
    it('should fetch group data successfully', async () => {
      mockAxiosInstance.get.mockResolvedValue({ data: mockGroupData });

      const groupSlug = 'test';
      const result = await client.getGroup(groupSlug);

      expect(result).toEqual(mockGroupData);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(`/groups/${groupSlug}`);
    });

    it('should throw an error when API call fails', async () => {
      const groupSlug = 'test';
      const errorMessage = 'Network Error';
      mockAxiosInstance.get.mockRejectedValue(new Error(errorMessage));

      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      await expect(client.getGroup(groupSlug)).rejects.toThrow(errorMessage);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(`/groups/${groupSlug}`);
      consoleErrorSpy.mockRestore();
    });

    it('should use the default baseURL if none is provided', () => {
      // Client is already instantiated in beforeEach with default baseURL
      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL: 'https://1001albumsgenerator.com/api/v1',
      });
    });

    it('should use the provided baseURL', () => {
      const customBaseURL = 'http://custom.api.com';
      new AlbumsGeneratorClient(customBaseURL); // Instantiate new client with custom baseURL
      // Check the latest call to mockedAxios.create
      expect(mockedAxios.create).toHaveBeenLastCalledWith({
        baseURL: customBaseURL,
      });
    });
  });

  describe('getAlbumInGroup', () => {
    const mockAlbumInGroupData = {
      "albumName": "Definitely Maybe",
      "albumArtist": "Oasis",
      "reviews": [
        { "projectName": "6", "rating": 4, "review": null },
        { "projectName": "grouptestone", "rating": null, "review": null },
        { "projectName": "grouptesttwo", "rating": null, "review": null },
        { "projectName": "6652jdjjd", "rating": null, "review": null },
        { "projectName": "dfjfdjdf434343", "rating": null, "review": null },
        { "projectName": "test03443j34j", "rating": null, "review": null },
        { "projectName": "ffcnnnnccd-gh", "rating": null, "review": null },
        { "projectName": "test223", "rating": null, "review": null },
        { "projectName": "dkdk02793", "rating": null, "review": null },
        { "projectName": "heheh2442", "rating": null, "review": null },
        { "projectName": "jatestarju", "rating": null, "review": null },
        { "projectName": "cool290d", "rating": null, "review": null },
        { "projectName": "fdkfdjfdkj2", "rating": null, "review": null },
        { "projectName": "fjdkfjfdfd", "rating": null, "review": null },
        { "projectName": "dfhjfdjh222", "rating": null, "review": null },
        { "projectName": "oh-my-god-cool-4", "rating": null, "review": null },
        { "projectName": "fdjkfdjfdk22322", "rating": null, "review": null },
        { "projectName": "haha-hej-nice", "rating": null, "review": null },
        { "projectName": "jahaopp", "rating": null, "review": null },
        { "projectName": "testgrupp4", "rating": null, "review": null },
        { "projectName": "rot", "rating": null, "review": null },
        { "projectName": "this-is-my-test-account-called", "rating": null, "review": null },
        { "projectName": "jhtrjh3331-3", "rating": null, "review": null },
        { "projectName": "jjjjjjjjj9999999", "rating": null, "review": null }
      ]
    };
    const groupSlug = 'test';
    const albumUuid = '5f34ee8bf0857e55ed5ebefe';

    it('should fetch album data within a group successfully', async () => {
      mockAxiosInstance.get.mockResolvedValue({ data: mockAlbumInGroupData });

      const result = await client.getAlbumInGroup(groupSlug, albumUuid);

      expect(result).toEqual(mockAlbumInGroupData);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(`/groups/${groupSlug}/albums/${albumUuid}`);
    });

    it('should throw an error when API call for album in group fails', async () => {
      const errorMessage = 'API Error';
      mockAxiosInstance.get.mockRejectedValue(new Error(errorMessage));

      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      await expect(client.getAlbumInGroup(groupSlug, albumUuid)).rejects.toThrow(errorMessage);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(`/groups/${groupSlug}/albums/${albumUuid}`);
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getProject', () => {
    const mockProjectData = {
      "shareableUrl": "https://1001albumsgenerator.com/shares/5f31d0bf1753d47099d73b36",
      "currentAlbum": {
        "uuid": "5f34ee8bf0857e55ed5eb414",
        "artist": "Big Black",
        "artistOrigin": "us",
        "images": [
          { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b273521b7d2c73ef8ec3530216a5", "width": 640 },
          { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e02521b7d2c73ef8ec3530216a5", "width": 300 },
          { "height": 64, "url": "https://i.scdn.co/image/ab67616d00004851521b7d2c73ef8ec3530216a5", "width": 64 }
        ],
        "genres": ["punk", "rock"],
        "subGenres": ["alternative-rock", "chicago-hardcore", "chicago-punk", "experimental", "experimental-rock", "industrial", "industrial-rock", "noise-punk", "noise-rock", "post-hardcore", "post-punk", "punk"],
        "name": "Atomizer",
        "slug": "atomizer",
        "releaseDate": "1986",
        "globalReviewsUrl": "https://1001albumsgenerator.com/albums/329GMS2ylgBXJUXx26vyae/atomizer",
        "wikipediaUrl": "https://en.wikipedia.org/wiki/Atomizer_(album)",
        "spotifyId": "329GMS2ylgBXJUXx26vyae",
        "appleMusicId": "1120138003",
        "tidalId": 61690641,
        "amazonMusicId": "B01GIQ46R2",
        "youtubeMusicId": "OLAK5uy_m2fC1tFg188qxeJB5WZc-6AkT5Q-7QFxg",
        "qobuzId": "0036172079384",
        "deezerId": "13256535"
      },
      "currentAlbumNotes": "",
      "updateFrequency": "dailyWithWeekends",
      "paused": true,
      "history": [
        {
          "album": {
            "uuid": "5f34ee8bf0857e55ed5ec079",
            "artist": "Stan Getz",
            "artistOrigin": "us",
            "images": [
              { "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b273e259545b94392d48378ecb3c", "width": 640 },
              { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e02e259545b94392d48378ecb3c", "width": 300 },
              { "height": 64, "url": "https://i.scdn.co/image/ab67616d00004851e259545b94392d48378ecb3c", "width": 64 }
            ],
            "genres": ["jazz", "samba"],
            "subGenres": ["adult-standards", "bossa-nova", "cool-jazz", "jazz", "jazz-saxophone", "latin-jazz", "samba-jazz", "vocal-jazz"],
            "name": "Jazz Samba",
            "slug": "jazz-samba",
            "releaseDate": "1962",
            "globalReviewsUrl": "https://1001albumsgenerator.com/albums/5Lyz7ZD1UaPq6WoEqTOqom/jazz-samba",
            "wikipediaUrl": "https://en.wikipedia.org/wiki/Jazz_Samba",
            "spotifyId": "5Lyz7ZD1UaPq6WoEqTOqom",
            "appleMusicId": "1469580375",
            "tidalId": 93057706,
            "amazonMusicId": "B07L1PTPQ9",
            "youtubeMusicId": "OLAK5uy_k0Gogmr82Tcl3k8JSSuvyDmUycdU9845A",
            "qobuzId": "xw3ecebytz0xa",
            "deezerId": "7040209"
          },
          "rating": 1,
          "review": "",
          "revealedAlbum": false,
          "generatedAt": "2020-08-10T01:00:00.024Z",
          "globalRating": 3.56
        }
        // Assuming the full history array would be very long and is represented by this single item for the test.
      ],
      "name": "test"
    };
    const projectIdentifier = 'test';

    it('should fetch project data successfully', async () => {
      mockAxiosInstance.get.mockResolvedValue({ data: mockProjectData });

      const result = await client.getProject(projectIdentifier);

      expect(result).toEqual(mockProjectData);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(`/projects/${projectIdentifier}`);
    });

    it('should throw an error when API call for project fails', async () => {
      const errorMessage = 'API Error';
      mockAxiosInstance.get.mockRejectedValue(new Error(errorMessage));

      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      await expect(client.getProject(projectIdentifier)).rejects.toThrow(errorMessage);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(`/projects/${projectIdentifier}`);
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getAlbumStats', () => {
    const mockAlbumStatsData = {
      "albums": [
        {
          "votes": 19965,
          "averageRating": 4.46,
          "genres": [
            "rock",
            "psychedelic-rock",
            "pop"
          ],
          "name": "Abbey Road",
          "artist": "Beatles",
          "controversialScore": 0.816410693434906
        },
        {
          "votes": 20189,
          "averageRating": 4.45,
          "genres": [
            "rock"
          ],
          "name": "Rumours",
          "artist": "Fleetwood Mac",
          "controversialScore": 0.800446507519081
        }
      ]
    };

    it('should fetch album stats successfully', async () => {
      mockAxiosInstance.get.mockResolvedValue({ data: mockAlbumStatsData });

      const result = await client.getAlbumStats();

      expect(result).toEqual(mockAlbumStatsData);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/albums/stats');
    });

    it('should throw an error when API call for album stats fails', async () => {
      const errorMessage = 'API Error';
      mockAxiosInstance.get.mockRejectedValue(new Error(errorMessage));

      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      await expect(client.getAlbumStats()).rejects.toThrow(errorMessage);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/albums/stats');
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getUserAlbumStats', () => {
    const mockUserAlbumStatsData = {
      "albums": [
        {
          "votes": 196,
          "averageRating": 4.04,
          "genres": [
            "rock",
            "indie"
          ],
          "name": "Weezer",
          "artist": "Weezer",
          "controversialScore": 0.983728510611838
        },
        {
          "votes": 96,
          "averageRating": 3.94,
          "genres": [
            "electronica"
          ],
          "name": "Discovery",
          "artist": "Daft Punk",
          "controversialScore": 1.02887985207215
        }
      ]
    };

    it('should fetch user album stats successfully', async () => {
      mockAxiosInstance.get.mockResolvedValue({ data: mockUserAlbumStatsData });

      const result = await client.getUserAlbumStats();

      expect(result).toEqual(mockUserAlbumStatsData);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/user-albums/stats');
    });

    it('should throw an error when API call for user album stats fails', async () => {
      const errorMessage = 'API Error';
      mockAxiosInstance.get.mockRejectedValue(new Error(errorMessage));

      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      await expect(client.getUserAlbumStats()).rejects.toThrow(errorMessage);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/user-albums/stats');
      consoleErrorSpy.mockRestore();
    });
  });

  describe('Rate Limiting', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      // Ensure each test starts with a fresh client and mockAxiosInstance
      mockAxiosInstance = { get: jest.fn().mockResolvedValue({ data: {} }) };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockedAxios.create.mockReturnValue(mockAxiosInstance as any);
      client = new AlbumsGeneratorClient(); // Re-initialize client to reset its internal state, including requestTimestamps
    });

    afterEach(() => {
      jest.useRealTimers();
      jest.clearAllMocks(); // Clear mocks including setTimeout
    });

    it('should allow requests if under the rate limit, respecting 11s rule', async () => {
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

      // Call 1: Effective T=0. No delay.
      await client.getAlbumStats();
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).not.toHaveBeenCalled();

      // Call 2: Attempted T=0 (immediately after Call 1 finishes).
      // 11s rule: wait 11s. 3/min rule: no wait. Final wait: 11s.
      // Effective T for Call 2 = 0 + 11s = 11s.
      const promise2 = client.getAlbumStats();
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 11000);
      jest.advanceTimersByTime(11000);
      await promise2;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(2);
      
      // Call 3: Attempted T=11s (immediately after Call 2 finishes).
      // 11s rule: wait 11s. 3/min rule: no wait. Final wait: 11s.
      // Effective T for Call 3 = 11s + 11s = 22s.
      const promise3 = client.getAlbumStats();
      expect(setTimeoutSpy).toHaveBeenCalledTimes(2); // Total calls to setTimeout
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 11000);
      jest.advanceTimersByTime(11000);
      await promise3;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);

      setTimeoutSpy.mockRestore(); // Restore spy for this test
    });

    it('should delay requests if over the rate limit and then proceed, respecting all rules', async () => {
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

      // Call 1: Effective T=0. No delay.
      await client.getAlbumStats(); // TS: [0]
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).not.toHaveBeenCalled();

      // Advance base time by 1s. Call 2 attempted at T=1s.
      jest.advanceTimersByTime(1000);
      // 11s rule: lastRT=0, sinceLast=1s => wait 10s. 3/min rule: no wait. Final: 10s.
      // Effective T for Call 2 = 1s + 10s = 11s.
      const promise2 = client.getAlbumStats(); // TS: [0, 11k]
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 10000);
      jest.advanceTimersByTime(10000);
      await promise2;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(2);
      
      // Advance base time. Prev call ended at T=11s. Advance by 1s. Call 3 attempted at T=12s.
      jest.advanceTimersByTime(1000);
      // 11s rule: lastRT=11k, sinceLast=1s (12k-11k) => wait 10s. 3/min rule: no wait. Final: 10s.
      // Effective T for Call 3 = 12s + 10s = 22s.
      const promise3 = client.getAlbumStats(); // TS: [0, 11k, 22k]
      expect(setTimeoutSpy).toHaveBeenCalledTimes(2);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 10000);
      jest.advanceTimersByTime(10000);
      await promise3;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);

      // Call 4: Attempted T=22s (immediately after Call 3 finishes).
      // 11s rule: lastRT=22k, sinceLast=0 => wait 11s.
      // 3/min rule: TS=[0,11k,22k]. Oldest=0. Passed=22k. Wait = 60k-22k = 38k.
      // Final wait = max(11k, 38k) = 38k.
      const promise4 = client.getAlbumStats();
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3); // Not yet called
      expect(setTimeoutSpy).toHaveBeenCalledTimes(3);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 38000);

      // Advance time by the required 38s for Call 4 to proceed.
      // Original test advanced by 58010ms from T=2s base, which is fine as it covers 38s.
      jest.advanceTimersByTime(38000);
      await promise4;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(4);
      setTimeoutSpy.mockRestore(); // Restore spy for this test
    });

    it('should correctly manage timestamps and allow subsequent requests after window passes under combined rules', async () => {
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
      let expectedSetTimeoutCallsWithPositiveDelay = 0;

      // Call 1: Attempted T=0. Effective T=0.
      // Expect no delay.
      await client.getAlbumStats(); // Axios Call 1
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).toHaveBeenCalledTimes(expectedSetTimeoutCallsWithPositiveDelay);

      // Advance base time by 10s. Call 2 Attempted T=10s.
      jest.advanceTimersByTime(10 * 1000); // Current base time for Date.now() = 10s
      // Expected delay: 11s rule (11000-10000=1000ms). 3/min rule (no wait). Final: 1000ms.
      // Effective T for Call 2 = 10s + 1s = 11s.
      const promise2 = client.getAlbumStats(); // Axios Call 2
      expectedSetTimeoutCallsWithPositiveDelay++;
      expect(setTimeoutSpy).toHaveBeenCalledTimes(expectedSetTimeoutCallsWithPositiveDelay);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      jest.advanceTimersByTime(1000); // Advance by wait time
      await promise2;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(2);

      // Advance base time. Prev call ended at T=11s. Advance by 10s. Call 3 Attempted T=21s.
      jest.advanceTimersByTime(10 * 1000); // Current base time for Date.now() = 11s + 10s = 21s
      // Expected delay: 11s rule (11000-10000=1000ms). 3/min rule (no wait). Final: 1000ms.
      // Effective T for Call 3 = 21s + 1s = 22s.
      const promise3 = client.getAlbumStats(); // Axios Call 3
      expectedSetTimeoutCallsWithPositiveDelay++;
      expect(setTimeoutSpy).toHaveBeenCalledTimes(expectedSetTimeoutCallsWithPositiveDelay);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      jest.advanceTimersByTime(1000); // Advance by wait time
      await promise3;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);

      // Advance base time. Prev call ended at T=22s. Advance by 10s. Call 4 Attempted T=32s.
      jest.advanceTimersByTime(10 * 1000); // Current base time for Date.now() = 22s + 10s = 32s
      // Expected delay: 11s rule (11000-10000=1000ms). 3/min rule (TS: [0,11,22] at 32s -> oldest=0, passed=32s => wait 28000ms). Final: 28000ms.
      // Effective T for Call 4 = 32s + 28s = 60s.
      const promise4 = client.getAlbumStats(); // Axios Call 4
      expectedSetTimeoutCallsWithPositiveDelay++;
      expect(setTimeoutSpy).toHaveBeenCalledTimes(expectedSetTimeoutCallsWithPositiveDelay);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 28000);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3); // Not yet called
      jest.advanceTimersByTime(28000); // Advance by wait time.
      await promise4;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(4);

      // Advance base time. Prev call ended at T=60s. Advance by 30.01s. Call 5 Attempted T=90.01s.
      jest.advanceTimersByTime(30 * 1000 + 10); // Current base time for Date.now() = 60s + 30.01s = 90.01s
      // Expected delay: 11s rule (sinceLast=30.01s > 11s -> no wait). 3/min rule (relevantTS for 90.01s is [60s] -> no wait). Final: 0ms.
      // Effective T for Call 5 = 90.01s.
      await client.getAlbumStats(); // Axios Call 5
      expect(setTimeoutSpy).toHaveBeenCalledTimes(expectedSetTimeoutCallsWithPositiveDelay); // No new positive delay call
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(5);

      // Advance base time. Prev call ended at T=90.01s. Advance by 10s. Call 6 Attempted T=100.01s.
      jest.advanceTimersByTime(10 * 1000); // Current base time for Date.now() = 90.01s + 10s = 100.01s
      // Expected delay: 11s rule (sinceLast=10s -> wait 1s). 3/min rule (relevantTS for 100.01s is [60s, 90.01s] -> no wait). Final: 1000ms.
      // Effective T for Call 6 = 100.01s + 1s = 101.01s.
      const promise6 = client.getAlbumStats(); // Axios Call 6
      expectedSetTimeoutCallsWithPositiveDelay++;
      expect(setTimeoutSpy).toHaveBeenCalledTimes(expectedSetTimeoutCallsWithPositiveDelay);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      jest.advanceTimersByTime(1000); // Advance by wait time
      await promise6;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(6);

      // Advance base time. Prev call ended at T=101.01s. Advance by 10s. Call 7 Attempted T=111.01s.
      jest.advanceTimersByTime(10 * 1000); // Current base time for Date.now() = 101.01s + 10s = 111.01s
      // Expected delay: 11s rule (sinceLast=10s -> wait 1s).
      // 3/min rule (TS for 111.01s is [60s, 90.01s, 101.01s]. Oldest=60s. Passed=51.01s. Wait = 60s-51.01s = 8990ms).
      // Final wait = max(1000ms, 8990ms) = 8990ms.
      // Effective T for Call 7 = 111.01s + 8.99s = 120s.
      const promise7 = client.getAlbumStats(); // Axios Call 7
      expectedSetTimeoutCallsWithPositiveDelay++;
      expect(setTimeoutSpy).toHaveBeenCalledTimes(expectedSetTimeoutCallsWithPositiveDelay);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 8990);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(6); // Not yet called
      jest.advanceTimersByTime(8990); // Advance by wait time.
      await promise7;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(7);

      setTimeoutSpy.mockRestore(); // Restore spy for this test
    });
  });

  describe('Rate Limiting - 11-second rule', () => {
    let setTimeoutSpy: jest.SpyInstance;

    beforeEach(() => {
      jest.useFakeTimers();
      // Ensure each test starts with a fresh client and mockAxiosInstance
      mockAxiosInstance = { get: jest.fn().mockResolvedValue({ data: {} }) };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockedAxios.create.mockReturnValue(mockAxiosInstance as any);
      client = new AlbumsGeneratorClient();
      setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    });

    afterEach(() => {
      setTimeoutSpy.mockRestore();
      jest.clearAllMocks(); // Clear other mocks like axios.create, axiosInstance.get
      jest.useRealTimers();
    });

    it('should delay the second request if made less than 11 seconds after the first', async () => {
      // Call 1
      await client.getAlbumStats(); // Effective T = 0
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).not.toHaveBeenCalled(); // Corrected: First call should not have positive delay

      // Advance time by 5 seconds
      jest.advanceTimersByTime(5 * 1000); // Current time T = 5s

      // Call 2 (attempted at T=5s)
      const promise2 = client.getAlbumStats();
      
      // setTimeout should be called to wait for the remaining 11 - 5 = 6 seconds
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 6 * 1000);
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1); // Still 1, as 2nd call is waiting

      // Advance time by the remaining 6 seconds
      jest.advanceTimersByTime(6 * 1000); // Current time T = 5 + 6 = 11s
      await promise2; // Now the second call should proceed

      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(2);
    });

    it('should not delay the second request if made more than 11 seconds after the first (and not hitting other limits)', async () => {
      // Call 1
      await client.getAlbumStats(); // Effective T = 0
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).not.toHaveBeenCalled(); // Corrected: First call should not have positive delay

      // Advance time by 12 seconds (more than MIN_REQUEST_INTERVAL_MS)
      jest.advanceTimersByTime(12 * 1000); // Current time T = 12s

      // Call 2 (attempted at T=12s)
      await client.getAlbumStats();

      // setTimeout should not have been called for a delay related to the 11s rule
      // It might be called with 0ms if finalWaitTime is 0, but not with a positive value for this rule.
      // Let's check it wasn't called with a value > 0.
      // If finalWaitTime > 0, setTimeout is called. Otherwise, it's not.
      // For this test, no delay is expected from any rule.
      expect(setTimeoutSpy).not.toHaveBeenCalled();
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(2); // Second call should proceed immediately
    });

    it('should prioritize the 3/minute rule when it is stricter than the 11-second rule', async () => {
      // Call 1: T=0s
      await client.getAlbumStats(); // Effective T=0. Timestamps: [0]
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).not.toHaveBeenCalled();

      // Call 2: Attempted T=12s (advancing by 12s)
      jest.advanceTimersByTime(12 * 1000); // Current T = 12s
      await client.getAlbumStats(); // 11s rule: 12s > 11s, no wait. 3/min rule: 2nd req, no wait. Effective T=12s. Timestamps: [0, 12000]
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(2);
      expect(setTimeoutSpy).not.toHaveBeenCalled(); // No new calls to setTimeout

      // Call 3: Attempted T=24s (advancing by another 12s)
      jest.advanceTimersByTime(12 * 1000); // Current T = 24s
      await client.getAlbumStats(); // 11s rule: 12s > 11s, no wait. 3/min rule: 3rd req, no wait. Effective T=24s. Timestamps: [0, 12000, 24000]
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);
      expect(setTimeoutSpy).not.toHaveBeenCalled(); // No new calls to setTimeout

      // Call 4: Attempted T=24s (immediately after 3rd call finishes)
      // Current time for handleRateLimit is 24000ms.
      // 11s rule: lastRequestTime=24000. timeSinceLastRequest=0. waitTimePerRequestRule = 11000ms.
      // 3/min rule: relevantTimestamps=[0, 12000, 24000]. Oldest=0. timePassedSinceOldest=24000.
      //             waitTimePerMinuteRule = 60000 - 24000 = 36000ms.
      // finalWaitTime = Math.max(11000, 36000) = 36000ms.
      const promise4 = client.getAlbumStats();
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3); // Not yet called
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1); // First call to setTimeout in this test
      expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 36000);

      jest.advanceTimersByTime(36000); // Advance by 36s. Current T = 24s + 36s = 60s
      await promise4; // Call 4 proceeds
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(4);
       // Timestamps after call 4 (effective T=60s) and pruning: [12000, 24000, 60000]
    });
  });
});
