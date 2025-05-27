import nock from 'nock';
import { mockRandomAlbum, mockYearAlbums, mockGenreAlbums, mockSearchAlbums } from './data';

export function setupMocks(baseURL: string) {
  nock.cleanAll(); // Clean up any previous nock interceptors

  nock(baseURL)
    .get('/random')
    .reply(200, mockRandomAlbum);

  nock(baseURL)
    .get(new RegExp('/year/\\d+')) // Matches /year/ followed by one or more digits
    .reply(200, mockYearAlbums);

  nock(baseURL)
    .get(new RegExp('/genre/.+')) // Matches /genre/ followed by any characters
    .reply(200, mockGenreAlbums);

  nock(baseURL)
    .get(new RegExp('/search/.+')) // Matches /search/ followed by any characters
    .reply(200, mockSearchAlbums);

  // Handler for a simulated server error on a specific path
  nock(baseURL)
    .get('/error-random')
    .reply(500, { message: 'Internal Server Error' });

  // Example of a more specific mock if needed later
  // nock(baseURL)
  //   .get('/year/1973')
  //   .reply(200, [mockRandomAlbum]); // Assuming mockRandomAlbum is from 1973
}
