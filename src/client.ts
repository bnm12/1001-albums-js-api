import axios, { AxiosInstance } from 'axios';
import { Album } from './interfaces';

export class RedditAlbumsClient {
  private client: AxiosInstance;
  private baseURL: string;

  constructor(baseURL: string = 'https://1001albumsgenerator.com/api/v1') {
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL: this.baseURL,
    });
  }

  public async getRandomAlbum(): Promise<Album> {
    try {
      const response = await this.client.get<Album>('/random');
      return response.data;
    } catch (error) {
      console.error('Error fetching random album:', error);
      throw error;
    }
  }

  public async getAlbumByYear(year: number): Promise<Album[]> {
    try {
      const response = await this.client.get<Album[]>(`/year/${year}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching albums for year ${year}:`, error);
      throw error;
    }
  }

  public async getAlbumByGenre(genre: string): Promise<Album[]> {
    try {
      const encodedGenre = encodeURIComponent(genre);
      const response = await this.client.get<Album[]>(`/genre/${encodedGenre}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching albums for genre ${genre}:`, error);
      throw error;
    }
  }

  public async searchAlbums(query: string): Promise<Album[]> {
    try {
      const encodedQuery = encodeURIComponent(query);
      const response = await this.client.get<Album[]>(`/search/${encodedQuery}`);
      return response.data;
    } catch (error) {
      console.error(`Error searching albums with query ${query}:`, error);
      throw error;
    }
  }
}
