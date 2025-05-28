import axios from 'axios';
import { ApiClient } from '../src/client';

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


describe('ApiClient', () => {
  let client: ApiClient;
  let mockAxiosInstance: { get: jest.Mock };

  beforeEach(() => {
    // Reset mocks before each test
    mockAxiosInstance = {
      get: jest.fn(),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedAxios.create.mockReturnValue(mockAxiosInstance as any); // Type assertion
    client = new ApiClient();
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
      new ApiClient(customBaseURL); // Instantiate new client with custom baseURL
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
      client = new ApiClient(); // Re-initialize client to reset its internal state, including requestTimestamps
    });

    afterEach(() => {
      jest.useRealTimers();
      jest.clearAllMocks(); // Clear mocks including setTimeout
    });

    it('should allow requests if under the rate limit', async () => {
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

      // Make 2 requests (limit is 3 per minute)
      await client.getAlbumStats();
      await client.getAlbumStats();

      expect(setTimeoutSpy).not.toHaveBeenCalledWith(expect.any(Function), expect.anything()); // Or check for calls with >0ms
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(2);
      
      // Making the 3rd call
      await client.getAlbumStats();
      expect(setTimeoutSpy).not.toHaveBeenCalledWith(expect.any(Function), expect.anything());
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);

      setTimeoutSpy.mockRestore();
    });

    it('should delay requests if over the rate limit and then proceed', async () => {
      // Make 3 requests to fill the limit
      await client.getAlbumStats(); // T0
      jest.advanceTimersByTime(1000); // T0 + 1s
      await client.getAlbumStats(); // T0 + 1s
      jest.advanceTimersByTime(1000); // T0 + 2s
      await client.getAlbumStats(); // T0 + 2s
      
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);

      // The 4th request should be delayed
      const fourthCallPromise = client.getAlbumStats();

      // Should not have been called yet as it's waiting
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);

      // Advance time so that the first request (T0) is now older than 1 minute
      // The first request was at initialTime. We need to advance past initialTime + 60000.
      // Current time is initialTime + 2000ms.
      // So advance by (60000 - 2000) + a small buffer (e.g., 10ms)
      jest.advanceTimersByTime((60 * 1000 - 2000) + 10); 
      
      await fourthCallPromise; // Now the promise should resolve
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(4);
    });

    it('should correctly manage timestamps and allow subsequent requests after window passes', async () => {
      // Call 1, 2, 3
      await client.getAlbumStats(); // Timestamp 1: 0s
      jest.advanceTimersByTime(10 * 1000); // Advance by 10s
      await client.getAlbumStats(); // Timestamp 2: 10s
      jest.advanceTimersByTime(10 * 1000); // Advance by 10s (total 20s)
      await client.getAlbumStats(); // Timestamp 3: 20s
      
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);

      // Call 4 (at 30s) - should be delayed, waiting for Timestamp 1 (at 0s) to expire
      jest.advanceTimersByTime(10 * 1000); // Advance by 10s (total 30s)
      const call4Promise = client.getAlbumStats();
      // Check that it hasn't executed yet
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3); 

      // Advance time to 60.01s. Timestamp 1 (0s) expires. Call 4 proceeds.
      jest.advanceTimersByTime(30 * 1000 + 10); // Advance by 30.01s (total 60.01s)
      await call4Promise;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(4); // Call 4 executed

      // At this point (60.01s), active timestamps are: 10s, 20s, 60.01s (from call 4)
      // Call 5 (at 60.01s) - should proceed immediately as we have 3 requests in last minute
      // Wait, no, the previous logic for Call 4 was based on it being made at T=30s.
      // Let's re-evaluate.
      // T=0: Call 1. Timestamps: [0]
      // T=10: Call 2. Timestamps: [0, 10]
      // T=20: Call 3. Timestamps: [0, 10, 20]
      // T=30: Call 4 (attempted). Timestamps: [0, 10, 20]. Length is 3. Oldest is 0.
      //         Wait time = (60000 - (30000 - 0)) = 30000ms.
      //         So call 4 will execute at T = 30000 + 30000 = 60000ms.
      //         After call 4: Timestamps [10, 20, 60] (assuming 0 gets filtered out when 60 is added)

      // Call 5 (attempted at T=60.01s, immediately after call 4 completes)
      // Timestamps before call 5: [10, 20, 60.01(from call 4)]. Length 3. Oldest is 10.
      // Wait time = (60000 - (60010 - 10000)) = 60000 - 50010 = 9990ms.
      // So call 5 will execute at T = 60010 + 9990 = 70000ms.
      const call5Promise = client.getAlbumStats();
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(4); // Still 4, call 5 is waiting

      jest.advanceTimersByTime(10 * 1000); // Advance to 70.01s
      await call5Promise;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(5); // Call 5 executed

      // Timestamps before call 6: [20, 60.01, 70.01]. Length is 3. Oldest is 20.
      // Call 6 (attempted at T=70.01s)
      // Wait time = (60000 - (70010 - 20000)) = 60000 - 50010 = 9990ms.
      // So call 6 will execute at T = 70010 + 9990 = 80000ms
      const call6Promise = client.getAlbumStats();
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(5);

      jest.advanceTimersByTime(10 * 1000); // Advance to 80.01s
      await call6Promise;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(6);


      // Now all original timestamps (0,10,20) are gone.
      // Timestamps before call 7: [60.01, 70.01, 80.01]
      // Call 7 (at 80.01s) should be delayed until 60.01 expires (at 120s)
      const call7Promise = client.getAlbumStats();
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(6);

      // Advance until 60.01s timestamp expires. Current time is 80.01s.
      // Need to advance by (60000 - (80010 - 60010)) + 10ms = (60000 - 20000) + 10ms = 40010ms
      jest.advanceTimersByTime(40 * 1000 + 10); // Total time = 120.02s
      await call7Promise;
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(7);
    });
  });
});
