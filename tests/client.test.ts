import { RedditAlbumsClient } from '../src/client';
import { setupMocks } from './mocks/handlers';
import { mockRandomAlbum, mockYearAlbums, mockGenreAlbums, mockSearchAlbums } from './mocks/data';
import { Album } from '../src/interfaces';
import nock from 'nock';

const baseURL = 'http://localhost:1234'; // Consistent base URL for testing

describe('RedditAlbumsClient', () => {
  let client: RedditAlbumsClient;

  beforeAll(() => {
    nock.disableNetConnect(); // Prevent accidental real network requests
  });

  afterAll(() => {
    nock.enableNetConnect(); // Re-enable network connections after all tests
  });

  beforeEach(() => {
    client = new RedditAlbumsClient(baseURL);
    setupMocks(baseURL); // Set up nock interceptors before each test
  });

  afterEach(() => {
    nock.cleanAll(); // Clean up nock interceptors after each test
  });

  describe('RedditAlbumsClient.getRandomAlbum', () => {
    it('should return a random album successfully', async () => {
      const album = await client.getRandomAlbum();
      expect(album).toEqual(mockRandomAlbum);
    });

    it('should throw an error when the API returns an error', async () => {
      // Override the specific mock for this test to simulate an error
      nock.cleanAll(); // Clean previous mocks
      nock(baseURL)
        .get('/random')
        .reply(500, { message: 'Internal Server Error' });

      await expect(client.getRandomAlbum()).rejects.toThrow();
    });
  });

  describe('RedditAlbumsClient.getAlbumByYear', () => {
    it('should return albums for a specific year successfully', async () => {
      const year = 1973; // Assuming mockYearAlbums contains albums from this year
      const albums = await client.getAlbumByYear(year);
      expect(albums).toEqual(mockYearAlbums);
      // Add a check to ensure the path was called as expected if nock's regex is too broad
      expect(nock.isDone()).toBe(true); // Verifies that the /year/1973 mock was hit
    });

    it('should return an empty array if no albums are found for a year (if API behaves this way)', async () => {
        nock.cleanAll();
        nock(baseURL)
            .get('/year/2099') // A year expected to have no albums
            .reply(200, []); 
        const albums = await client.getAlbumByYear(2099);
        expect(albums).toEqual([]);
        expect(nock.isDone()).toBe(true);
    });


    it('should throw an error when the API returns an error for getAlbumByYear', async () => {
      nock.cleanAll();
      nock(baseURL)
        .get('/year/1999') // Any year for this error test
        .reply(500, { message: 'Internal Server Error' });

      await expect(client.getAlbumByYear(1999)).rejects.toThrow();
    });
  });

  describe('RedditAlbumsClient.getAlbumByGenre', () => {
    it('should return albums for a specific genre successfully', async () => {
      const genre = 'Progressive Rock'; // Matches mockGenreAlbums setup
      const albums = await client.getAlbumByGenre(genre);
      expect(albums).toEqual(mockGenreAlbums);
       // Nock will verify the path includes encodeURIComponent(genre) due to the regex in setupMocks
      expect(nock.isDone()).toBe(true);
    });

    it('should correctly encode the genre parameter', async () => {
      const genreWithSpace = 'Art Rock';
      const encodedGenre = encodeURIComponent(genreWithSpace);
      
      nock.cleanAll(); // Clean existing mocks to set up a specific one for this test
      nock(baseURL)
        .get(`/genre/${encodedGenre}`)
        .reply(200, mockGenreAlbums); // Assuming mockGenreAlbums can be returned for this

      const albums = await client.getAlbumByGenre(genreWithSpace);
      expect(albums).toEqual(mockGenreAlbums);
      expect(nock.isDone()).toBe(true); // Ensures the encoded path was called
    });

    it('should throw an error when the API returns an error for getAlbumByGenre', async () => {
      nock.cleanAll();
      nock(baseURL)
        .get(`/genre/${encodeURIComponent('NonExistentGenre')}`)
        .reply(500, { message: 'Internal Server Error' });

      await expect(client.getAlbumByGenre('NonExistentGenre')).rejects.toThrow();
    });
  });

  describe('RedditAlbumsClient.searchAlbums', () => {
    it('should return albums for a search query successfully', async () => {
      const query = 'Moon'; // Matches mockSearchAlbums setup
      const albums = await client.searchAlbums(query);
      expect(albums).toEqual(mockSearchAlbums);
      expect(nock.isDone()).toBe(true);
    });

    it('should correctly encode the search query parameter', async () => {
      const queryWithSpace = 'dark side';
      const encodedQuery = encodeURIComponent(queryWithSpace);

      nock.cleanAll();
      nock(baseURL)
        .get(`/search/${encodedQuery}`)
        .reply(200, mockSearchAlbums);

      const albums = await client.searchAlbums(queryWithSpace);
      expect(albums).toEqual(mockSearchAlbums);
      expect(nock.isDone()).toBe(true);
    });

    it('should throw an error when the API returns an error for searchAlbums', async () => {
      nock.cleanAll();
      nock(baseURL)
        .get(`/search/${encodeURIComponent('a bad query')}`)
        .reply(500, { message: 'Internal Server Error' });

      await expect(client.searchAlbums('a bad query')).rejects.toThrow();
    });
  });
});
